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


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="home" component={mainscreen}/>
        </Tab.Navigator>
      </NavigationContainer>
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

export default App;


//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>