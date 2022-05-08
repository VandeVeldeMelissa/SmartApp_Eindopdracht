import { Switch, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, HStack, ScrollView } from 'native-base'
import filter from '../../styles/filter'
import colors from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import {
	getFocusedRouteNameFromRoute,
	useNavigation,
} from '@react-navigation/native'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import styles from '../../styles'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	console.log(route.params)
	const nav = useNavigation()

	//House properties
	const [isEnabledNoChildren, setIsEnabledNoChildren] = useState(false)
	const toggleSwitchNoChildren = () =>
		setIsEnabledNoChildren((previousState) => !previousState)

	const [isEnabledNoPets, setIsEnabledNoPets] = useState(false)
	const toggleSwitchNoPets = () =>
		setIsEnabledNoPets((previousState) => !previousState)

	const [isEnabledGarden, setIsEnabledGarden] = useState(false)
	const toggleSwitchGarden = () =>
		setIsEnabledGarden((previousState) => !previousState)

	//Price
	const [maxPrice, setMaxPrice] = useState(25)

	//Amount of pets
	const [amountSmallDogs, setAmountSmallDogs] = useState()
	const [amountMediumDogs, setAmountMediumDogs] = useState()
	const [amountLargeDogs, setAmountLargeDogs] = useState()
	const [amountCats, setAmountCats] = useState()
	const [amountSmallAnimals, setAmountSmallAnimals] = useState()

	//Selected services
	const [serviceSelected, setServiceSelected] = useState()
	const [locationSelected, setLocationSelected] = useState()
	const [dateStartSelected, setDateStartSelected] = useState<string>()
	const [dateEndSelected, setDateEndSelected] = useState<string>()
	const [petsSelected, setPetsSelected] = useState()

	useEffect(() => {
		//Amount of pets
		setAmountSmallDogs(
			route.params ? (route.params.smallDogs ? route.params.smallDogs : 0) : 0,
		)
		setAmountMediumDogs(
			route.params ? (route.params.mediumDogs ? route.params.mediumDogs : 0) : 0,
		)
		setAmountLargeDogs(
			route.params ? (route.params.largeDogs ? route.params.largeDogs : 0) : 0,
		)
		setAmountCats(route.params ? (route.params.cats ? route.params.cats : 0) : 0)
		setAmountSmallAnimals(
			route.params
				? route.params.smallAnimals
					? route.params.smallAnimals
					: 0
				: 0,
		)

		//Selected services
		setServiceSelected(
			route.params ? (route.params.service ? route.params.service : '-') : '-',
		)
		setLocationSelected(
			route.params ? (route.params.location ? route.params.location : '-') : '-',
		)
		setDateStartSelected(
			route.params ? (route.params.dateStart ? route.params.dateStart : '-') : '-',
		)
		setDateEndSelected(
			route.params ? (route.params.dateEnd ? route.params.dateEnd : '-') : '-',
		)
		setPetsSelected(
			route.params ? (route.params.pets ? route.params.pets : '-') : '-',
		)
	}, [route.params])

	const convertDates = () => {
		if (dateStartSelected && dateStartSelected != '-') {
			let part1 = dateStartSelected.slice(4, 15)
			let part2 = ''
			if (dateEndSelected && dateEndSelected != '-') {
				part2 = ' - ' + dateEndSelected.slice(4, 15)
			}
			let shortDate = part1 + part2
			return shortDate
		} else {
			return '-'
		}
	}

	return (
		<Box height="100%" background={colors.light} style={styles.container}>
			<ScrollView>
				<Text style={filter.subtitle}>What are you looking for?</Text>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor={colors.grey[200]}
					onPress={() =>
						navigation.navigate('Service', {
							service: serviceSelected,
							location: locationSelected,
							dateStart: dateStartSelected,
							dateEnd: dateEndSelected,
							pets: petsSelected,
							smallDogs: amountSmallDogs,
							mediumDogs: amountMediumDogs,
							largeDogs: amountLargeDogs,
							cats: amountCats,
							smallAnimals: amountSmallAnimals,
						})
					}
					style={filter.spaceTop}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={[styles.containerDivider, styles.topContainer]}
					>
						<HStack alignItems="center" space={2}>
							<MaterialCommunityIcons
								name="dog-service"
								size={24}
								color={colors.dark}
							/>
							<Text style={filter.selectText}>Service:</Text>
						</HStack>
						<HStack alignItems="center" space={1}>
							<Text style={filter.selectedText}>{serviceSelected}</Text>
							<AntDesign name="right" size={24} color={colors.grey[600]} />
						</HStack>
					</HStack>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor={colors.grey[200]}
					onPress={() =>
						navigation.navigate('Location', {
							service: serviceSelected,
							location: locationSelected,
							dateStart: dateStartSelected,
							dateEnd: dateEndSelected,
							pets: petsSelected,
							smallDogs: amountSmallDogs,
							mediumDogs: amountMediumDogs,
							largeDogs: amountLargeDogs,
							cats: amountCats,
							smallAnimals: amountSmallAnimals,
						})
					}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={styles.containerDivider}
					>
						<HStack alignItems="center" space={2}>
							<Ionicons name="ios-location" size={24} color={colors.dark} />
							<Text style={filter.selectText}>Location:</Text>
						</HStack>
						<HStack alignItems="center" space={1}>
							<Text style={filter.selectedText}>{locationSelected}</Text>
							<AntDesign name="right" size={24} color={colors.grey[600]} />
						</HStack>
					</HStack>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor={colors.grey[200]}
					onPress={() =>
						navigation.navigate('Date', {
							service: serviceSelected,
							location: locationSelected,
							dateStart: dateStartSelected,
							dateEnd: dateEndSelected,
							pets: petsSelected,
							smallDogs: amountSmallDogs,
							mediumDogs: amountMediumDogs,
							largeDogs: amountLargeDogs,
							cats: amountCats,
							smallAnimals: amountSmallAnimals,
						})
					}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={styles.containerDivider}
					>
						<HStack alignItems="center" space={2}>
							<Ionicons name="ios-calendar-sharp" size={24} color={colors.dark} />
							<Text style={filter.selectText}>Date(s):</Text>
						</HStack>
						<HStack alignItems="center" space={1}>
							<Text style={filter.selectedText}>{convertDates()}</Text>
							<AntDesign name="right" size={24} color={colors.grey[600]} />
						</HStack>
					</HStack>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor={colors.grey[200]}
					onPress={() =>
						navigation.navigate('Pets', {
							service: serviceSelected,
							location: locationSelected,
							dateStart: dateStartSelected,
							dateEnd: dateEndSelected,
							pets: petsSelected,
							smallDogs: amountSmallDogs,
							mediumDogs: amountMediumDogs,
							largeDogs: amountLargeDogs,
							cats: amountCats,
							smallAnimals: amountSmallAnimals,
						})
					}
					style={filter.spaceBottom}
				>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={[styles.containerDivider]}
					>
						<HStack alignItems="center" space={2}>
							<Ionicons name="ios-paw" size={24} color={colors.dark} />
							<Text style={filter.selectText}>Pet(s):</Text>
						</HStack>
						<HStack alignItems="center" space={1}>
							<Text style={filter.selectedText}>{petsSelected}</Text>
							<AntDesign name="right" size={24} color={colors.grey[600]} />
						</HStack>
					</HStack>
				</TouchableHighlight>
				<HStack alignItems="center" justifyContent="space-between">
					<Text style={filter.subtitle}>Maximum price:</Text>
					<Text style={filter.priceText}>{maxPrice}€</Text>
				</HStack>
				<HStack
					alignItems="center"
					justifyContent="space-between"
					margin={2}
					style={filter.spaceBottom}
				>
					<Text>0€</Text>
					<Slider
						style={filter.slider}
						minimumValue={0}
						maximumValue={50}
						minimumTrackTintColor={colors.purple[700]}
						maximumTrackTintColor={colors.grey[300]}
						value={25}
						step={1}
						onSlidingComplete={(maxPrice) => {
							setMaxPrice(maxPrice)
						}}
						tapToSeek={true}
					/>
					<Text>50€</Text>
				</HStack>
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={[styles.containerDivider, styles.topContainer]}
				>
					<Text style={filter.switchText}>Pet Sitter has no children</Text>
					<Switch
						trackColor={{ false: colors.grey[200], true: colors.purple[700] }}
						thumbColor={colors.light}
						ios_backgroundColor={colors.grey[200]}
						onValueChange={toggleSwitchNoChildren}
						value={isEnabledNoChildren}
					/>
				</HStack>
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={styles.containerDivider}
				>
					<Text style={filter.switchText}>Pet Sitter doesn't have pets</Text>
					<Switch
						trackColor={{ false: colors.grey[200], true: colors.purple[700] }}
						thumbColor={colors.light}
						ios_backgroundColor={colors.grey[200]}
						onValueChange={toggleSwitchNoPets}
						value={isEnabledNoPets}
					/>
				</HStack>
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={styles.containerDivider}
					marginBottom={16}
				>
					<Text style={filter.switchText}>Pet Sitter has a garden</Text>
					<Switch
						trackColor={{ false: colors.grey[200], true: colors.purple[700] }}
						thumbColor={colors.light}
						ios_backgroundColor={colors.grey[200]}
						onValueChange={toggleSwitchGarden}
						value={isEnabledGarden}
					/>
				</HStack>
			</ScrollView>
			<Box style={styles.container}>
				<Button
					style={styles.button}
					onPress={() => {
						console.log('Click filter button')
						impactAsync(ImpactFeedbackStyle.Medium)
						navigation.navigate('Home', {
							service: serviceSelected,
							location: locationSelected,
							dateStart: dateStartSelected,
							dateEnd: dateEndSelected,
							pets: petsSelected,
							smallDogs: amountSmallDogs,
							mediumDogs: amountMediumDogs,
							largeDogs: amountLargeDogs,
							cats: amountCats,
							smallAnimals: amountSmallAnimals,
							maxPrice: maxPrice,
							noChildren: isEnabledNoChildren,
							noPets: isEnabledNoPets,
							garden: isEnabledGarden,
						})
					}}
				>
					<Text style={styles.buttonText}>Filter results</Text>
				</Button>
			</Box>
		</Box>
	)
}
