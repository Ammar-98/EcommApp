import { StyleSheet, Text, View, FlatList, TextInput, Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimens } from '../App/Homecontent/Utilities/Dimens'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { useState } from 'react/cjs/react.development'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react/cjs/react.development'


export default function Homescreen(props) {
  const DATA = [
    { id: 0, Name: 'Mobile Phones', logo: 'mobile-alt', library: Fontisto },
    { id: 1, Name: 'Laptops', logo: 'laptop', library: AntDesign },
    { id: 2, Name: 'Cars', logo: 'car', library: AntDesign },
    { id: 3, Name: 'Headphones', logo: 'headset', library: MaterialIcons },
    { id: 4, Name: 'House', logo: 'house', library: MaterialIcons },
    { id: 5, Name: 'Bikes', logo: 'motorcycle', library: MaterialIcons },
    { id: 6, Name: 'Flats / plots', logo: 'building-o', library: FontAwesome },
    { id: 7, Name: 'Watches', logo: 'watch', library: MaterialIcons },
    { id: 8, Name: 'Shirts', logo: 'shirt', library: Ionicons },
    { id: 9, Name: 'Shoes', logo: 'shoe-sneaker', library: MaterialCommunityIcons },
    { id: 10, Name: 'bags', logo: 'shopping-bag', library: FontAwesome },
  ]
  const [showModal, setshowModal] = useState(true);
  const [Search, setSearch] = useState('')
  const Name = props.route.params.params.Name;//will be the first time passsed data
  const Number = props.route.params.params.Number;
  const Email = props.route.params.params.Email;
  useEffect(() => {
    console.log(props.route.params.params.exist)
    setshowModal(props.route.params.params.exist)
    console.log('set show Modal var *exists*', props.route.params.params.exist)
  }, []);

  async function storeDatastr(number, name,email) {
    try {
      console.log('storing strbased', number)
      await AsyncStorage.setItem('number', number)
      await AsyncStorage.setItem('name', name)
      await AsyncStorage.setItem('name', email)

    } catch (e) {
      // saving error
    }
  }
  return (
    <View style={{ height: Dimens.WindowH, backgroundColor: '#125B50' }}>
      <View style={{ height: Dimens.WindowH * 0.045, justifyContent: 'center' }}>
        <Text style={{
          color: 'white', fontSize: 43, fontWeight: 'bold', marginLeft: 20,
          textShadowOffset: { width: 1, height: 1 },
          textShadowColor: 'black', textShadowRadius: 10, marginTop: 5
        }}>ECOM</Text>
      </View>
      <View style={{ flexDirection: 'row', height: Dimens.WindowH * 0.075, justifyContent: 'center', alignItems: 'center', backgroundColor: '#125B50' }}>


        <TextInput

          placeholderTextColor={'grey'}
          multiline
          placeholder={' Search the item you wish to buy'}
          style={styles.input}
          onChangeText={setSearch}
          value={Search}
        />
        <TouchableOpacity
        // onPress={()=>props.navigation.navigate('')}
        >
          <Text style={{ height: Dimens.WindowH * 0.05, width: Dimens.WindowH * 0.07, textAlign: 'center', textAlignVertical: 'center', color: 'white', backgroundColor: '#243D25', borderRadius: 5, fontSize: 20 }}>
            Search
          </Text>
        </TouchableOpacity>

      </View >

      <View style={{ borderRadius: 10, height: Dimens.WindowH * 0.79, backgroundColor:'#D0C9C0'  , alignItems: 'center', justifyContent: 'center' }}>


        <FlatList
          data={DATA}
          keyExtractor={({ item }) => DATA.id}
          numColumns={2}
          // columnWrapperStyle={{ }}
          renderItem={({ item }) => {
            console.log('item: ', item)
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: Dimens.WindowW * 0.32, width: Dimens.WindowW * 0.485 }}>
                <View style={{
                  flexDirection: 'row', backgroundColor: '#446A46', width: Dimens.WindowW * 0.47,
                  height: Dimens.WindowW * 0.3, borderRadius: 6, alignItems: 'center'
                }}>
                  <View style={{ marginLeft: 15 }}>
                    <item.library
                      name={item.logo}
                      size={60}
                      color={'white' }
                    />
                  </View>
                  <Text style={{
                    fontSize: 25, fontWeight: 'bold', color: 'white' , textShadowOffset: { width: 1, height: 1 },
                    textShadowColor: 'black', textShadowRadius: 5,
                    marginLeft: Dimens.WindowW * 0.019, textAlign: 'center', textAlignVertical: 'center'
                  }}>{item.Name}</Text>
                </View>

              </View>
            )
          }}
        />

      </View>
      < Modal

        animationType="slide"
        transparent={true}
        visible={showModal} >

        <View opacity={0.9} style={{ marginTop: Dimens.WindowH * 0.3, justifyContent: 'center', alignItems: 'center' }} >
          <View style={{
            borderRadius: 40, alignItems: 'center', justifyContent: 'center', width: Dimens.WindowW * 0.5,
            height: Dimens.WindowW * 0.5, backgroundColor: '#5F7161'
          }}>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 30 }}>
              Save login info?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => { { storeDatastr(Number, Name, Email) }; { setshowModal(false) } }}>
                <Text style={{ color: 'white', fontSize: 25, marginHorizontal: 10, backgroundColor: 'black', borderRadius: 10, paddingHorizontal: Dimens.WindowW * 0.04, paddingVertical: 10, marginVertical: 15 }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setshowModal(false)}>
                <Text style={{ color: 'white', fontSize: 25, marginHorizontal: 10, backgroundColor: 'black', borderRadius: 10, paddingHorizontal: Dimens.WindowW * 0.04, paddingVertical: 10, marginVertical: 15 }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal >
    </View>
  )
}

const styles = StyleSheet.create({


  input:
  {
    height: Dimens.WindowH * 0.05,
    width: Dimens.WindowW * 0.83,
    color: 'black',
    backgroundColor: '#EFEAD8',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 10

  },
})

