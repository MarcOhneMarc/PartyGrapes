import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, Image, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const settingscreen = () => {

    return(
        <>
            <SafeAreaView style={styles.safe}>
                <ScrollView style={styles.sview}>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Marc Perwak</Text>
                        <Text style={styles.idtext}>ID:935725</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Svante Ecke</Text>
                        <Text style={styles.idtext}>ID:892571</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Marvin Süßer</Text>
                        <Text style={styles.idtext}>ID:448459</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Julian Schwan</Text>
                        <Text style={styles.idtext}>ID:875791</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Ben Ten</Text>
                        <Text style={styles.idtext}>ID:767688</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Leon Kelocks</Text>
                        <Text style={styles.idtext}>ID:361096</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Barock löaklk</Text>
                        <Text style={styles.idtext}>ID:571429</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Raubender Reuber</Text>
                        <Text style={styles.idtext}>ID:448459</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Marvin Süßer</Text>
                        <Text style={styles.idtext}>ID:448459</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Marvin Süßer</Text>
                        <Text style={styles.idtext}>ID:448459</Text>
                    </View>
                    <View style={styles.friendbox}>
                        <Icon style={styles.usercircle} name={'user-circle'} size={35} color={'white'}></Icon>
                        <Text style={styles.ntext}>Marvin Süßer</Text>
                        <Text style={styles.idtext}>ID:448459</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    safe:{
        backgroundColor: '#343248',
        width: '100%',
        height: '100%',

    },
    sview: {
        width: '100%',
        height: '100%',
    },
    friendbox: {
        backgroundColor: '#575478',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.06
    },
    ntext: {
        color: 'white',
        position: "absolute",
        left: 65,
        fontFamily: 'nunito',
        fontSize: 18,
    },
    idtext: {
        color: '#d3d3d3',
        position: 'absolute',
        right: 20,
    },
    usercircle: {
        position: 'absolute',
        left: 15,
    }
//    vview:{
  //      position: 'absolute',
  //      backgroundColor: '#79ff79',
  //      width: 40,
  //      height: '100%',
  //      right: 0,
  //      borderTopRightRadius: 10,
  //      borderBottomRightRadius: 10,
  //  }
});
