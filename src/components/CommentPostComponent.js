import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, Row, Input, Label, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class PostComment extends Component {

  constructor(props){
    super(props);
    this.state= {

      isModalOpen: false

    };
    
    this.commentModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }

 
  handleSubmit(values){
        console.log('Current state is '+ JSON.stringify(values));
        alert('Current state is '+ JSON.stringify(values));       
    }
  

	render(){
		return(     
      <React.Fragment>	
        <Button onClick={this.commentModal}>Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.commentModal}>
          <ModalHeader toggle={this.commentModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select model=".rating"  name="rating" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="name">Name</Label>
                  <Control.text model=".name" name="name" className="form-control"
                  validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15)
                  }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                        required: 'Required', 
                        minLength: 'Must be greater than 2 characters', 
                        maxLength: 'Must be 15characters or less'
                    }}
                />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea model=".comment" name="comment" rows={6} className="form-control"/>
                </Col>
              </Row>
              <Button type="submit" value="submit" className="bg-primary">Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
		);
	}

};

export default PostComment;