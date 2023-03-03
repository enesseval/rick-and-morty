import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const arr = [];

export const getEpisodes = createAsyncThunk("episodes/getEpisodes", async () => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episode`);
	let page = 1;
	res.data.results.map((item) => arr.push(item));
	while (page < res.data.info.pages) {
		page++;
		const result = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episode?page=${page}`);
		result.data.results.map((i) => arr.push(i));
	}
	return arr;
});

export const episodeSlice = createSlice({
	name: "episodes",
	initialState: {
		items: [],
		info: null,
		status: "idle",
		page: 1,
	},
	reducers: {},
	extraReducers: {
		[getEpisodes.pending]: (state, action) => {
			state.info = "loading";
		},
		[getEpisodes.fulfilled]: (state, action) => {
			state.info = "success";
			state.items = action.payload;
		},
	},
});

export default episodeSlice.reducer;
