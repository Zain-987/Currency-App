import { Alert, Button, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {currencyByRupee} from '../assets/Constants'
const Main = () => {

    const [conversion , setConversion] = useState(0)
    const [input , setInput] = useState("")
    const ShowCurrency = (item : any) => {
        let result = Number(Number(item.value) * Number(input))
        result = result.toFixed(4)
        setConversion(result)
    }
  return (
    <View style={styles.container}>

        {
            conversion > 0 && <View style={{marginBottom : 20}}>
            <Text style={{fontSize : 28 , fontWeight : '600'}}>😜{ conversion}</Text>
        </View>
        }
        
      <View style={styles.textInputcontainer}>
        <TextInput multiline style={styles.textInputStyle}
        keyboardType='numeric'
        value={input}
        onChangeText={(text) => setInput(text)}
        />
       
        
      </View>


      <FlatList numColumns={3} contentContainerStyle={{padding : 10 , alignSelf : 'center'}} data={currencyByRupee} renderItem={({item} : any) => {
        return <Pressable style={{alignItems : 'center' , width : Dimensions.get("screen").width * 1/ 3.2}}
        onPress={() => ShowCurrency(item)}
        >
            <Text style={{fontSize : 60}}>{item?.flag}</Text>
            <Text style={{fontSize : 18 , fontWeight : '500'}} >{item?.name}</Text>
        </Pressable>
      }} keyExtractor={item => item.symbol}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
    ,
    textInputcontainer : {width : '70%' , flexDirection : 'row'},
    textInputStyle : {flex : 1 , backgroundColor : 'white' , borderRadius : 6 , padding : 10 , fontSize : 18 , color : 'gray'},
})