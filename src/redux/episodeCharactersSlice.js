import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const arr = [];

export const getCharEpisode = createAsyncThunk("charEpisode/getCharEpisode", async () => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
	console.log(res.data);
});

export const fun = createAsyncThunk("charEpisode/getChar", async (data) => {});

export const episodeCharacterSlice = createSlice({
	name: "episodeChar",
	initialState: {
		items: [],
	},
	reducers: {},
	extraReducers: {
		[getCharEpisode.fulfilled]: (state, action) => {},
	},
});

export default episodeCharacterSlice.reducer;
