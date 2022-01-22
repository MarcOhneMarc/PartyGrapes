import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, Image, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const mainscreen = () => {

    return(
        <>
          <View style={styles.main}>
            <View style={styles.cText}><Text style={styles.btext}>Öffentliche{"\n"}Party's</Text></View>
            <View style={styles.cText}><Text style={styles.btext}>Zugesagt</Text></View>
            <View style={styles.cText}><Text style={styles.btext}>Einladungen</Text></View>
          </View>
        </>
    );
};

export const empty = () => {

  return(
      <>
          <View style={styles.cText}><Text style={styles.btext}></Text></View>
      </>
  );
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
        color: '#C7ABFF',
        position: 'absolute',
        left: 10,
        fontSize: 25,
        fontFamily: 'nunito',
      }
    
  });
