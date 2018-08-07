import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, StatusBar, ScrollView } from 'react-native';
import Nav from './AppNav';
import Auth from './pages/auth';
import Header from './components/header';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';
const loggedIn = false;
const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 class Container extends React.Component {
  constructor(){
    super();
    this.state = {loggedIn: false}
  }
  
  render(){
    return(
      <View style={{width: '100%', height:'100%'}}>
        
          {/* MAIN WINDOW */}
          <View style={{flex:1}}>
            {/* DRAWER */}
            {this.props.main.authStatus === 'AUTHORIZED' ? <Nav active={false}/> : <Auth parent={this}/>}
          </View>

          {/* FOOTER */}
          {this.props.main.authStatus === 'AUTHORIZED' ? <View style={styles.footer}><Text style={{color: 'white'}}>Company Name Copyright 2018</Text></View> : null}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    main: state.main
  }
}

export const Container_MAP = connect(mapStateToProps, null)(Container);


export default class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
        <Container_MAP/>
      </Provider>
    );
  }
}




const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'gold',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    
  }
});
