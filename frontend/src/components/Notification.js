import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

function Notification() {
  // const [socket] = useState(io(process.env.REACT_APP_API_URL));
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   socket.on('notification', (msg) => setMessage(msg));
  //   return () => socket.disconnect();
  // }, [socket]);

  return (
    <div>
      {/* <p>Notification: {message}</p> */}
      <p>Real-time notifications will appear here.</p>
    </div>
  );
}

export default Notification;