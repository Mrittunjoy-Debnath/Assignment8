import React from 'react';

const Players = (props) => {
	const {id,name,email,salary} = props.Players;

	const playerStyle = {border:'1px solid red',margin:'10px',padding:'10px',height:'200px',width:'300px',float:'left'}
	const handleAddPlayers = props.handleAddPlayers;
	return (
		<div>

<div style={playerStyle}>

		<p><small>id {id}</small></p>
			<h4>{name}</h4>	
			<p> salary {salary} </p>
			<p> email {email} </p>
			<button onClick={()=> handleAddPlayers(props.Players)}>Explore</button>
		</div>
		
		</div>
		);
};

export default Players;