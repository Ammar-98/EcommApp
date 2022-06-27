import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react/cjs/react.development';
import Login from './Login'
import SplashScreen from './SplashScreen';
import Test from './Test';
import Signup from './Signup';
import Homescreen from './Homescreen';
import TabStack from './TabStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Rootstack() {
  const [name, setname] = useState();
  const [number, setnumber] = useState();
  const [email, setemail] = useState();
  const Stack = createStackNavigator();
  async function checkUser() {
    try {
      const name = await AsyncStorage.getItem('name')
      const number = await AsyncStorage.getItem('number')
      const email = await AsyncStorage.getItem('email')


      console.log('got name from phone async: ', name)
      console.log('got number from phone async: ', number)
      setname(name)
      setnumber(number)
      setemail(email)
      checkNull(name, number, email)
      // setInitializing(false);
      // value previously stored


    } catch (e) {

    }
  }
  function checkNull(name, number, email) {
    console.log('check number called')
    if (number === null && name === null && email === null && email === null) {
      exist = false;
      console.log('exists on phone', exist)
      Call(exist, name, number, email)
    }
    else {
      exist = true;
      console.log('exist on phone: ', exist)
      Call(exist, name, number, email)
    }

  }
  function Call(exist, name, number, email) {
    // if (initializing) return null;

    if (!exist) {
      console.log('login called because exist is: ', exist)
      //   props.navigation.navigate("Login")
      setinitialRouteName('Login')
    }
    if (exist) {
      console.log('TabStack Called as exist is: ', exist)
      setinitialRouteName('TabStack')
      // props.navigation.navigate("Contactlist", { params: { exist: false, Number: number, Name: name } })
      console.log('is focused', isFocused)
    }
  }
  useEffect(() => {
    checkUser()

  }, []);
  const [initialRouteName, setinitialRouteName] = useState('');
  var exist = false;
  if (initialRouteName === '') {
    return (

      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#D0C9C0' }}>
        <Text style={{ color: 'black', fontSize: 50, fontWeight: 'bold' }}>
          Loading
        </Text>
        <ActivityIndicator size={300} color={'green'} />


      </View>
    )


  }
  if (initialRouteName !== '') {
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}


        >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="TabStack" component={TabStack} initialParams={{ params:{exist: false, Number: number, Name: name,Email:email} }} options={{ headerShown: false }} />
          <Stack.Screen name="Homescreen" component={Homescreen}  options={{ headerShown: false }} />
          <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})

{/* <NavigationContainer>
<stack.Navigator initialRouteName={initialRouteName}>
    <stack.Screen name="Homescreen" component={Homescreen} options={{ headerStyle: { backgroundColor: '#827397' }, headerTintColor: 'white', headerTitleStyle: { fontSize: 30, fontWeight: '900' } }} />
    <stack.Screen name='Signupscreen' component={Signupscreen} options={{ headerShown: false }} />
    <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    <stack.Screen name='Contactlist' initialParams={{ params:{exist: false, Number: number, Name: name} }} component={Contactlist} options={{ headerShown: false }} />
    <stack.Screen name='Mycontacts' component={Mycontacts} options={{ headerStyle: { backgroundColor: '#D0C9C0' }, headerTitle: 'Import phone contacts', headerTitleStyle: { fontSize: 30, fontWeight: '900' } }} />
    <stack.Screen name='MessageScreen' component={MessageScreen} options={{ headerShown: false }} />
    <stack.Screen name='Splashscreen' component={Splashscreen} options={{ headerShown: false }} ></stack.Screen>
    <stack.Screen name='Ddw' component={Ddw} options={{ headerShown: false }} ></stack.Screen>
    <stack.Screen name='Listener' initialParams={{ params:{exist: false, Number: number, Name: name} }} component={Listener}  options={{ headerShown: false }} ></stack.Screen>
</stack.Navigator> */}