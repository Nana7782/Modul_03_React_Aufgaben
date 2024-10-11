import { useState } from "react";
import { getEncodedText, getDecodedText } from "./utils/encryption";

export default function App() {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(0);
  // const [newMessage, setNewMessage] = useState("")

  function handleEncode() {
    const newMessage: string = getEncodedText(message, shift);

    return newMessage;
  }
  const newMessage = handleEncode();
  return (
    <div>
      <h1>Ceasar Code</h1>
      <label htmlFor="message">Nachricht</label>
      <input
        value={message}
        type="text"
        id="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <label htmlFor="shift">Shift</label>
      <input
        value={shift}
        type="number"
        id="shift"
        onChange={(e) => {
          setShift(parseInt(e.target.value));
        }}
      />
      {/* <button type="button" id="encode" onClick={handleEncode}>
        encode
      </button> */}
      {/* <button type="button" id="decode" onClick={getDecodedText}>
        decode
      </button> */}
      <div>
        <p data-testid="output" id="output">
          {newMessage}
        </p>
      </div>
    </div>
  );
}
