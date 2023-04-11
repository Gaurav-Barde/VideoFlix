import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import suggestionsCacheSlice from "./suggestionsCacheSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    suggestionsCache: suggestionsCacheSlice,
    liveChat: liveChatSlice
  },
});

export default store;
