import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render(){
    return (
      <View style={{width: '100%', height: 50, backgroundColor: 'black', borderBottomColor: 'gold', borderBottomWidth: 2, display: 'flex', flexDirection: 'row'}}>
        {/* DRAWER */}
        <TouchableOpacity onPress={() => this.props.nav.openDrawer()} style={{backgroundColor: 'gold', height:50, width:50, justifyContent: 'center', alignItems: 'center'}}><Icon name="align-left" size={23} color="red"  /></TouchableOpacity>
        {/* LOGO HEADER */}
        <View style={{backgroundColor: 'black', height:50, flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'white'}}>COMPANY NAME</Text></View>
        {/* ACCOUNT DRAWER */}
        <View style={{backgroundColor: 'gold', height:50, width:50}}/>
      </View>
    )
  }
}