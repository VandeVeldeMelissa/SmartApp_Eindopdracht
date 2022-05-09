import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import { Avatar, Box, HStack, ScrollView, VStack } from 'native-base'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import colors from '../../styles/colors'
import profile from '../../styles/profile'
import { Button } from 'native-base'
import filter from '../../styles/filter'
import card from '../../styles/card'
import * as SMS from 'expo-sms'

const avatarFallback = (firstName: string, lastName: string) => {
	let firstLetter = firstName.slice(0, 1)
	let secondLetter = lastName.slice(0, 1)
	let abbreviation = firstLetter + secondLetter
	return abbreviation
}

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const { payload } = route.params

	const nav = useNavigation()
	const isFocused = useIsFocused()

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Detail' })
	}, [isFocused])

	const renderStayService = () => {
		if (payload.priceStay != undefined) {
			return (
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={profile.serviceContainer}
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
					<Text style={card.price}>{payload.priceStay} €</Text>
				</HStack>
			)
		}
	}

	const renderDayCareService = () => {
		if (payload.priceDayCare != undefined) {
			return (
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={profile.serviceContainer}
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
					<Text style={card.price}>{payload.priceDayCare} €</Text>
				</HStack>
			)
		}
	}

	const renderHomeVisitsService = () => {
		if (payload.priceHomeVisits != undefined) {
			return (
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={profile.serviceContainer}
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
					<Text style={card.price}>{payload.priceHomeVisits} €</Text>
				</HStack>
			)
		}
	}

	const renderDogWalkingService = () => {
		if (payload.priceDogWalking != undefined) {
			return (
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={profile.serviceContainer}
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
					<Text style={card.price}>{payload.priceDogWalking} €</Text>
				</HStack>
			)
		}
	}

	const renderHouseSitterService = () => {
		if (payload.priceHouseSitter != undefined) {
			return (
				<HStack
					alignItems="center"
					justifyContent="space-between"
					style={profile.serviceContainer}
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
					<Text style={card.price}>{payload.priceHouseSitter} €</Text>
				</HStack>
			)
		}
	}

	const renderChildrenFeature = () => {
		if (payload.hasChildren == 0) {
			return (
				<HStack alignItems="center" space={1}>
					<Ionicons name="ios-checkmark" size={24} color={colors.green} />
					<Text style={profile.home}>Has no children</Text>
				</HStack>
			)
		} else if (payload.hasChildren == 1) {
			return (
				<HStack alignItems="center" space={1}>
					<Ionicons name="ios-close" size={24} color={colors.red} />
					<Text style={profile.home}>Has children</Text>
				</HStack>
			)
		}
	}

	const renderPetsFeature = () => {
		if (payload.hasPets == 0) {
			return (
				<HStack alignItems="center" space={1}>
					<Ionicons name="ios-checkmark" size={24} color={colors.green} />
					<Text style={profile.home}>Has no pets</Text>
				</HStack>
			)
		} else if (payload.hasPets == 1) {
			return (
				<HStack alignItems="center" space={1}>
					<Ionicons name="ios-close" size={24} color={colors.red} />
					<Text style={profile.home}>Has pets</Text>
				</HStack>
			)
		}
	}

	const renderGardenFeature = () => {
		if (payload.hasGarden == 1) {
			return (
				<HStack alignItems="center" space={1}>
					<Ionicons name="ios-checkmark" size={24} color={colors.green} />
					<Text style={profile.home}>Has a garden</Text>
				</HStack>
			)
		} else if (payload.hasGarden == 0) {
			return (
				<HStack alignItems="center" space={1}>
					<Ionicons name="ios-close" size={24} color={colors.red} />
					<Text style={profile.home}>Has no garden</Text>
				</HStack>
			)
		}
	}

	const renderSmallDog = () => {
		if (payload.allowSmallDog) {
			return (<Text style={profile.home}>- Small dogs (0-10kg)</Text>)
		}
	}
	const renderMeidumDog = () => {
		if (payload.allowMediumDog) {
			return (<Text style={profile.home}>- Medium dogs (10-25kg)</Text>)
		}
	}
	const renderLargeeDog = () => {
		if (payload.allowLargeDog) {
			return (<Text style={profile.home}>- Large dogs ({'>'}25kg)</Text>)
		}
	}
	const renderCats = () => {
		if (payload.allowCats) {
			return (<Text style={profile.home}>- Cats (all kind of cats)</Text>)
		}
	}
	const renderSmallAnimal = () => {
		if (payload.allowSmallAnimal) {
			return (<Text style={profile.home}>- Small animals (rabbit, bird, hamster...)</Text>)
		}
	}

	return (
		<View>
			<Box height="100%" backgroundColor={colors.light}>
				<ScrollView style={profile.container}>
					<HStack alignItems="center" space={2}>
						<Avatar
							bg="purple.100"
							source={{
								uri: payload.profilePic,
							}}
							size="xl"
						>
							<Text style={{fontSize: 24}}>{avatarFallback(payload.firstName, payload.lastName)}</Text>
						</Avatar>
						<VStack>
							<Text style={profile.name}>
								{payload.firstName} {payload.lastName}
							</Text>
							<HStack alignItems="center" space={1}>
								<Ionicons name="ios-location" color={colors.grey[800]} size={16} />
								<Text style={profile.location}>{payload.location}</Text>
							</HStack>
							<Pressable
								onPress={() =>
									navigation.navigate('ReviewsPage', {
										userid: payload.id,
										rating: payload.rating,
									})
								}
							>
								<HStack space={1} alignItems="center">
									<StarRating
										disabled={true}
										maxStars={5}
										rating={payload.rating}
										fullStarColor={colors.rating}
										emptyStarColor={colors.grey[300]}
										starSize={20}
									/>
									<Text style={profile.ratingtext}>
										({payload.rating == null ? '-' : payload.rating})
									</Text>
								</HStack>
								<HStack alignItems="center">
									<Text style={profile.ratingtext}>See reviews</Text>
									<Ionicons name="chevron-forward" size={16} color="black" />
								</HStack>
							</Pressable>
						</VStack>
					</HStack>
					<View style={profile.containerDivider}>
						<Text style={profile.subtitle}>About me</Text>
						<Text style={profile.description}>{payload.description}</Text>
					</View>
					<View style={profile.paddingTop}>
						<Text style={profile.subtitle}>My services</Text>
						{renderStayService()}
						{renderDayCareService()}
						{renderHomeVisitsService()}
						{renderDogWalkingService()}
						{renderHouseSitterService()}
					</View>
					<View style={profile.containerDivider}>
						<Text style={profile.subtitle}>My home</Text>
						{renderChildrenFeature()}
						{renderPetsFeature()}
						{renderGardenFeature()}
					</View>
					<View style={[profile.containerDivider, profile.spaceBottom]}>
						<Text style={profile.subtitle}>Wants to take care of:</Text>
						{renderSmallDog()}
						{renderMeidumDog()}
						{renderLargeeDog()}
						{renderCats()}
						{renderSmallAnimal()}
					</View>
				</ScrollView>
				<Box style={profile.backgroundButton}>
					<Button
						style={profile.button}
						onPress={async () => {
							impactAsync(ImpactFeedbackStyle.Medium)
							const isAvailable = await SMS.isAvailableAsync()
							if (isAvailable) {
								await SMS.sendSMSAsync(['0494640112'], 'Hey!')
							}
							else {
								alert("SMS not available.")
							}
						}}
					>
						<Text style={profile.buttonText}>Contact</Text>
					</Button>
				</Box>
			</Box>
		</View>
	)
}
