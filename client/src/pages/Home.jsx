import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { Monitor } from "lucide-react";
function Home() {
  const [isSupported, setIsSupported] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    setIsSupported(
      Boolean(
        navigator.mediaDevices &&
        navigator.mediaDevices.getDisplayMedia
      )
    );
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
     
      <div className="max-w-md w-full text-center space-y-6">
        <div className="icon-wrapper">
          <Monitor className="icon" />
        </div>

        <h1 className="heading">
          Screen Share Test App
        </h1>

        <p className="description">
          Check your hardware and connection before you start presenting.
        </p>

        {isSupported ? (
          <Button
            onClick={() => navigate('/screen-test')}
            variant="primary"
          >
            Start Screen Test
          </Button>
        ) : (
          <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-xl">
            <p className="text-red-400 text-sm">
              ⚠️ Your browser does not support screen sharing.
              Please use Chrome or Edge.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;