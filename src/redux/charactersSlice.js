import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async (data) => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/?page=${data}`);
	return res.data;
});

export const fetchCharacter = createAsyncThunk("characters/getCharacter", async (id) => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`);
	return res.data;
});

export const characterSlice = createSlice({
	name: "characters",
	initialState: {
		items: [],
		filterItems: [],
		info: null,
		status: "idle",
		error: null,
		page: 1,
		oneCharacter: {
			item: [],
			status: "idle",
		},
	},
	reducers: {},
	extraReducers: {
		[fetchCharacters.pending]: (state, action) => {
			state.status = "loading";
		},
		[fetchCharacters.fulfilled]: (state, action) => {
			state.items = [...state.items, ...action.payload.results];
			state.status = "success";
			state.page += 1;
		},
		[fetchCharacters.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		},
		[fetchCharacter.fulfilled]: (state, action) => {
			state.oneCharacter.item = action.payload;
			state.oneCharacter.status = "success";
		},
	},
});

export default characterSlice.reducer;
