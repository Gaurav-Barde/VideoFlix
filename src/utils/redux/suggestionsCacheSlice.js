import { createSlice } from "@reduxjs/toolkit";

const suggestionsCacheSlice = createSlice({
  name: "suggestionsCache",
  initialState: {},
  reducers: {
    cacheSuggestions: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSuggestions } = suggestionsCacheSlice.actions;
export default suggestionsCacheSlice.reducer;
