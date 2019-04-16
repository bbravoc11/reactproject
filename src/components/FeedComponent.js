import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import SelectedPost from './SelectedPostComponent';

	function RenderMenuItem({post, Click}){
		return(
			<Card onClick={() => Click(post.id)}>				
				<CardImg width="100%" src={post.image} alt={post.name} />					
				<CardImgOverlay>
					<CardTitle>{post.name}</CardTitle>
				</CardImgOverlay>
			</Card>
			);
	}

	const Feed = (props) => {
		
		const feed = props.posts.map( (post) => {
			return (
				<div key={post.id} className="col-12 col-md-5 m-1">
					<RenderMenuItem post={post} Click={props.Click}/>
				</div>
			);
		});

		return(
			<div className="container">
				<div className="row">					
					{feed}	
				</div>
			</div>					
			)	
	}

	

		
		
		


export default Feed;