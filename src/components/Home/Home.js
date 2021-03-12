import React, {useState,useEffect} from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';

const Home = () => {
     const [players,setPlayers]=useState([]);
     const [cart,setCart] =useState([]);
    useEffect(()=>{
        fetch('https://api.mocki.io/v1/01938ff9')
        .then(res => res.json())
        .then(data=>{
            setPlayers(data);
            console.log(data);
            const names = data.map(players=>players.name);
            console.log(names);
        })
        .catch(error =>console.log(error))
    },[])

        const handleAddPlayers = (players) => {
      const newCart = [...cart , players];
      setCart(newCart);
    }
	return (

		<div>
    <h1>Mujib 100 FootBall Turnament 2021 </h1>
    <h2>Team Tracker 2021</h2>
    <img src="image.jpg" height="200px" width="1200px" />
    <ul>
    {
         players.map(players => <Players Players={players} handleAddPlayers={handleAddPlayers} key={players.name}> </Players>)
    }
    </ul>
		</div>
		);
};

export default Home;