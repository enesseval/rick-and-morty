import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async () => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
	return res.data;
});

export const characterSlice = createSlice({
	name: "characters",
	initialState: {
		items: [],
		info: null,
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchCharacters.pending]: (state, action) => {
			state.isLoading = true;
		},
		[fetchCharacters.fulfilled]: (state, action) => {
			state.items = action.payload.results;
			state.info = action.payload.info;
			state.isLoading = false;
		},
		[fetchCharacters.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		},
	},
});

export default characterSlice.reducer;
