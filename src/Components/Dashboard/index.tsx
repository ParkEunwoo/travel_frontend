import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
class Dashboard extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.wrapper}>
                <Text style={styles.number}>32</Text>
                <Text style={styles.text}>LOGS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapper} onPress={()=>this.props.navigation.navigate('FollowList')} >
                <View style={styles.divide} />
                <Text style={styles.number}>128</Text>
                <Text style={styles.text}>FOLLOWERS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapper}>
                <Text style={styles.number}>83</Text>
                <Text style={styles.text}>FOLLOWING</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    wrapper: {
        flex: 1,
        alignItems: 'center'
    },
    number: {
        color: '#5966FF',
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        color: '#ABB2FF',
        fontSize: 10,
        marginVertical: 8
    },
    divide: {
        position: 'absolute',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#5966FF',
        width: '100%',
        height: '50%',
        top: '25%',
    }
});

export default withNavigation(Dashboard);