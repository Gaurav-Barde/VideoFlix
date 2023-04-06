import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import suggestionsCacheSlice from "./suggestionsCacheSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    suggestionsCache: suggestionsCacheSlice,
  },
});

export default store;
