import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimens } from '../App/Homecontent/Utilities/Dimens';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
export default function Profile(props) {
  async function Signout(props) {
    try {

      await AsyncStorage.setItem('number', '')
      await AsyncStorage.setItem('name', '')
      await AsyncStorage.setItem('name', '')
      console.log('Signed Out')
      .then(
      ()=>props.navigation.navigate('Rootstack')
      )
    } catch (e) {
      // saving error
    }
  }
  return (
    <View style={styles.container1}>
      <FontAwesome
        name={
          'bell'}
        // size={27}
        style={{ fontSize: 40 }}
        // size={{height:10,width:10}}
        color={'black'}
      />
      <MaterialIcons
        name={

          'home'
        }
        style={{ fontSize: 55 }}
        // size={focused ? 35 : 23}
        // color={focused ? focuscolor : 'white'}
        color={'black'}
      />
      <TouchableOpacity
        onPress={() => Signout()}>
        <Text style={styles.signout}>Sign-Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container1:
  {
    height: Dimens.WindowH,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  signout: {
    color: 'white',
    fontSize: 45,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'green',
    borderRadius: 10,

  }
})