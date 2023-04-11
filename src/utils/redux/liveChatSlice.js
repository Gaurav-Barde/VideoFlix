import { createSlice } from "@reduxjs/toolkit";
import { generateNameWithMessage } from "../helper";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: [
    {
      name: "Gaurav",
      message: "Lorem Ipsum is simply dummy text.",
    },
  ],

  reducers: {
    generateMessage: (state) => {
      if (state.length > 10) state.shift();
      state.push(generateNameWithMessage());
    },
    sendMessage: (state, action) => {
      if (state.length > 10) state.shift();
      state.push(action.payload);
    },
  },
});

export default liveChatSlice.reducer;
export const { generateMessage, sendMessage } = liveChatSlice.actions;
