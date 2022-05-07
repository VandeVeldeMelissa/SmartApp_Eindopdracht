import { useIsFocused, useNavigation } from '@react-navigation/native'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import { FlatList, ImageEditor, SafeAreaView } from 'react-native'
import Card from '../../components/Card'
import PetSitter from '../../interfaces/PetSitter'
import styles from '../../styles/index'
import { statement, transaction } from '../../utils/db'

export default ({ navigation }: { navigation: any }) => {
	const nav = useNavigation()
	const isFocused = useIsFocused()

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Sitters & Walkers' })
	}, [isFocused])

	const testPetSitters: PetSitter[] = [
		{
			id: '1',
			firstName: 'Melissa',
			lastName: 'Van de Velde',
			profilePic:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			location: 'Temse',
			description:
				'Hallo iedereen. Ik ben Mel. Ik heb een hond. Test123. Ik ben de lijntjes tekst hier aan het testen. En zo te zien werrkt het joepie de poepie.',
			rating: 4,
			priceStay: 19,
			priceDayCare: 15,
			priceHomeVisits: 8,
			priceDogWalking: 7,
			priceHouseSitter: 22,
			allowSmallDog: true,
			allowMediumDog: true,
			allowLargeDog: true,
			allowCats: false,
			allowSmallAnimal: true,
			hasChildren: false,
			hasPets: true,
			hasGarden: false,
		},
		{
			id: '2',
			firstName: 'Aram',
			lastName: 'Vanlerberghe',
			profilePic:
				'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
			location: 'Bredene',
			description:
				'Hallo iedereen blabla test123... ik hou van konijnen, honden, katten (alle dieren) dus ik wil zkr op ze passen dus el maar of mailtje ofzo...',
			rating: 5,
			priceStay: 19,
			priceDayCare: 15,
			priceHomeVisits: 8,
			priceDogWalking: 7,
			priceHouseSitter: 22,
			allowSmallDog: true,
			allowMediumDog: true,
			allowLargeDog: true,
			allowCats: false,
			allowSmallAnimal: true,
			hasChildren: false,
			hasPets: true,
			hasGarden: false,
		},
		{
			id: '3',
			firstName: 'Yannick',
			lastName: 'Schalck',
			profilePic:
				'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			location: 'Bredene',
			description:
				'Hallo iedereen ik wil gerust op u hond leten voor wa moneys $$',
			rating: 4.5,
			priceStay: 19,
			priceDayCare: 15,
			priceHomeVisits: 8,
			priceDogWalking: 7,
			priceHouseSitter: 22,
			allowSmallDog: true,
			allowMediumDog: true,
			allowLargeDog: true,
			allowCats: false,
			allowSmallAnimal: true,
			hasChildren: false,
			hasPets: true,
			hasGarden: false,
		},
		{
			id: '4',
			firstName: 'Gordy',
			lastName: 'Van de Velde',
			profilePic:
				'https://images.unsplash.com/photo-1632498301446-5f78baad40d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
			location: 'Bredene',
			description: 'Woef waf ik ben schattig en ik wil honden vriendjes!!',
			rating: 3,
			priceStay: 19,
			priceDayCare: 15,
			priceHomeVisits: 8,
			priceDogWalking: 7,
			priceHouseSitter: 22,
			allowSmallDog: true,
			allowMediumDog: true,
			allowLargeDog: true,
			allowCats: false,
			allowSmallAnimal: true,
			hasChildren: false,
			hasPets: true,
			hasGarden: false
		},
	]

	const [petSitters, setPetSitters] = useState<PetSitter[]>([])

	const getPetSitters = async () => {
		const tx: SQLTransaction = await transaction()
		const result: SQLResultSet = await statement(tx, 'SELECT * FROM petsitters')
		setPetSitters(result.rows._array)
	}

	useEffect(() => {
		getPetSitters()
	}, [])

	const renderPetSitter = ({ item }: { item: PetSitter }) => {
		const PetSitter: PetSitter = {
			id: item.id,
			firstName: item.firstName,
			lastName: item.lastName,
			profilePic: item.profilePic,
			location: item.location,
			description: item.description,
			rating: item.rating,
			priceStay: item.priceStay,
			priceDayCare: item.priceDayCare,
			priceHomeVisits: item.priceHomeVisits,
			priceDogWalking: item.priceDogWalking,
			priceHouseSitter: item.priceHouseSitter,
			allowSmallDog: item.allowSmallDog,
			allowMediumDog: item.allowMediumDog,
			allowLargeDog: item.allowLargeDog,
			allowCats: item.allowCats,
			allowSmallAnimal: item.allowSmallAnimal,
			hasChildren: item.hasChildren,
			hasPets: item.hasPets,
			hasGarden: item.hasGarden,
		}
		return <Card user={item} key={item.id} navigation={navigation} />
	}

	return (
		<SafeAreaView>
			<FlatList
				style={styles.list}
				data={petSitters}
				renderItem={renderPetSitter}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	)
}
