import { View, Text,Image } from 'react-native'
import React from 'react'
import Card from './UI/customCard'
import userphoto from '../assets/images/userphoto.jpg'
import { Link } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { useTranslation } from "react-i18next"
import {useAuthContext} from "@/hooks/useAuthContext"

const profileCard = () => {
  const {user} =useAuthContext();
  const {t} =useTranslation();
  return (
    <Card color="#003566">
    <View className='flex  flex-row justify-between items-center'>
      <View>
        <Text className="text-slate-100 capitalize text-sm">{t("welcome")}</Text>
        <Text className="text-slate-100 capitalize text-lg font-semibold ">{user?.email.split("@")[0]} </Text>
        <Link className='text-green-200 mt-3 flex justify-center items-center' href='/profile'>{t("View Wallet")}
        <MaterialIcons name="keyboard-arrow-right" size={12} color="rgb(187 247 208)" className='ml-2'/>
        </Link>
      </View>
      <Image source={userphoto} resizeMode="content" className='h-12 w-12 rounded-full'>
      </Image>
    </View>
  </Card>
  )
}

export default profileCard