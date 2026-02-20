import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

function Home() {
  const [isSupported, setIsSupported] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSupported(Boolean(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia));
  }, []);

  return (
    // Main Wrapper: Deep dark background and full-screen centering
    <div className="min-h-screen bg-[#202124] text-white flex flex-col items-center justify-center p-6">

      {/* Lobby "Card" Area */}
      <div className="max-w-md w-full text-center space-y-6">

        {/* Visual Cue: An icon representing the camera or screen */}
        <div className="w-24 h-24 bg-[#3c4043] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg border border-gray-700">
          <span className="text-4xl">🖥️</span>
        </div>

        <h1 className="text-3xl font-medium tracking-tight">Screen Share Test</h1>

        <p className="text-gray-400 text-lg">
          Check your hardware and connection before you start presenting.
        </p>

        <div className="pt-6">
          {isSupported ? (
            <div className="space-y-4">
              <Button
                onClick={() => navigate('/screen-test')}
                variant='primary'
                className="px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all active:scale-95"
              >
                Start Screen Test
              </Button>
              <p className="text-xs text-gray-500 uppercase tracking-widest pt-4">
                Ready to join?
              </p>
            </div>
          ) : (
            <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-xl">
              <p className="text-red-400 text-sm">
                ⚠️ Your browser does not support screen sharing. Please use Chrome or Edge.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Optional: Footer decoration like Google Meet's clock or meeting ID */}
      <div className="fixed bottom-8 left-8 text-gray-500 text-sm font-mono">
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | Screen-Test-App
      </div>
    </div>
  );
}

export default Home;