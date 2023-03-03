import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
					<h4>Characters: </h4>
					<div className="image-container">
						{item.characters.map((char) => (
							<div key={char.slice(42, char.length)} className="episode_characters">
								<div className="episode_characters_front">
									<img className="image" src={characters[Number(char.slice(42, char.length) - 1)].image} alt="" />
								</div>
								<div className="episode_characters_back" key={item.id}>
									<p>Name: {characters[Number(char.slice(42, char.length) - 1)].name}</p>
									<p>Gender: {characters[Number(char.slice(42, char.length) - 1)].gender}</p>
									<p>Species: {characters[Number(char.slice(42, char.length) - 1)].species}</p>
									<p>Status: {characters[Number(char.slice(42, char.length) - 1)].status}</p>
									<p>Location: {characters[Number(char.slice(42, char.length) - 1)].location.name}</p>
									<p>Origin: {characters[Number(char.slice(42, char.length) - 1)].origin.name}</p>
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
