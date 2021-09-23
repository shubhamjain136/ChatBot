import "./App.css";
import { useState } from "react";
import Chatbot from "./components/Chatbot";
function App() {
  const [chat, setChat] = useState(false);
  return (
    <div>
      <h1 className="text-center text-white">Chatbot</h1>
      <button
        style={{
          position: "absolute",
          bottom: 15,
          right: 15,
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          setChat(true);
        }}
      >
        <img src="newlogo.png" alt="logo" />
      </button>
      {chat && <Chatbot chat={chat} setChat={setChat} />}
    </div>
  );
}

export default App;
