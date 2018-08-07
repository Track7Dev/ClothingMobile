import React, {Component} from 'react';
import { createDrawerNavigator } from 'react-navigation';
import {View, Text, Button} from 'react-native';
import Collections from './components/collections';
import App from './App';
import Header from './components/header';
import {connect} from 'react-redux';
import {Logout} from './reducers/actions';


class screen1 extends Component {
  static navigationOptions = {
    tabBarLabel: 'Screen 1'
  }
  render(){
    return (<View>
        <Header nav={this.props.navigation}/>
        <Text>TEST TEXT</Text>
      </View>)
  }
} 
class screen2 extends Component {
  static navigationOptions = {
    tabBarLabel: 'Screen 2'
  }
  render(){
    return (<View sryle={{width: '100%', flex: 1}}>
        <Header nav={this.props.navigation}/>

        <Collections/>
      </View>)
  }
} 
class logoutScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'LOGGING OUT'
  }
  componentWillMount(){
    this.props.Logout();
  }
  render(){
    return <View />
  }
} 
const logout = connect(mapStateToProps, {Logout})(logoutScreen);

// Manifest of possible screens
const Nav = createDrawerNavigator({
  Dashboard:{
    screen: screen1
  },
  Collections:{
    screen:Collections
  },
  LOGOUT:{
    screen: logout
  }
},
{contentOptions: {
  activeTintColor: 'blue',
  itemsContainerStyle: {
    marginVertical: 0,
  },
  iconContainerStyle: {
    opacity: 1
  }
}}
)

const mapStateToProps = (state) => {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, {Logout})(Nav);