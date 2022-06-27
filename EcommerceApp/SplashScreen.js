import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function SplashScreen() {
  const Tab = createBottomTabNavigator();
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
      checkNull(name, number,email)
      // setInitializing(false);
      // value previously stored


    } catch (e) {
      // error reading value
    }
  }
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [name, setname] = useState();
  const [number, setnumber] = useState();
  const [email, setemail] = useState();

  var exist = false;
  useEffect(() => {
    
    checkUser()

  }, []);
  function checkNull(name, number,email) {
    console.log('check number called')
    if (number === null && name === null&&email===null) {
      exist = false;
      console.log('exists on phone', exist)
      Call(exist, name, number,email)
    }
    else {
      exist = true;
      console.log('exist on phone: ', exist)
      Call(exist, name, number,email)
    }

  }
  function Call(exist, name, number,email) {
    // if (initializing) return null;

    if (!exist) {
      console.log('login called because exist is: ', exist)
      setInitializing(false)
      props.navigation.navigate("Login")
    }
    if (exist) {
      console.log('Homescreen Called as exist is: ', exist)
      setInitializing(false)
      props.navigation.navigate("Homescreen", { params: { exist: false, Number: number, Name: name,Email:email } })
      console.log('is focused', isFocused)
    }
  }
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Text style={{ color: 'black', fontSize: 50, fontWeight: 'bold' }}>
      Loading
    </Text>
    <ActivityIndicator size={'large'} color={'#125B50'} />

  </View>
  )
}

const styles = StyleSheet.create({})