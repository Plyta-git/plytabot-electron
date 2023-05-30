import { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron';
import './App.css'

function App() {
  const ipcRenderer = window.ipcRenderer;

useEffect(() => {
  function handleMessage(event: any, message: any) {
    console.log(message);
  }

  ipcRenderer.on('message-from-child', handleMessage);

  // Usuń nasłuch, gdy komponent jest demontowany
  return () => {
    ipcRenderer.removeAllListeners('message-from-child');
  };
}, []);
 
  return (
    <>
      <div>

        </div>
    </>
  )
}

export default App
