import React, {useState, Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image, Button, TextInput, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { postParty } from '../logic/posting';
import DatePicker from 'react-native-date-picker'
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator()

export class mainscreen extends Component {
    render(){
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
    }
}

export const empty = () => {
  return null;
};

export let partydata = {}

export const createparty = ({navigation: { goBack }}) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState();

    const [Partyname, setPartyname] = useState('');
    const [Partymessage, setPartymessage] = useState('');

    partydata = {
        user: "Marc",
        partyname: Partyname,
        date: date,
        type: selectedLanguage,
        message: Partymessage,
        peopleInvited: [
            "Perwak Marc",
            "Hypey Kante",
            "Marvin Süser",
        ],
        peopleAccepted: []
    }

    return(
        <SafeAreaView style={styles.createp}>
            <View>
                <Text style={styles.cpt}>Party Erstellen</Text>
                <TextInput style={styles.textinp} placeholderTextColor="grey" name="partyname" placeholder="Party Name" onChangeText={newText => setPartyname(newText)}/>
                <TextInput multiline numberOfLines={4} placeholderTextColor="grey" style={styles.textinpmessage} name="partymessage" placeholder="Infos" onChangeText={newText => setPartymessage(newText)}/>
                <View style={styles.dateview}>
                    <Text style={styles.datetext}>Lege ein Datum Fest</Text>
                    <Button style={styles.datebutton} title="" onPress={() => setOpen(true)} />
                        <DatePicker modal open={open} date={date} onConfirm={
                            (date) => { setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                </View>
                <Picker style={styles.typepickcont} itemStyle={styles.typepick} selectedValue={selectedLanguage} onValueChange={
                    (itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Privat" value="privat" />
                    <Picker.Item label="Public" value="public" />
                </Picker>
                <View style={styles.backsend}>
                    <Button title='Send' style={styles.endbuttons} onPress={postParty}/>
                    <Button title='Zurück' style={styles.endbuttons} onPress={() => goBack()}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export const addfriend = () => {
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
        },
    textinp:{
        height: 50,
        borderRadius: 30,
        fontSize: 20,
        fontFamily: 'nunito',
        fontWeight: '400',
        paddingLeft: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        color: "white",
        backgroundColor: "#575478",
    },
    createp:{
      backgroundColor: "#343248",
        width: "100%",
        height: "100%",
    },
    cpt:{
        color: 'white',
        fontSize: 25,
        fontFamily: 'nunito',
        fontWeight: '400',
        paddingLeft: 20,
        paddingTop: 20,
    },
    textinpmessage:{
        height: 200,
        borderRadius: 30,
        fontSize: 20,
        fontFamily: 'nunito',
        fontWeight: '400',
        paddingLeft: 20,
        paddingTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        backgroundColor: "#575478",
    },
    dateview:{
        backgroundColor: '#575478',
        fontSize: 30,
        fontFamily: 'nunito',
        color: 'white',
        borderRadius: 30,
        paddingLeft: 20,
        marginRight: 10,
        marginTop: 20,
        marginLeft: 10,
    },
    datetext:{
        display: "flex",
        paddingLeft: 75,
        paddingRight: 75,
        top: "25%",
        fontSize: 20,
        fontFamily: 'nunito',
        color: "#d8dce4",
    },
    typepickcont:{
        fontFamily: 'nunito',
        marginBottom: 50,
        height:100,
    },
    typepick:{
        fontFamily: 'nunito',
        color: "#d8dce4",
        height:130,
        marginTop: -10,
    },
    backsend:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        position: "absolute",
        bottom: -200,
        height: 70,
    },
    endbuttons:{
        backgroundColor: '#575478',
        width: "50%",
        height: 70,
    }
  });
