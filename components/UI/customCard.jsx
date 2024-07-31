import { View,StyleSheet } from 'react-native'
import React from 'react'

const customCard = ({children,color}) => {

  console.log(color)
  return (
    <View className={`p-5 w-full rounded-2xl`} style={[styles.card,{backgroundColor:color}]} >
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    padding: 20,
    width: '100%',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default customCard