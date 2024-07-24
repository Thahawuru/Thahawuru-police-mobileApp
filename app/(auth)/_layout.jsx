import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
<>
    <Stack options={{headerShown:false}}>
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='signin' options={{headerShown:false}} />
      <Stack.Screen name='signup' options={{headerShown:false}} />
    </Stack>

    {/* <StatusBar style='light' backgroundColor="#161154" /> */}
</>
  )
}
export default AuthLayout