import React from 'react';
import './App.css';

import { Route,Switch,Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop-page.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //userAuth is object which we are getting from firebase auth(google authentication)

      const {setCurrentUser} = this.props;
      //this setCurrentUser is from mapDispatchToProps (left side)
      if(userAuth){
        //if user sign in then we are setting currentUser with the database(USERS) data
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() //snapShot.data() has displayName,email and createdAt properties from databae USERS
            }
          });

          console.log(this.state);
        });
      }else{
        //if user logged out then userAuth is null,so we are setting the currentUser to null

        setCurrentUser(userAuth);
      }

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  //setCurrentUser left side is a props name that we are using in this file
  //actually it is a function which take user as a parameter and pass it to the setCurrentUser(user) in user.action.js file
  //setCurrentUser right side is a function from user.action.js,in which we are passing our user
});
//using mapDispatchToProps we are setting the currentUser into redux(same as this.setState)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
//const mapStateToProps = ({user}) => ({currentUser: user.currentUser}); alternative of the above mapStateToProps
//mapStateToProps we are using this to redirect to home page(/) after user sign in

//to set the props: mapDispatchToProps
//to use the set props: mapStateToProps

export default connect(mapStateToProps,mapDispatchToProps)(App);
//by only using the <Route>, page will render more than one component on same page if more than one path matches
//by using <Switch>, page will render only one component of matching path

//auth.onAuthStateChanged is a open subscription method, so we have to close this open connection by doing this.unsubscribeFromAuth();
//render from ract-router takes a function as a parameter