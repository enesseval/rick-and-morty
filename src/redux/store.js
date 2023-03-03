import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import episodesSlice from "./episodesSlice";

export const store = configureStore({
	reducer: {
		characters: charactersSlice,
		episodes: episodesSlice,
	},
});
