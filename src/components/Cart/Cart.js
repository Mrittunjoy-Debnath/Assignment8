import React from 'react';

const Cart = (props) => {
	const cart = props.cart;
	let totalSalary = 0;

	for(let i = 0; i < cart.length ; i++) {
			const players = cart[i];
			totalSalary=totalSalary+players.salary;
		}

	return (

		<div>

		<h2>Total Salary : {cart.length}</h2>
		<p> totalSalary :{totalSalary}</p>

		</div>
		);
};

export default Cart;