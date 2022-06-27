import { StyleSheet, Text, View, Image } from 'react-native'
import { Dimens } from '../App/Homecontent/Utilities/Dimens'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Homescreen from './Homescreen';
import SettingsScreen from './SettingsScreen';
import Notification from './Notification'
import Postad from './Postad'
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function TabStack(props) {
    const Tab = createBottomTabNavigator();
    const number=props.route.params.params.Number;
    const name=props.route.params.params.Name;
    const email=props.route.params.params.Email;
    const exist = props.route.params.params.exist;
const focuscolor='#FFE300'
    return (

        <Tab.Navigator initialRouteName={Homescreen}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Homescreen') {
                        return (
                            <MaterialIcons
                                name={

                                    'home'
                                }
                                size={focused ? 35 : 23}
                                color={focused ? focuscolor : 'white'}
                            />
                        );
                    }
                    else if (route.name === 'SettingsScreen') {
                        return (
                            <AntDesign
                                name={'setting'}
                                size={focused ? 35 : 20}
                                color={focused ? focuscolor : 'white'}
                            />
                        );
                    }
                    else if (route.name === 'Postad') {
                        return (
                            <Ionicons
                                name={'add-circle-outline'}
                                size={focused ? 39 : 25}
                                color={focused ? focuscolor : 'white'}
                            />
                        );
                    }
                    else if (route.name === 'Notification') {
                        return (
                            <FontAwesome
                                name={
                                    'bell'}
                                size={focused ? 27 : 18}
                                // size={{height:10,width:10}}
                                color={focused ? focuscolor : 'white'}
                            />
                        );
                    }
                    else if (route.name === 'Profile') {
                        return (
                            // <Image style={{ width: Dimens.WindowW * 0.06, height: Dimens.WindowW * 0.06, borderRadius: Dimens.WindowW * 0.06 / 2 }}
                            //     source={{ uri: 'https://i.ytimg.com/vi/esJOOQG42r0/maxresdefault.jpg' }}
                            // />
                            <Ionicons
                                name={
                                    'person'
                                }
                                size={focused ? 35 : 20}
                                color={focused ? focuscolor : 'white'}
                            />
                        );
                    }


                },
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: '#FFB72B',
                tabBarStyle: { backgroundColor: '#125B50',height:Dimens.WindowH*0.059,marginBottom:0.5 },
                // tabBarLabelStyle:{fontSize:15},
                
                tabBarShowLabel: false,
                tabBarHideOnKeyboard:true



            })}

        >
            <Tab.Screen name="Homescreen" component={Homescreen} initialParams={{ params:{exist: exist, Number: number, Name: name,Email:email} }} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Postad" component={Postad} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
            
            
            
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({})