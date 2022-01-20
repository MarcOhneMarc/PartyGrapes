import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, Image, View, Button } from 'react-native';


export const settingscreen = () => {

    return(
        <>
            <View style={styles.cText}><Text style={styles.btext}>btext</Text></View>
            <View style={styles.cText}><Text style={styles.btext}>tbtext</Text></View>
            <View style={styles.cText}><Text style={styles.btext}>Tfsvgfdgst</Text></View>
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
