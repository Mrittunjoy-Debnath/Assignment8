import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';



const TeamDetail = () => {
	const {teamId} = useParams();
	const [team,setTeam] = useState({});

	useEffect(()=>{
		const url=`https://api.mocki.io/v1/01938ff9/{teamId}`;
		

		fetch(url)
		.then(res=>res.json())
		.then(data=>setTeam(data));

	},[])

	return (

		<div>
			<p>This is TeamDetails Components {teamId}</p>
			<p>{team.name}</p>
			<h2>{team.name}</h2>

		</div>
		);
};

export default TeamDetail;