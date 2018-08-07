import React, {Component} from 'react';
import {
View,
StyleSheet,
Text,
TextInput,
Image, 
Dimensions,
Button,
Animated, Easing
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons';
import App from '../App';
import {Login, Update} from '../reducers/actions';
import {Run} from '../utils';


 class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {pass:'', loadingAnim: new Animated.Value(0)};
    this.parent = props.parent;
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount(){
    this.loadingAnim();
  }

  loadingAnim = () => {
    Animated.timing(this.state.loadingAnim, {
        toValue: 360,
        duration: 500,
    }).start(() => this.loadingAnim());
  } 
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  authorize = async() => {
    await Run(this.props.Update('Loading...'),2000);
    await Run(this.props.Update('Verifying...'),5000);
    await Run(this.props.Update('AUTHORIZED'), 1000);
  }
  
  render(){
    window.onchange = () => {
      alert('working');
    };
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.main}>
        {/* TOP SECTION */}
        <View style={styles.logo}>
        <Animated.Image 
          source={{uri:'http://www.myiconfinder.com/uploads/iconsets/256-256-7a1b32bc6cee8e58f09af677cbfb0255.png'}}
          style={{
            height: 100,
            width:100,
            position: 'absolute',
            zIndex:10,
            transform:[{ rotate: spin}]
          }}
        />
          <Image 
            source={{uri:'https://seeklogo.com/images/H/hand-logo-10C1271C98-seeklogo.com.png'}}
            style={{
              flex: 1,
              aspectRatio: 1.5, 
              resizeMode: 'contain',
            }}
          />
          
        </View>
        {/* BOTTOM SECTION */}
        <View style={styles.inputs}>
          <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder="USERNAME" placeholderTextColor="white" />
          <TextInput secureTextEntry={true} style={styles.input} underlineColorAndroid='transparent'placeholder="PASSWORD" placeholderTextColor="white"/>
          <View style={styles.buttons}>
            <Button title='SUBMIT' onPress={() => this.authorize()} style={styles.button}/>
            <Button title='SIGNUP' onPress={() => alert('SIGNUP')} style={styles.button}/>
            <Text>{this.props.main.authStatus}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps, {Login, Update})(Auth);

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#34495E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  logo:{
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  inputs:{
    height: '50%',
    width: '100%'
  },
  input:{
    backgroundColor: 'grey',
    textAlign: 'center',
    color: 'white',
    margin: 10,

  },
  buttons:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  button:{
    width: '50%'
  }
});