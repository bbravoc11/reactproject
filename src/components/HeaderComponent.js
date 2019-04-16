import React, { Component } from 'react';
import {Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	render(){
		return(
			<React.Fragment>
				<Navbar dark expand="md">
       				<div className="container">
         		   		  <NavbarBrand className="mr-auto" href="/">
                                    <img id="logo" src="" alt="logo"/>
                                </NavbarBrand>
       				</div>
       			</Navbar>
       			<Jumbotron>
       				<div className="container">
       					<div ClassName="row row-header">
       						<div ClassName="col-12 col-sm-6">
       							<h1>Sal de la  Rueda</h1>
       							<p>This will set me free</p>
       						</div>
       					</div>
       				</div>
       			</Jumbotron>
			</React.Fragment>
			);
	}

}

export default Header;