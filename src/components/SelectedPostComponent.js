import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



function RenderPost({post}){

		return (	
			<div className="col-12 col-md-5">		
				<Card>
					<CardImg width="100%" src={post.image} />
					<CardBody>
						<CardTitle>{post.name}</CardTitle>
						<CardText>{post.description}</CardText>
					</CardBody>
				</Card>	
			</div>						
		);
	}

function RenderComments({post}){

		return(
			<div className="col-12 col-md-5">
				<Card>					
					<CardBody>
						<h4>Comments</h4>
						{post.comments.map((comment) => {
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

	const SelectedPost = (props) => {

		if (props.post != null) {
			return(
				<div className="container">
					<div className="row">
						<RenderPost post={props.post}/>
						<RenderComments post={props.post}/>
					</div>
				</div>
			);	
		} else {
			return <div></div>
		}
		
	}


export default SelectedPost;