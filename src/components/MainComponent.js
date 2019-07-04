/*cd desktop/projects/saldelarueda/react/sal*/

import React, { Component } from 'react';
import SelectedPost from './SelectedPostComponent';
import Feed from './FeedComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
      super(props);
  }

  render() {

    const HomePage = () => {
      return(
          <Home featuredPosts={this.props.posts.filter((post) => post.featured)[0]} 
                promotions={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                leaders={this.props.leaders.filter((leader) => leader.featured)[0]}           
          />
        )
    }

    const PostWithId = ({match}) => {
    return (
        <SelectedPost post={this.props.posts.filter((post) => post.id === parseInt(match.params.postId,10))[0]} 
                      comments={this.props.comments.filter( (comment) => comment.postId === parseInt(match.params.postId,10))}
        />
      )
    }

    const AboutUs = () => {
      return(
        <About leaders={this.props.leaders} />
        )
      
    }


       
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/feed" component={() => <Feed posts={this.props.posts}/>} />
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

export default withRouter(connect(mapStateToProps)(Main));
