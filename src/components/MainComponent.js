import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import SelectedDish from './SelectedDishComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {

  constructor(props) {
      super(props);

      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
       <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Sal de la Rueda</NavbarBrand>
        </div>
       </Navbar>
       <Menu doshes={this.state.dishes}
          Click={(dishId)=> this.onDishSelect(dishId)}/>
       <SelectedDish 
          dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
