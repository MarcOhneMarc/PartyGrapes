import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {returnKeyType} from "react-native/Libraries/DeprecatedPropTypes/DeprecatedTextInputPropTypes";
import axios from 'axios';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator()


// Dummy Data
const partydata = {
    user: "marc",
    partyname: "test Party",
    date: 21022022,
    type: "Public",
    message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    peopleInvited: [
        "Perwak Marc",
        "Hypey Kante",
        "Marvin Süser",
    ],
    peopleAccepted: []
}

// Logig for posting in FaunaDB via Axios HTTP Post
function postParty(){
    let config = {
        header: {
            'Content-Type': 'application/json'
        }
    } 
        axios.post('https://localhost:5000/create',  { partydata }, config)
        .then(res => {
            console.log(res);
            console.log(res.body);
        })
        .catch(error => {
            console.log(error)
        })    
    };

export const mainscreen = (navigation) => {

    return(
        <>
          <SafeAreaView style={styles.main}>
            <View style={styles.cText}>
                <Text style={styles.btext}>Öffentliche{"\n"}Party's</Text>
                <Image style={styles.icons} source={require('../assets/img/Element_8.png')}/>
            </View>
            <View style={styles.cText}>
                <Text style={styles.btext}>Zugesagt</Text>
                <Icon style={styles.icons} name={"check"} size={130} color={"white"}/>
            </View>
            <View style={styles.cText}>
                <Text style={styles.btext}>Einladungen</Text>
                <Image style={styles.ticons} source={require('../assets/img/Element_12.png')}/>

            </View>
          </SafeAreaView>
        </>
    );
};

export const empty = (navigation) => {
  return null;
};

export const createparty = (navigation) => {
    return(
    <View>
        <Button title='TEST' onPress={postParty}> TEST </Button>
    </View>
    );
}

export const addfriend = (navigation) => {
    return(
    <SafeAreaView>
        <Text>add_friernd</Text>
    </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    main:{
      backgroundColor: '#343248',
      width: '100%',
      height: '100%',
    },
    cText: {
      backgroundColor: '#575478',
      justifyContent: 'center',
      alignItems: 'center',
      height: '23%',
      margin: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.06
    },
      btext: {
          color: 'white',
          position: 'absolute',
          left: 15,
          fontSize: 25,
          fontFamily: 'nunito',
          fontWeight: '400',
      },
      icons: {
        position: "absolute",
        right: 15,
          width: 130,
          height: 130,
      },
    ticons: {
        position: "absolute",
        right: 15,
        width: 140,
        height: 100,
    },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,

        },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
  });
