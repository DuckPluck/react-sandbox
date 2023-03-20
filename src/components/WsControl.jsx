import React, {useState} from 'react';

let socket = null;

export function WsControl() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSend() {
    if (isConnected) {
      socket.send(`test`);
    } else {
      console.error('You need WS connection to send test message');
    }
  }

  function handleClear() {
    setMessages([]);
  }

  function handleDisconnect() {
    socket.close();
    setIsConnected(false);
  }

  function handleConnect() {
    setIsLoading(true);

    socket = new WebSocket('wss://javascript.info/article/websocket/chat/ws');

    socket.onopen = function (e) {
      console.log('WebSocket connected!');
      setIsLoading(false);
    };

    socket.onmessage = function (e) {
      console.log(`Received WS message from server: ${e.data}`);
      setMessages(prevState => [...prevState, e.data])
    };

    socket.onclose = function (e) {
      if (e.wasClean) {
        console.log(`WS connection was cleanly closed, code: ${e.code}`);
      } else {
        console.log(`WS connection was aborted`);
      }
    };

    socket.onerror = function (e) {
      console.log(`Error type: ${e.title}`);
    };

    setIsConnected(true);
  }

  return (
      <div>
        <p>Websocket {isConnected ? isLoading ? 'Loading...' : 'Connected' : 'Disconnected'}</p>
        <button onClick={handleConnect}>Connect</button>
        <button onClick={handleSend}>Send</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleDisconnect}>Disconnect</button>
        <p>{isConnected ? 'Messages:' : ''}</p>
        <WsMessageList messages={messages} />
      </div>
  );
}


export function WsMessageList(props) {
  return (
      <>
        {props.messages.map((msg, i) => <p key={i} className={'border-box'}>{msg}</p>)}
      </>
  );
}