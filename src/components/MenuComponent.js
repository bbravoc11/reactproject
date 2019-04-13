import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import SelectedDish from './SelectedDishComponent';

	function RenderMenuItem({dish, Click}){
		return(
			<Card onClick={() => Click(dish.id)}>				
				<CardImg width="100%" src={dish.image} alt={dish.name} />					
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Card>
			);
	}

	const Menu = (props) => {
		const menu = props.doshes.map( (dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<RenderMenuItem dish={dish} Click={props.Click}/>
				</div>
			);
		});

		return(
			<div className="container">
				<div className="row">					
					{menu}	
				</div>
			</div>					
			)	
	}

	

		
		
		


export default Menu;