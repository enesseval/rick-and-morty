import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterSlider from "../../components/CharacterSlider";
import { getEpisodes } from "../../redux/episodesSlice";
import "./style.css";

function Episodes() {
	const dispatch = useDispatch();
	const episodes = useSelector((state) => state.episodes.items);
	const characters = useSelector((state) => state.characters.items);

	useEffect(() => {
		dispatch(getEpisodes());
	}, [dispatch]);

	return (
		<div className="episodes">
			{episodes.map((item) => (
				<div className="episode" key={item.id}>
					<h3>
						Episode Name: {item.name} / Episode: {item.episode} / Air Date: {item.air_date}
					</h3>
					<div className="image-container">
						<h4>Characters: </h4>
						{item.characters.map((char) => (
							<div className="episode_characters">
								<div className="episode_characters_front">
									<img className="image" src={characters[Number(char.slice(42, char.length) - 1)].image} alt="" />
								</div>
								<div className="episode_characters_back">
									<h4>{characters[Number(char.slice(42, char.length) - 1)].name}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Episodes;
