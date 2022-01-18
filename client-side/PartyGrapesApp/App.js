import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {

  return (
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
      color: 'white',
    }

});

export default App;
