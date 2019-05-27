import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);
    this.state= {
      isNavOpen: false,
      inModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav(){
      this.setState({
        isNavOpen: !this.state.isNavOpen
      })
    }

  toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }

  handleLogin(event){
    event.preventDefault();
    this.toggleModal();
    alert("Username: "+ this.username.value + "Password: "+ this.password.value +"Remember Me: "+ this.remember.checked);  
    console.log(this.refs.username)
  }

	render(){
		return(
			<React.Fragment>
				<Navbar dark expand="md">
       				<div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
         		   	<NavbarBrand className="mr-auto" href="/">
                  <img id="logo" src="" alt="logo"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span>Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/feed">
                        <span className="fa fa-list fa-lg"></span>Posts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-phone fa-lg"></span>Contact Us
                      </NavLink>
                    </NavItem><NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span>About Us
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto">
                    <NavItem>
                      <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg">Login</span>
                      </Button>
                    </NavItem>
                </Nav>
                </Collapse>
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
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label htmlFor="username">Userame</Label>
                    <Input type="text" id="username"  name="username" innerRef={(input) => this.username = input}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="pwd">Password</Label>
                    <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}/>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
                      Remember me
                    </Label>
                  </FormGroup>
                  <Button type="submit" value="submit" className="bg-primary" onClick={this.handleLogin}>Login</Button>
                </Form>
              </ModalBody>
            </Modal>
			</React.Fragment>
			);
	}

}

export default Header;