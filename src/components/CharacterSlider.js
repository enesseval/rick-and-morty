import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharEpisode, fun } from "../redux/episodeCharactersSlice";

function CharacterSlider({ char }) {
	const dispatch = useDispatch();

	dispatch(getCharEpisode());

	return (
		<div className="main">
			<div className="image-container"></div>
		</div>
	);
}

export default CharacterSlider;
