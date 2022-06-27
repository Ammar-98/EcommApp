import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Test(props) {
   function tester()
    {
        console.log('Tester')
        props.navigation.navigate('Login')
    }
  return (
   
    <View>
      <Text>Test</Text>
    
    <TouchableOpacity
    onPress={()=>tester()}>
    <Text style={{color:'black',fontSize:40,padding:20, backgroundColor:'orange'}}>Button </Text>
    
    </TouchableOpacity>
    </View>
  )
}