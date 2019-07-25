import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Travel extends React.Component<Props, State>{
    state = {
        name: '',
        time: '',
        title: '',
        category: '',
        like: 0,
        image: null
    }
    
    static getDerivedStateFromProps(nextProps, preState){
        const {name, time, title, category, like, image} = nextProps;
        if(preState.name !== name || preState.time !== time || preState.title !== title || preState.category !== category || preState.like !== like || preState.image !== image){
            return {
              name,
              time,
              title,
              category,
              like,
              image
            };
        }
        return null;
    }
    render(){
        const {name, time, title, category, like, image} = this.state;
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <View style={styles.travel}>
                    <Image source={{uri:image}} style={styles.image} />
                    <LinearGradient colors={['#00000099',  '#00000000']} style={styles.gradient}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.like}><Image source={require('./../../../assets/icons/like.png')} style={{width:15,height:15}}/> {like}</Text>
                        </View>
                        <Text style={styles.category}>{category}</Text>
                    </LinearGradient>

                </View>
            </TouchableOpacity>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    userInfo: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10

    },
    name: {
        fontSize: 14,
        color: '#2c327e'
    },
    time: {
        marginLeft: 'auto',
        fontSize: 14,
        color: "#8e8e8e"
    },
    travel: {
        alignSelf: 'stretch',
        padding: 10
    },
    image: {
        width: '100%'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 12,
        alignItems: 'center'
    },
    title: {
        fontSize: 19,
        color: "white"
    },
    like: {
        color: 'white'
    },
    category: {
        color: 'white'
    },
    gradient: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 10,
        left: 10,
        paddingBottom: 50
    }
});
