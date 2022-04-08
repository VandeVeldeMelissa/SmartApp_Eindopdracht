import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import Card from '../../components/Card'
import User from '../../interfaces/User'
import styles from '../../styles/index'

export default () => {
  const testUsers: User[] = [
    {
      id: 1,
      firstName: 'Melissa',
      lastName: 'Van de Velde',
      profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      location: '800m - Bredene',
      description: 'Hallo iedereen jaja...',
      priceWalk: 5,
      priceNight: 10,
      rating: 4.5,
    },
    {
      id: 2,
      firstName: 'Aram',
      lastName: 'Vanlerberghe',
      profilePic: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      location: '810m - Bredene',
      description: 'Hallo iedereen blabla test123...',
      priceWalk: 7,
      priceNight: 12,
      rating: 5,
    },
  ]

  const renderUser = ({ item }: { item: User }) => (
    <Card user={item} key={item.id} />
  )

  return <SafeAreaView>
  {/* <Filter /> */}

  <>
    <FlatList
      data={testUsers}
      renderItem={renderUser}
    />
  </>
</SafeAreaView>
}