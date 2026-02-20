import React, { useCallback, useEffect, useState } from 'react'

function useScreenShare() {
    const [stream, setStream] = useState(null);
    const [status, setStatus] = useState('idle')
    const [metadata, setMetadata] = useState(null)


    const startCapture = async () => {
        setStatus('requesting')
        try {
            const mediaStream = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: { ideal: 30 } },
                audio: false
            })
            const track = mediaStream.getVideoTracks()[0];
            const settings = track.getSettings();

            setMetadata({
                width: settings.width,
                height: settings.height,
                displaySurface: settings.displaySurface
            })
            track.onended = () => {
                cleanup(mediaStream);
                setStream(null),
                    setStatus('stopeed')
            };
            setStream(mediaStream);
            setStatus('granted')
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                setStatus('denied');
            } else if (error.name === 'NotFoundError') {
                setStatus('cancelled');
            } else {
                setStatus('error'); // Set to a string status for consistency
            }
        }
    }
    const stopCapture = useCallback(() => {
        cleanup(stream);
        setStream(null);
        setStatus('idle');
    }, [stream]);
    const cleanup = (mediaStream) => {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop())
        }
    }

    useEffect(() => {
        // This return function runs when the component unmounts
        return () => {
            cleanup(stream);
        };
    }, [stream]); // Runs whenever the stream changes or unmounts

    return { stream, status, startCapture, metadata, stopCapture }
}

export default useScreenShare