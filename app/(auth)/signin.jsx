import { View, Text, ScrollView ,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import logo from "../../assets/images/tahauru-logo.png";
import word from "../../assets/images/tahauru-key.png";
import SigninForm from '../../components/signinform'


const signin = () => {
  return (
<SafeAreaView>
  <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View className="flex justify-center items-center h-[85vh] ">
      <Image source={logo} className="h-[100px] w-[100px] "></Image>
      <View className="flex flex-row justify-center items-center ">
      <Image resizeMode= {'contain'}  source={word} className="h-[60px] w-[60px]"></Image>
      <Text className="uppercase ml-1 space-x-1 text-slate-500">Wallet</Text>
      </View>
      <View className='w-[90%] mt-10'>
      <SigninForm />
      </View>
    </View>
  </TouchableWithoutFeedback>
</SafeAreaView>
  )
}

export default signin