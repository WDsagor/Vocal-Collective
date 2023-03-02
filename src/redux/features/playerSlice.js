import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentSong: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
});
export default playerSlice.reducer;
