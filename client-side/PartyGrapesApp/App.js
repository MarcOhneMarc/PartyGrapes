import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
    Alert,
    Modal,
    Pressable
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainscreen, empty, addfriend, createparty } from './components/Mainscreen';
import { settingscreen } from './components/settingscreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




export const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"main"} component={main} options={{headerShown: false}}/>
            <Stack.Screen name={"createparty"} component={createparty}/>
            <Stack.Screen name={"addfriends"} component={addfriend}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
};

const main = (navigation) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
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
              />
            </View>
          )
        }}/>
            <Tab.Screen name="empty" component={empty} options={({navigation}) => ({
            tabBarIcon: ({ focused }) => (

              <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {
                      setModalVisible(!modalVisible);
                  }}>
                      <View style={styles.centeredView}>
                          <View style={styles.modalView}>
                              <View>
                                  <Pressable style={[styles.buttonb, styles.buttonClose]} onPress={() => navigation.navigate('createparty')}>
                                      <Icon name="birthday-cake" size={20} color={'white'}/>
                                  </Pressable>
                                  <Pressable style={[styles.buttonx, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                      <Icon name="times" size={20} color={'white'}/>
                                  </Pressable>
                                  <Pressable style={[styles.buttonf, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                      <Icon name="users" size={20} color={'white'}/>
                                  </Pressable>
                              </View>
                          </View>
                      </View>
                  </Modal>
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
                />
                </View>
              </TouchableOpacity>
            )
          })}/>
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
              />
            </View>
          )
        }}/>
        </Tab.Navigator>

    </>
  );
};
export default App;

const styles = StyleSheet.create({

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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#34324800",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        width: '100%',
        height: '100%',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonb: {
        borderRadius: 30,
        padding: 17,
        top: 620,
        right: 65,
        width: 55,
        height: 55,
        backgroundColor: '#644880',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS == "android" ? 40 : 25
    },
    buttonx: {
        borderRadius: 30,
        padding: 18,
        top: 580,
        width: 55,
        height: 55,
        backgroundColor: '#644880',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS == "android" ? 40 : 25
    },
    buttonf: {
        borderRadius: 30,
        padding: 17,
        top: 460,
        left: 60,
        width: 55,
        height: 55,
        backgroundColor: '#644880',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS == "android" ? 40 : 25
    },
    buttonClose: {
        backgroundColor: "#644880",
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
});


//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
//<View style={styles.cText}><Text style={styles.btext}>Test</Text></View>
