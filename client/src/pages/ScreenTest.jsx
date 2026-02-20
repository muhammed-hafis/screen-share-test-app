import React, { useRef, useEffect } from 'react';
import useScreenShare from '../hooks/useScreenShare';
import Button from '../components/common/Button';

function ScreenTest() {
  const { stream, status, startCapture, metadata, stopCapture } = useScreenShare();
  const videoRef = useRef(null);

  // Connect the media stream to the video element whenever it changes
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#202124] text-white p-4">

      {/* 🟢 ACTIVE STREAMING STATE */}
      {status === 'granted' && (
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />

          {/* 📍 Top Right: Action Button Overlay */}
          <div className="absolute top-6 right-6 z-10">
            <Button
              onClick={stopCapture}
              variant="danger"
              className="px-6 py-2 rounded-full font-bold uppercase tracking-wider text-[10px] shadow-xl border border-white/10"
            >
              Stop Presenting
            </Button>
          </div>

          {/* 📍 Bottom Left: Metadata Info Pills */}
          <div className="absolute bottom-6 left-6 flex flex-col gap-2">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2">
              <span>🖥️</span> {metadata.displaySurface}
            </div>
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-gray-300 border border-white/10">
              {metadata.width} × {metadata.height}
            </div>
          </div>
        </div>
      )}

      {/* 🟡 SETUP STATE (Idle/Cancelled/Requesting) */}
      {(status === 'idle' || status === 'cancelled' || status === 'requesting') && (
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            📡
          </div>
          <h1 className="text-3xl font-medium mb-3">Ready to present?</h1>
          <p className="text-gray-400 mb-10">Ensure you have the right window or tab ready before starting.</p>
          <Button
            onClick={startCapture}
            variant="primary"
            disabled={status === 'requesting'}
          >
            {status === 'requesting' ? 'Opening picker...' : 'Start Presenting'}
          </Button>
        </div>
      )}

      {/* 🔴 ERROR/DENIED STATE */}
      {(status === 'denied' || status === 'error') && (
        <div className="text-center p-10 bg-red-950/20 border border-red-500/30 rounded-3xl max-w-sm">
          <p className="text-red-400 font-medium mb-8">
            {status === 'denied' ? 'Permission was denied. Please allow screen access.' : 'A technical error occurred.'}
          </p>
          <Button onClick={startCapture} variant="primary">Try Again</Button>
        </div>
      )}
    </div>
  );
}

export default ScreenTest;