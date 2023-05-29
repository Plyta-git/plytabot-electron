import { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron';
import './App.css'

function App() {
  const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        ipcRenderer.on('chat-message', (_event, message) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });
    }, []);
  return (
    <>
      <div>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    </>
  )
}

export default App
