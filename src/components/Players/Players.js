import React from 'react';
import { Link } from 'react-router-dom';

const Players = (props) => {
	const {id,name,email,salary} = props.Players;

	const playerStyle = {border:'1px solid red',margin:'10px',padding:'10px',height:'250px',width:'300px',float:'left'}
	const handleAddPlayers = props.handleAddPlayers;
	return (
		<div>

<div style={playerStyle}>

		<p><small>id {id}</small></p>
			<h4>{name}</h4>	
			<p> salary {salary} </p>
			<p> email {email} </p>
			<p>Explore : <Link to={`/team/${id}`}> More information {id} </Link> </p>
			

		</div>

		</div>
		);
};

export default Players;