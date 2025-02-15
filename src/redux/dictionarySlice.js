import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    words: [
      { spanish: "Lunes", english: "Monday", portuguese: "Segunda-feira" },
      { spanish: "Martes", english: "Tuesday", portuguese: "Terça-feira" },
    ],
  },
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    removeWord: (state, action) => {
      state.words = state.words.filter((word) => 
        word.spanish !== action.payload &&
        word.english !== action.payload &&
        word.portuguese !== action.payload
      );
    },
  },
});

export const { addWord, removeWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
