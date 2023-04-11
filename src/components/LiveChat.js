import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateMessage, sendMessage } from "../utils/redux/liveChatSlice";
import { RxCross1, RxPaperPlane } from "react-icons/rx";

const LiveChat = ({ height, setLiveChatActive }) => {
  const [message, setMessage] = useState("");

  const messages = useSelector((store) => store.liveChat);
  const dispatch = useDispatch();

  useEffect(() => {
    // api polling
    const timer = setInterval(() => dispatch(generateMessage()), 5000);

    return () => clearInterval(timer);
  }, [messages]);

  const sendMessageHandler = () => {
    if (message) dispatch(sendMessage({ name: "Gaurav Barde", message }));
    setMessage("");
  };

  return (
    <div
      className="flex-1 min-w-min p-4 pt-0 bg-slate-50 border border-gray-800 text-sm"
      style={{ height: height + "px" }}
    >
      <div className="h-[calc(100%-6rem)] bg-slate-100 overflow-y-scroll">
        <RxCross1
          onClick={() => setLiveChatActive(false)}
          className="text-lg ml-auto cursor-pointer mt-2"
        />
        {messages.map((item, index) => (
          <div key={index} className="flex items-start p-2">
            <div>
              <span className="table-cell align-middle w-8 h-8 bg-slate-800 rounded-full text-center text-white">
                {item.name.charAt(0)}
              </span>
              <span>{`${item.name}: `}</span>
              <span>
                {item.message.length > 20 &&
                  item.message.substring(0, 21) + "..."}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 p-2">
        <div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full text-white">
          G
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="font-bold text-gray-600">Gaurav Barde</span>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Say something ..."
            className="w-full p-1 px-2 border-b-2 border-gray-700 outline-none bg-slate-50 focus:border-blue-700"
          />
          <RxPaperPlane
            onClick={sendMessageHandler}
            className="self-end text-lg text-gray-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
