import React, { Component } from 'react';
import Counter from './Counter'

class Button extends Component{
	constructor(props){

		super(props);
		this.state = {
			label: "Increment Count"
			handleClick: <Counter incrementCount/>
		};

	}
	render(){
		return(
			<h1>{this.state.label}</h1>
		);
	}
}