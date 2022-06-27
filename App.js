import { StyleSheet, Text, View, TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { LogBox } from 'react-native';
import Login from './EcommerceApp/Login'
import Rootstack from './EcommerceApp/Rootstack';
import { Dimens } from './App/Homecontent/Utilities/Dimens';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function App() {
  return (
    
    
      < Rootstack/>
   
  )
}

const styles = StyleSheet.create({})