import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button';
function Home() {

  const [isSupported, setIsSupported] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    setIsSupported(Boolean(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia))
  }, [])
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Screen Share Test App</h1>

      {isSupported ? (


        <Button
          onClick={() => (navigate('/screen-test'))}
          variant='primary'>
          Start Screen Test
        </Button>
      ) : (
        <p className="text-red-500">
          Your browser does not support screen sharing. Please use Chrome or Edge.
        </p>
      )}
    </div>
  );
}

export default Home