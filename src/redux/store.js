import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import episodesSlice from "./episodesSlice";
import episodeCharacterSlice from "./episodeCharactersSlice";

export const store = configureStore({
	reducer: {
		characters: charactersSlice,
		episodes: episodesSlice,
		episodeCharacters: episodeCharacterSlice,
	},
});
