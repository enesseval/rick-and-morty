import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async () => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
	let page = 1;
	const data = [];
	res.data.results.map((item) => data.push(item));
	while (page < res.data.info.pages) {
		page++;
		const result = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/?page=${page}`);
		result.data.results.map((item) => data.push(item));
	}
	return data;
});

export const characterSlice = createSlice({
	name: "characters",
	initialState: {
		items: [],
		filterItems: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchCharacters.pending]: (state, action) => {
			state.status = "loading";
		},
		[fetchCharacters.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = "success";
		},
		[fetchCharacters.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		},
	},
});

export default characterSlice.reducer;
