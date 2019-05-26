import React, { Component } from 'react';
import SelectedPost from './SelectedPostComponent';
import Feed from './FeedComponent';
import {POSTS} from '../shared/posts';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
      super(props);

      this.state = {
        posts: POSTS,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        selectedPost: null
      };
  }


  render() {

    const HomePage = () => {
      return(
          <Home featuredPosts={this.state.posts.filter((post) => post.featured)[0]} 
                promotions={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                leaders={this.state.leaders.filter((leader) => leader.featured)[0]}           
          />
        )
    }

    const PostWithId = ({match}) => {
    return (
        <SelectedPost post={this.state.posts.filter((post) => post.id === parseInt(match.params.postId,10))[0]} 
                      comments={this.state.comments.filter( (comment) => comment.postId === parseInt(match.params.postId,10))}
        />
      )
    }

    const AboutUs = () => {
      return(
        <About leaders={this.state.leaders} />
        )
      
    }


       
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/feed" component={() => <Feed posts={this.state.posts}/>} />
          <Route path="/menu/:postId" component={PostWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={AboutUs} />
          <Redirect to="/home"/>
        </Switch>      
        <Footer/>
      </div>
    );
  }
}

export default Main;
