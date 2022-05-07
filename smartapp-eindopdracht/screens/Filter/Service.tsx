import { Box, HStack, ScrollView, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../styles/colors'
import filter from '../../styles/filter'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const [isSelectedAtSittersHouseNight, setIsSelectedAtSittersHouseNight] =
		useState(false)
	const toggleSelectAtSittersHouseNight = () =>
		setIsSelectedAtSittersHouseNight((previousState) => !previousState)

	const [isSelectedAtSittersHouseDay, setIsSelectedAtSittersHouseDay] =
		useState(false)
	const toggleSelectAtSittersHouseDay = () =>
		setIsSelectedAtSittersHouseDay((previousState?) => !previousState)

	const [isSelectedHouseVisit, setIsSelectedHouseVisit] = useState(false)
	const toggleSelectHouseVisit = () =>
		setIsSelectedHouseVisit((previousState) => !previousState)

	const [isSelectedDogWalking, setIsSelectedDogWalking] = useState(false)
	const toggleSelectDogWalking = () =>
		setIsSelectedDogWalking((previousState) => !previousState)

	const [isSelectedSitterAtMyHouse, setIsSelectedSitterAtMyHouse] =
		useState(false)
	const toggleSelectSitterAtMyHouse = () =>
		setIsSelectedSitterAtMyHouse((previousState) => !previousState)

	const unselectAllServices = () => {
		setIsSelectedAtSittersHouseNight(false)
		setIsSelectedAtSittersHouseDay(false)
		setIsSelectedHouseVisit(false)
		setIsSelectedDogWalking(false)
		setIsSelectedSitterAtMyHouse(false)
	}

	useEffect(() => {
		setIsSelectedAtSittersHouseNight(
			route.params.service == 'Stay' ? true : false,
		)
		setIsSelectedAtSittersHouseDay(
			route.params.service == 'Day care' ? true : false,
		)
		setIsSelectedHouseVisit(route.params.service == 'Home visits' ? true : false)
		setIsSelectedDogWalking(route.params.service == 'Dog walking' ? true : false)
		setIsSelectedSitterAtMyHouse(
			route.params.service == 'House sitter' ? true : false,
		)
	}, [])

	return (
		<Box height="100%" background={colors.light}>
			<ScrollView style={filter.container}>
				<Text style={filter.subtitle}>At the sitter's house</Text>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor={colors.grey[200]}
					style={filter.spaceTop}
					onPress={() => {
						unselectAllServices()
						toggleSelectAtSittersHouseNight()
						navigation.navigate('Filter', {
							service: 'Stay',
							location: route.params.location,
							dateStart: route.params.dateStart,
							dateEnd: route.params.dateEnd,
							pets: route.params.pets,
							smallDogs: route.params.smallDogs,
							mediumDogs: route.params.mediumDogs,
							largeDogs: route.params.largeDogs,
							cats: route.params.cats,
							smallAnimals: route.params.smallAnimals,
						})
					}}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={[filter.switchContainer, filter.topContainer]}
					>
						<HStack alignItems="center" space={3}>
							<MaterialCommunityIcons
								name="power-sleep"
								size={24}
								color={colors.dark}
							/>
							<VStack space={1}>
								<Text style={filter.serviceTitle}>Stay</Text>
								<Text style={filter.serviceDescription}>
									Stays with the pet sitter, day and night
								</Text>
							</VStack>
						</HStack>
						<Box opacity={isSelectedAtSittersHouseNight ? 1 : 0}>
							<Ionicons name="ios-checkmark" size={24} color={colors.purple[800]} />
						</Box>
					</HStack>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor={colors.grey[200]}
					style={filter.spaceBottom}
					onPress={() => {
						unselectAllServices()
						toggleSelectAtSittersHouseDay()
						navigation.navigate('Filter', {
							service: 'Day Care',
							location: route.params.location,
							dateStart: route.params.dateStart,
							dateEnd: route.params.dateEnd,
							pets: route.params.pets,
							smallDogs: route.params.smallDogs,
							mediumDogs: route.params.mediumDogs,
							largeDogs: route.params.largeDogs,
							cats: route.params.cats,
							smallAnimals: route.params.smallAnimals,
						})
					}}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={filter.switchContainer}
					>
						<HStack alignItems="center" space={3}>
							<Ionicons name="sunny" size={24} color={colors.dark} />
							<VStack space={1}>
								<Text style={filter.serviceTitle}>Day care</Text>
								<Text style={filter.serviceDescription}>
									Stay with the pet sitter during the day
								</Text>
							</VStack>
						</HStack>
						<Box opacity={isSelectedAtSittersHouseDay ? 1 : 0}>
							<Ionicons name="ios-checkmark" size={24} color={colors.purple[800]} />
						</Box>
					</HStack>
				</TouchableHighlight>
				<Text style={filter.subtitle}>At your house</Text>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor={colors.grey[200]}
					style={filter.spaceTop}
					onPress={() => {
						unselectAllServices()
						toggleSelectHouseVisit()
						navigation.navigate('Filter', {
							service: 'Home Visits',
							location: route.params.location,
							dateStart: route.params.dateStart,
							dateEnd: route.params.dateEnd,
							pets: route.params.pets,
							smallDogs: route.params.smallDogs,
							mediumDogs: route.params.mediumDogs,
							largeDogs: route.params.largeDogs,
							cats: route.params.cats,
							smallAnimals: route.params.smallAnimals,
						})
					}}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={[filter.switchContainer, filter.topContainer]}
					>
						<HStack alignItems="center" space={3}>
							<Ionicons name="key" size={24} color={colors.dark} />
							<VStack space={1}>
								<Text style={filter.serviceTitle}>Home visits</Text>
								<Text style={filter.serviceDescription}>
									The pet sitter comes to your home
								</Text>
							</VStack>
						</HStack>
						<Box opacity={isSelectedHouseVisit ? 1 : 0}>
							<Ionicons name="ios-checkmark" size={24} color={colors.purple[800]} />
						</Box>
					</HStack>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor={colors.grey[200]}
					onPress={() => {
						unselectAllServices()
						toggleSelectDogWalking()
						navigation.navigate('Filter', {
							service: 'Dog Walking',
							location: route.params.location,
							dateStart: route.params.dateStart,
							dateEnd: route.params.dateEnd,
							pets: route.params.pets,
							smallDogs: route.params.smallDogs,
							mediumDogs: route.params.mediumDogs,
							largeDogs: route.params.largeDogs,
							cats: route.params.cats,
							smallAnimals: route.params.smallAnimals,
						})
					}}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={filter.switchContainer}
					>
						<HStack alignItems="center" space={3}>
							<MaterialCommunityIcons
								name="dog-service"
								size={24}
								color={colors.dark}
							/>
							<VStack space={1}>
								<Text style={filter.serviceTitle}>Dog walking service</Text>
								<Text style={filter.serviceDescription}>A nice walk for your dog</Text>
							</VStack>
						</HStack>
						<Box opacity={isSelectedDogWalking ? 1 : 0}>
							<Ionicons name="ios-checkmark" size={24} color={colors.purple[800]} />
						</Box>
					</HStack>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor={colors.grey[200]}
					onPress={() => {
						unselectAllServices()
						toggleSelectSitterAtMyHouse()
						navigation.navigate('Filter', {
							service: 'House Sitter',
							location: route.params.location,
							dateStart: route.params.dateStart,
							dateEnd: route.params.dateEnd,
							pets: route.params.pets,
							smallDogs: route.params.smallDogs,
							mediumDogs: route.params.mediumDogs,
							largeDogs: route.params.largeDogs,
							cats: route.params.cats,
							smallAnimals: route.params.smallAnimals,
						})
					}}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={filter.switchContainer}
					>
						<HStack alignItems="center" space={3}>
							<Ionicons name="home" size={24} color={colors.dark} />
							<VStack space={1}>
								<Text style={filter.serviceTitle}>House sitter</Text>
								<Text style={filter.serviceDescription}>
									The pet sitter stays at your home
								</Text>
							</VStack>
						</HStack>
						<Box opacity={isSelectedSitterAtMyHouse ? 1 : 0}>
							<Ionicons name="ios-checkmark" size={24} color={colors.purple[800]} />
						</Box>
					</HStack>
				</TouchableHighlight>
			</ScrollView>
		</Box>
	)
}
