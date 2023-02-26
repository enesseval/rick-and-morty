import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../redux/charactersSlice";

function Detail() {
	const dispatch = useDispatch();

	const { char_id } = useParams();

	const char = useSelector((state) => state.characters.oneCharacter.item);

	useEffect(() => {
		dispatch(fetchCharacter(char_id));
	}, [dispatch, char_id]);

	console.log(char);

	return (
		<div className="detail_char_container">
			<div>
				<h2>{char.name}</h2>
			</div>
			<div>
				<div>
					<img src={char.image} alt="" />
				</div>
				<div>
					<h4>{char.gender}</h4>
					<h4>{char.species}</h4>
					<h4>{char.status}</h4>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Detail;
