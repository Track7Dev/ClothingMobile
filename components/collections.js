import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet

} from 'react-native';

export default class Collections extends Component { 
  constructor(){
    super();
    this.state = {collections: []}
  }
  componentWillMount(){
    this.init();
  }
  init = () => {
    //clear collections
    this.setState({collections: []});
    for (let i = 0; i < 8; i++) {
      const newCollection = this.state.collections;
      newCollection.push(`Col${i+1}`);
      this.setState({collections: newCollection});
    }
  }
  render(){
    return (
      <ScrollView style={{flex: 1, display: 'flex', flexDirection: 'column', width: '100%'}}>
        <View style={styles.container}>
          {
            this.state.collections.map((name, i) => 
              <View key={i} style={styles.tile}>
                <Text style={{color: 'white', fontSize: 20}}>{name}</Text>
              </View>
            )
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    display: 'flex',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingBottom: 20
  },
  tile: {
    backgroundColor: 'rgb(100,100,100)',
    height: 150,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: 'gold',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    
  }
});
