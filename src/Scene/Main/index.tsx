import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Header from './../../Components/Header';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Main extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
              <Header></Header>
              <Text>Next</Text>
              <Button title="Back" onPress={this._back} />
          </View>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
