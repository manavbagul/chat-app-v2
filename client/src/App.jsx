import React, { useEffect } from 'react';
import {io} from "socket.io-client"

export const App = () => {
  const socket = io("http://localhost:2323");

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log(`Connected`);
    });
  },[]);

  return <div>App</div>
}


export default App;