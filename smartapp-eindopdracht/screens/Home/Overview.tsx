import { useIsFocused, useNavigation } from '@react-navigation/native'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'
import { Box, Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import Card from '../../components/Card'
import PetSitter from '../../interfaces/PetSitter'
import styles from '../../styles/index'
import { statement, transaction } from '../../utils/db'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const nav = useNavigation()
	const isFocused = useIsFocused()

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Sitters & Walkers' })
	}, [isFocused])

	const [petSitters, setPetSitters] = useState<PetSitter[]>([])

	const getPetSitters = async () => {
		const tx: SQLTransaction = await transaction()
		const result: SQLResultSet = await statement(
			tx,
			'SELECT * FROM petsitters ORDER BY rating DESC',
		)
		setPetSitters(result.rows._array)
	}

	const getPetSittersFiltered = async () => {
		const tx: SQLTransaction = await transaction()
		let sqlStringServiceAndLocation = `SELECT * FROM petsitters WHERE id IS NOT NULL${
			route.params.service != '-'
				? ` AND price${route.params.service.replace(' ', '')} IS NOT NULL`
				: ''
		}${
			route.params.location != '-'
				? ` AND location IS "${route.params.location}"`
				: ''
		}`
		let sqlStringPets = `${
			route.params.smallDogs && route.params.smallDogs > 0
				? ' AND allowSmallDog IS 1'
				: ''
		}${
			route.params.mediumDogs && route.params.mediumDogs > 0
				? ' AND allowMediumDog IS 1'
				: ''
		}${
			route.params.largeDogs && route.params.largeDogs > 0
				? ' AND allowLargeDog IS 1'
				: ''
		}${route.params.cats && route.params.cats > 0 ? ' AND allowCats IS 1' : ''}${
			route.params.smallAnimals && route.params.smallAnimals > 0
				? ' AND allowSmallAnimal IS 1'
				: ''
		}`
		let sqlStringMaxPrice = `${
			route.params.service != '-'
				? ` AND price${route.params.service.replace(' ', '')} <= ${
						route.params.maxPrice
				  }`
				: ''
		}`
		let sqlStringHouseOptions = `${
			route.params.noChildren ? ' AND hasChildren IS 0' : ''
		}${route.params.noPets ? ' AND hasPets IS 0' : ''}${
			route.params.garden ? ' AND hasGarden IS 1' : ''
		}`
		let sqlString =
			sqlStringServiceAndLocation +
			sqlStringPets +
			sqlStringMaxPrice +
			sqlStringHouseOptions +
			' ORDER BY rating DESC'
		const result: SQLResultSet = await statement(tx, sqlString)
		setPetSitters(result.rows._array)
	}

	useEffect(() => {
		if (route.params == undefined) {
			getPetSitters()
		} else if (route.params != undefined) {
			getPetSittersFiltered()
		}
	}, [route.params])

	const renderResponseWhenNoPetSitters = () => {
		if (petSitters.length == 0) {
			return <Text style={styles.noResultsText}>No results found.</Text>
		}
	}

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
		return (
			<Card
				user={item}
				key={item.id}
				navigation={navigation}
				service={
					route.params ? (route.params.service ? route.params.service : '') : ''
				}
			/>
		)
	}

	return (
		<SafeAreaView>
			<Center h="full">
				<Box flex="1" w="100%">
					{renderResponseWhenNoPetSitters()}
					<FlatList
						style={styles.list}
						data={petSitters}
						renderItem={renderPetSitter}
						keyExtractor={(item) => item.id}
					/>
				</Box>
			</Center>
		</SafeAreaView>
	)
}
