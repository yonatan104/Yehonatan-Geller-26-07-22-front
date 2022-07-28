import { useRef, useState } from "react";

type ChatFooterProps = {
  sendMsg: Function;
};
export const ChatFooter = ({ sendMsg }: ChatFooterProps) => {
  const [text, setText] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    sendMsg(text);
     event.target[0].value = ''
  };
  return (
    <div className="chat-footer-container">
      <form onSubmit={handleSubmit}>
        <div className="chat-footer">
          <div className="input-container">
            <input 
              onInput={(event: any) => setText(event.target.value)}
              type="text"
              placeholder="Type a message"
            />
          </div>
          <div className="record">
            <button className="record-bttn" aria-label="Voice message">
              <svg viewBox="0 0 24 24" width="24" height="24" className="">
                <path
                  fill="currentColor"
                  d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
