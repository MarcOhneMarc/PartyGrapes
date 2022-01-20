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
import { mainscreen } from './components/Mainscreen';
import { settingscreen } from './components/settingscreen';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle: {backgroundColor: 'white', position: 'absolute', bottom: 40, marginHorizontal: 20, height: 60, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.06},}}>
          <Tab.Screen name="home" component={mainscreen}/>
          <Tab.Screen name="Settings" component={settingscreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    padding: 30,
    color: 'white',
  }
});

export default App;


//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
