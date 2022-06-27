import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native'
import React from 'react'
import { Dimens } from '../App/Homecontent/Utilities/Dimens'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react/cjs/react.development'
import Signup from './Signup'
export default function Login(props) {
  const [initializing, setinitializing] = useState(false)
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [Number, setNumber] = useState('')
  const [Email1, setEmail1] = useState('')
  const [Email2, setEmail2] = useState('')
  const [Address, setAddress] = useState('')
  var numbexist = false
  var Mexists = false

  var num = 0
  var Email = ''
  var contacts = [];
  const At = '@'


  // const testApi = () => {

  //   setinitializing(true)
  //   fetch('http://192.168.18.118:3000/getUsers', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //   }).then(res => res.json())
  //     .then(response => {
  //       contacts = response.data
  //       while (num !== response.data.length) {
  //         console.log('response Data', response.data[num].Number)
  //         if (Number !== response.data[num].Number) {
  //           Pushtodb()
  //         }

  //         num = num + 1
  //       }
  //       console.log('contacts', contacts)
  //       console.log('Length: ', '*', contacts.length, '*')
  //     })
  //     // .then(console.log('contacts', contacts))
  //     .then(setinitializing(false))

  // }

  function combine() {
    setinitializing('true')
    Email = Email1 + At + Email2

    testData()
  }

  function testData() {

    fetch('http://192.168.18.118:3000/getUsers', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(response => {


        contacts = response.data
        while (num !== response.data.length) {

          if (Number === response.data[num].Number) {
            numbexist = true
            console.log('response Data Number: ', ' ', response.data[num].Number, " Passed Number: ", Number)

          }

          if (Email === response.data[num].Email) {
            Mexists = true
            console.log('response Data Email: ', ' ', response.data[num].Email, ' Passed Email: ', Email)
          }

          num = num + 1
        }
        Nav()
      })

  }


  function Nav() {
    console.log('number exists', numbexist)
    console.log('email exists', Mexists)
    console.log('Email passed in Push to DB: ***', Email)

    if (numbexist === true) {
      if (Mexists === true) {
        if (Name !== '') {
          if (Password !== '') {
            if (Number !== '') {
              if (Email1 !== '') {
                if (Email2 !== '') {
                  if (Address !== '') {
                    console.log('All good')


                    // fetch('http://192.168.18.118:3000/registration', {
                    //   method: 'POST',
                    //   headers: {
                    //     Accept: 'application/json',
                    //     'Content-Type': 'application/json'
                    //   },
                    //   body: JSON.stringify({
                    //     id: '',
                    //     name: Name,
                    //     password: Password,
                    //     number: Number,
                    //     email: Email,
                    //     address: Address,
                    //   })
                    // })
                    // .then(res => {
                    //   // console.log('this is res', res)
                    // })
                    // .then()
                    setinitializing(false)
                    props.navigation.navigate('TabStack', { params: { exist: true, Number: Number, Name: Name,Email:Email } })
                    // .catch(eror => {
                    //   console.log('in catch eror', eror)
                    // })

                  }
                  else {
                    alert('Enter your address')
                    setinitializing(false)
                  }
                }
                else {
                  alert('Enter a valid email address')
                  setinitializing(false)
                }
              }
              else {
                alert('Enter a valid email address')
                setinitializing(false)
              }
            }
            else {
              alert('Enter your phone number')
              setinitializing(false)
            }
          }
          else {
            alert('Enter a password')
            setinitializing(false)
          }
        }
        else {
          alert('Name field is empty')
          setinitializing(false)
        }
      }
      if (Mexists === false) {
        alert('wrong Email')
        setinitializing(false)

      }
    }
    if (numbexist === false) {
      alert('Wrong Number')
      setinitializing(false)

    }
  }





  if (initializing) {
    return (
      <View style={{ height: Dimens.WindowH, backgroundColor: '#D0C9C0', alignContent: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={300} color={'#5F7161'} />
      </View>
    )
  }
  if (!initializing)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#125B50'} barStyle={'light-content'} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0C9C0' }}>
          <TextInput
            placeholderTextColor={'grey'}
            multiline
            placeholder={'Enter your Name'}
            style={styles.input}
            onChangeText={setName}
            value={Name}
          />
          <TextInput

            placeholderTextColor={'grey'}
            multiline
            placeholder={'Enter Password'}
            style={styles.input}
            onChangeText={setPassword}
            value={Password}
          />
          <TextInput
            keyboardType='phone-pad'
            placeholderTextColor={'grey'}
            multiline
            placeholder={'Enter phone Number'}
            style={styles.input}
            onChangeText={setNumber}
            value={Number}
          />
          <View style={{ flexDirection: 'row' }}>
            <TextInput

              placeholderTextColor={'grey'}
              multiline
              placeholder={'Enter Email'}
              style={styles.input1}
              onChangeText={setEmail1}
              value={Email1}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 2 }}>
              <Text style={{
                fontSize: 30, fontWeight: 'bold', color: '#446A46',
                textShadowOffset: { width: 0, height: 0 },
                textShadowColor: 'white',
                textShadowRadius: 5,
              }}>
                @
              </Text></View>
            <TextInput

              placeholderTextColor={'grey'}
              multiline
              placeholder={'XYZ.com'}
              style={styles.input2}
              onChangeText={setEmail2}
              value={Email2}
            />
          </View>
          <TextInput

            placeholderTextColor={'grey'}
            multiline
            placeholder={'Enter Address'}
            style={styles.input}
            onChangeText={setAddress}
            value={Address}
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => combine()}>
              {/* onPress={() => testApi()}> */}
              <Text style={{
                backgroundColor: '#446A46', color: 'white', paddingHorizontal: 20,
                paddingVertical: 10, borderRadius: 17, fontSize: 50
              }}> Login</Text>

            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => props.navigation.navigate('Signup')}
            >
              <Text style={{
                backgroundColor: '#125B50', color: 'white', paddingHorizontal: 20,
                paddingVertical: 10, borderRadius: 17, fontSize: 50, marginHorizontal: 20
              }}> Sign-up</Text>

            </TouchableOpacity>

          </View>

        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({

  input:
  {
    height: 50,
    width: Dimens.WindowW * 0.93,
    color: 'black',
    backgroundColor: '#EFEAD8',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 13

  },
  input1:
  {
    height: 50,
    width: Dimens.WindowW * 0.57,
    color: 'black',
    backgroundColor: '#EFEAD8',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 13

  }
  ,
  input2:
  {
    height: 50,
    width: Dimens.WindowW * 0.30,
    color: 'black',
    backgroundColor: '#EFEAD8',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 13

  }
})