import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      console.log(action.payload);
    },

    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      if (action.payload.song) {
        state.currentSongs = action.payload.song.trackMetadata.trackUri;
      }
      console.log(state.currentSongs);
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    // nextSong: (state, action) => {
    //   if (state.currentSongs[action.payload]?.trackMetadata.trackUri) {
    //     state.activeSong = state.currentSongs[action.payload]?.track;
    //   } else {
    //     state.activeSong = state.currentSongs[action.payload];
    //   }
    //   state.currentIndex = action.payload;
    //   state.isActive = true;
    // },
    // prevSong: (state, action) => {
    //   if (state.currentSongs[action.payload]?.track) {
    //     state.activeSong = state.currentSongs[action.payload]?.track;
    //   } else {
    //     state.activeSong = state.currentSongs[action.payload];
    //   }
    //   state.currentIndex = action.payload;
    //   state.isActive = true;
    // },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    // selectCountry: (state, action) => {
    //   state.country = action.payload;
    // },
  },
});
export const { setToken, playPause, setActiveSong, nextSong, prevSong } =
  playerSlice.actions;
export default playerSlice.reducer;
