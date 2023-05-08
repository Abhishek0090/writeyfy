import { Link } from "react-router-dom";
import "./ChatDetails.css";
import { format, render, cancel, register } from "timeago.js";
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import * as timeago from "timeago.js";  
import WriterMessage from "~/components/ChatDetails/WriterMessage";
import UserMessage from "~/components/ChatDetails/UserMessage";

const ChatDetails = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState();

  function handleOnEnter(text) {
    setMessage(text);
  }

  
  return (
    // <div className="flex w-full flex-col gap-5">
      <div className=" w-[60%] mt-3 flex h-fit flex-col gap-5 lg:grid m-auto ">
        <h4 className="px-2 text-xl font-bold text-navy-700 ">
          ALL Conversations
        </h4>

        <div className="message">
          <div className="container">
            <div className="messages">
              <UserMessage />
              <WriterMessage /> 
              <UserMessage />
              <WriterMessage /> 
              <UserMessage />
              <WriterMessage />  
            </div>
            <div className="write">
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
              {/* <textarea type="text" placeholder="write a message" /> */}
              <button className="rounded-2xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ChatDetails;
