import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEpisodes = createAsyncThunk("episodes/getEpisodes", async () => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episode`);
	return res.data;
});

export const episodeSlice = createSlice({
	name: "episodes",
	initialState: {
		items: [],
		info: null,
		status: "idle",
	},
	reducers: {},
	extraReducers: {
		[getEpisodes.pending]: (state, action) => {
			state.info = "loading";
		},
		[getEpisodes.fulfilled]: (state, action) => {
			state.info = "success";
			state.items = action.payload.results;
			state.info = action.payload.info;
		},
	},
});

export default episodeSlice.reducer;
