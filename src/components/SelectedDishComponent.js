import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



function RenderDish({dish}){

		return (	
			<div className="col-12 col-md-5">		
				<Card>
					<CardImg width="100%" src={dish.image} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>	
			</div>						
		);
	}

function RenderComments({dish}){

		return(
			<div className="col-12 col-md-5">
				<Card>					
					<CardBody>
						<h4>Comments</h4>
						{dish.comments.map((comment) => {
							return (
								<div>
									<p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
									<p>{comment.comment}</p>
								</div>
								)
						})}
					</CardBody>
				</Card>	
			</div>	
		);
	}

	const SelectedDish = (props) => {

		if (props.dish != null) {
			return(
				<div className="container">
					<div className="row">
						<RenderDish dish={props.dish}/>
						<RenderComments dish={props.dish}/>
					</div>
				</div>
			);	
		} else {
			return <div></div>
		}
		
	}


export default SelectedDish;