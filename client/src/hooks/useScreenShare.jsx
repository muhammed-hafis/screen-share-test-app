import { useCallback, useEffect, useRef, useState } from 'react';

function useScreenShare() {
    const [stream, setStream] = useState(null);
    const [status, setStatus] = useState('idle');
    const [metadata, setMetadata] = useState(null);

    const streamRef = useRef(null);

    const cleanup = useCallback((mediaStream) => {
        if (mediaStream) {
            mediaStream.getTracks().forEach((track) => track.stop());
        }
    }, []);

    const startCapture = useCallback(async () => {
        setStatus('requesting');

        try {
            const mediaStream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    width: { ideal: 1920 },
                    height: { ideal: 1080 },
                    frameRate: { ideal: 30 }
                },
                audio: false,
            });

            const track = mediaStream.getVideoTracks()[0];
            const settings = track.getSettings();

            setMetadata({
                width: settings.width,
                height: settings.height,
                displaySurface: settings.displaySurface,
            });

            track.onended = () => {
                cleanup(mediaStream);
                setStream(null);
                setStatus('stopped'); 
            };

            setStream(mediaStream);
            streamRef.current = mediaStream;
            setStatus('granted');

        } catch (error) {
            const errorMap = {
                NotAllowedError: 'denied',
                AbortError: 'cancelled',
                NotFoundError: 'cancelled',
            };

            setStatus(errorMap[error.name] || 'error');
        }
    }, [cleanup]);

    const stopCapture = useCallback(() => {
        if (streamRef.current) {
            cleanup(streamRef.current);
            streamRef.current = null;
        }
        setStream(null);
        setStatus('stopped');
    }, [cleanup]);

    useEffect(() => {
        return () => {
            if (streamRef.current) {
                cleanup(streamRef.current);
            }
        };
    }, [cleanup]);

    return {
        stream,
        status,
        metadata,
        startCapture,
        stopCapture,
    };
}

export default useScreenShare;