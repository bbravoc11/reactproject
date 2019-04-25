import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import SelectedPost from './SelectedPostComponent';
import {Link} from 'react-router-dom';

	function RenderMenuItem({post, Click}){
		return(
			<Card>
				<Link to={`/menu/${post.id}`}>				
					<CardImg width="100%" src={post.image} alt={post.name} />					
					<CardImgOverlay>
						<CardTitle>{post.name}</CardTitle>
					</CardImgOverlay>
				</Link>
			</Card>
			);
	}


	const Feed = (props) => {
		
		const feed = props.posts.map( (post) => {
			return (
				<div key={post.id} className="col-12 col-md-5 m-1">
					<RenderMenuItem post={post}/>
				</div>
			);
		});

		return(
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Feed</h3>
						<hr />
					</div>	
				</div>
				<div className="row">					
					{feed}	
				</div>
			</div>					
			)	
	}

	

		
		
		


export default Feed;