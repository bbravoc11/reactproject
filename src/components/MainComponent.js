import React, { Component } from 'react';
import SelectedPost from './SelectedPostComponent';
import Feed from './FeedComponent';
import {POSTS} from '../shared/posts';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
      super(props);

      this.state = {
        posts: POSTS,
        selectedPost: null
      };
  }

 

  render() {

    const HomePage = () => {
      return(
          <Home/>
        )
    }
       
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/feed" component={() => <Feed posts={this.state.posts}/>} />
          <Redirect to="/home"/>
        </Switch>      
        <Footer/>
      </div>
    );
  }
}

export default Main;
