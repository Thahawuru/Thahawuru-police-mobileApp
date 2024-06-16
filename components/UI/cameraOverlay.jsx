import { View, Text } from 'react-native'
import React from 'react'

const  Overlay = ({title}) => {
  return (
    <View className="w-full h-full">
    <View
      className="h-[25%] flex justify-end items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <Text className="text-center text-xl my-6 text-sky-100">
        {title}
      </Text>
    </View>
    <View className="h-[50%]  flex flex-row justify-between items-center">
      <View
        className="w-10 h-full"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      ></View>
      <View
        className="w-10 h-full"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      ></View>
    </View>
    <View
      className="h-[25%] flex justify-end items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
    </View>
  </View>
  )
}

export default Overlay;