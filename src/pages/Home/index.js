import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Home() {
	const characters = useSelector((state) => state.characters.items);
	const status = useSelector((state) => state.characters.status);
	const error = useSelector((state) => state.characters.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchCharacters());
		}
	}, [dispatch, status]);

	if (status === "loading") {
		return <Loading />;
	}

	if (status === "failed") {
		return <Error message={error} />;
	}

	return (
		<div className="char_list">
			<Masonry breakpointCols={5} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
				{characters.map((character) => (
					<Link to={`/detail/${character.id}`} key={character.id}>
						<div className="char_card_front">
							<img src={character.image} alt={character.name} className="character" />
							<div className="char_name">{character.name}</div>
						</div>
						<div className="char_card_back">
							<h6>Gender: {character.gender}</h6>
							<h6>Episode: {character.episode.length}</h6>
							<h6>Species: {character.species}</h6>
							<h6>Status: {character.status}</h6>
							<h6>Location: {character.location.name}</h6>
							<h6>Origin: {character.origin.name}</h6>
						</div>
					</Link>
				))}
			</Masonry>
		</div>
	);
}

export default Home;
