import { ScrollView } from 'native-base'
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
			profilePic:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			location: 'Bredene',
			description: 'Hallo iedereen. Ik ben Mel. Ik heb een hond. Test123. Ik ben de lijntjes tekst hier aan het testen. En zo te zien werrkt het joepie de poepie.',
			priceWalk: 5,
			priceNight: 10,
			rating: 4,
		},
		{
			id: 2,
			firstName: 'Aram',
			lastName: 'Vanlerberghe',
			profilePic:
				'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
			location: 'Bredene',
			description: 'Hallo iedereen blabla test123... ik hou van konijnen, honden, katten (alle dieren) dus ik wil zkr op ze passen dus el maar of mailtje ofzo...',
			priceWalk: 7,
			priceNight: 12,
			rating: 5,
		},
		{
			id: 3,
			firstName: 'Yannick',
			lastName: 'Schalck',
			profilePic:
				'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			location: 'Bredene',
			description:
				'Hallo iedereen ik wil gerust op u hond leten voor wa moneys $$',
			priceWalk: 12,
			priceNight: 20,
			rating: 4.5,
		},
		{
			id: 4,
			firstName: 'Gordy',
			lastName: 'Van de Velde',
			profilePic:
				'https://images.unsplash.com/photo-1632498301446-5f78baad40d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
			location: 'Bredene',
			description:
				'Woef waf ik ben schattig en ik wil honden vriendjes!!',
			priceWalk: 0,
			priceNight: 0,
			rating: 5,
		},
	]

	const renderUser = ({ item }: { item: User }) => (
		<Card user={item} key={item.id} />
	)

	return (
			<SafeAreaView>
				<FlatList style={styles.list} data={testUsers} renderItem={renderUser} />
			</SafeAreaView>
	)
}
