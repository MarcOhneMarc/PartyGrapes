import React from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainscreen, empty } from './components/Mainscreen';
import { settingscreen } from './components/settingscreen';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown:false, tabBarStyle: {backgroundColor: '#4E4B6C', position: 'absolute', bottom: 40, marginHorizontal: 20, height: 60, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.06}, paddingHorizontal: 20,}}>
          <Tab.Screen name="home" component={mainscreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <Icon
                name="home"
                size={20}
                color={focused ? '#c7abff' : '#8562A7'}
              ></Icon>
            </View>
          )
        }}/>

          <Tab.Screen name="empty" component={empty} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: '#644880',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 40 : 25
              }}>
                <Icon
                name="plus"
                size={20}
                color={'white'}
              ></Icon>
              </View>
            </TouchableOpacity>
          )
        }}/>

          <Tab.Screen name="Settings" component={settingscreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <Icon
                name="users"
                size={20}
                color={focused ? '#c7abff' : '#8562A7'}
              ></Icon>
            </View>
          )
        }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;


//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
