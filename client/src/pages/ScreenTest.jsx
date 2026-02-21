import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScreenShare from '../hooks/useScreenShare';
import Button from '../components/common/Button';

import {
  ScreenShare,
  MonitorOff,
  Monitor,
  Loader2,
  AlertTriangle,
  Loader
} from "lucide-react";
import Badge from '../components/common/Badge';

function ScreenTest() {
  const { stream, status, metadata, startCapture, stopCapture } =
    useScreenShare();
  const [showControls, setShowControls] = useState(true);
  const hideTimeoutRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream || null;
    }
  }, [stream]);
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);
  const handleMouseMove = () => {
    setShowControls(true);

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };
  return (
    <div className="w-full h-full relative flex items-center justify-center">

      {status === 'granted' && (
        <div
          className={`relative w-full h-full bg-black ${showControls ? 'cursor-default' : 'cursor-none'}`}
          onMouseMove={handleMouseMove}
        >
          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />

          {/* Top Gradient Overlay */}
          <div
            className={` absolute top-0 left-0 right-0 px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-b from-black/80 to-transparent transition-all duration-300 ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} `}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              {/* Left Section */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                <Badge variant="live" className="text-xs sm:text-sm">
                  <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Live</span>
                </Badge>

                {metadata && (
                  <>
                    <Badge
                      variant="default"
                      className="text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none"
                    >
                      {metadata.displaySurface || 'Screen'}
                    </Badge>

                    <Badge
                      variant="default"
                      className="text-xs sm:text-sm"
                    >
                      {metadata.width} × {metadata.height}
                    </Badge>
                  </>
                )}
              </div>

              {/* Right Section */}
              <div className="flex justify-end">
                <Button
                  onClick={stopCapture}
                  variant="danger"
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  Stop
                </Button>
              </div>

            </div>
          </div>


        </div>
      )}

      {/* 🟡 REQUESTING */}
      {status === 'requesting' && (
        <div className="max-w-md w-full text-center space-y-6">
          <div className="icon-wrapper">
            <Loader2 className="icon animate-spin" />
          </div>

          <h1 className="heading">
            Opening screen picker...
          </h1>

          <Button disabled variant="primary">
            <Loader className="animate-spin w-4 h-4" />
          </Button>
        </div>
      )}

      {/* 🔵 IDLE / CANCELLED */}
      {(status === 'idle' || status === 'cancelled') && (
        <div className="max-w-md w-full text-center space-y-6 p-6">
          <div className="icon-wrapper">
            <ScreenShare className="icon" />
          </div>

          <h1 className="heading">
            Ready to share?
          </h1>

          <p className="description">
            Ensure you have the right window or tab ready.
          </p>

          <Button
            onClick={startCapture}
            variant="primary"
          >
            Start Screen Share
          </Button>
        </div>
      )}

      {/* 🔴 ERROR */}
      {(status === 'denied' || status === 'error') && (
        <div className="max-w-md w-full text-center space-y-6 p-6">
          <div className="icon-wrapper bg-red-600/20 border border-red-500/40">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>

          <h1 className="heading">
            {status === 'denied'
              ? 'Permission Denied'
              : 'Technical Error'}
          </h1>

          <p className="description">
            {status === 'denied'
              ? 'Please allow screen access and try again.'
              : 'Something went wrong while starting screen share.'}
          </p>

          <Button onClick={startCapture} variant="primary">
            Try Again
          </Button>
        </div>
      )}

      {/* ⚫ STOPPED */}
      {status === 'stopped' && (
        <div className="max-w-md w-full text-center space-y-6 p-6">
          <div className="icon-wrapper">
            <MonitorOff className="icon" />
          </div>

          <h1 className="heading">
            Screen sharing stopped
          </h1>

          <div className="flex gap-4 justify-center pt-2">
            <Button onClick={startCapture} variant="primary">
              Retry Screen Test
            </Button>

            <Button
              onClick={() => navigate('/')}
              variant="secondary"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScreenTest;