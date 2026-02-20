import React, { useEffect, useState } from 'react'

function useScreenShare() {
    const [stream, setStream] = useState(null);
    const [status, setStatus] = useState('idle')
    const [metaData, setMetaData] = useState(null)
    const startCapture = async () => {
        setStatus('requesting')
        try {
            const mediaStream = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: { ideal: 30 } },
                audio: false
            })
            const track = mediaStream.getVideoTracks()[0];
            const settings = track.getSettings();

            setMetaData({
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

    return { stream, status, startCapture,metaData }
}

export default useScreenShare