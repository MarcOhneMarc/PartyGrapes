import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, Image, View, Button } from 'react-native';


export const mainscreen = () => {

    return(
        <>
          <View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
          <View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
          <View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
        </>
    );
};

const styles = StyleSheet.create({
    cText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
      btext: {
        color: 'black',
      }
  
  });