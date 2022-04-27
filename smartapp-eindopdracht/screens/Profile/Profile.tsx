import React from 'react'
import {
	Text,
	View,
	Pressable,
	ScrollView,
	TouchableHighlight,
} from 'react-native'
import { Avatar, Box, HStack, VStack } from 'native-base'
import profile from '../../styles/profile'
import StarRating from 'react-native-star-rating'
import colors from '../../styles/colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import { Button } from 'native-base'
import filter from '../../styles/filter'
import card from '../../styles/card'

const avatarFallback = (firstName: string, lastName: string) => {
	let firstLetter = firstName.slice(0, 1)
	let secondLetter = lastName.slice(0, 1)
	let abbreviation = firstLetter + secondLetter
	return abbreviation
}

export default ({ navigation }: { navigation: any }) => {
	return (
		<View>
			<Box height="100%" backgroundColor={colors.light}>
				<ScrollView style={profile.container}>
					<HStack alignItems="center" space={2}>
						<Avatar
							bg="purple.200"
							source={{
								uri: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
							}}
							size="xl"
						>
							<Text>{avatarFallback('Melissa', 'Van de Velde')}</Text>
						</Avatar>
						<VStack>
							<Text style={profile.name}>Melissa Van de Velde</Text>
							<HStack alignItems="center" space={1}>
								<Ionicons name="ios-location" color={colors.grey[800]} size={16} />
								<Text style={profile.location}>Bredene</Text>
							</HStack>
							<Pressable onPress={() => navigation.navigate('ReviewsPage')}>
								<HStack space={1} alignItems="center">
									<StarRating
										disabled={true}
										maxStars={5}
										rating={5}
										fullStarColor={colors.rating}
										emptyStarColor={colors.grey[300]}
										starSize={20}
									/>
									<Text style={profile.ratingtext}>(?)</Text>
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
						<Text style={profile.description}>Hello everybody</Text>
					</View>
					<View style={profile.paddingTop}>
						<Text style={profile.subtitle}>Services</Text>
						<TouchableHighlight activeOpacity={0.7} underlayColor={colors.grey[200]}>
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
								<Text style={card.price}>10€</Text>
							</HStack>
						</TouchableHighlight>
						<TouchableHighlight activeOpacity={0.7} underlayColor={colors.grey[200]}>
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
								<Text style={card.price}>7€</Text>
							</HStack>
						</TouchableHighlight>
						<TouchableHighlight activeOpacity={0.7} underlayColor={colors.grey[200]}>
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
								<Text style={card.price}>7€</Text>
							</HStack>
						</TouchableHighlight>
						<TouchableHighlight activeOpacity={0.7} underlayColor={colors.grey[200]}>
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
										<Text style={filter.serviceDescription}>
											A nice walk for your dog
										</Text>
									</VStack>
								</HStack>
								<Text style={card.price}>5€</Text>
							</HStack>
						</TouchableHighlight>
						<TouchableHighlight activeOpacity={0.7} underlayColor={colors.grey[200]}>
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
								<Text style={card.price}>9€</Text>
							</HStack>
						</TouchableHighlight>
					</View>
					<View style={profile.paddingTop}>
						<Text style={profile.subtitle}>My pets</Text>
						<HStack alignItems="center" space={2} style={profile.serviceContainer}>
							<Avatar
								bg="purple.200"
								source={{
									uri: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
								}}
								size="md"
							>
								<Text>{avatarFallback('Gordy', '')}</Text>
							</Avatar>
							<VStack>
								<Text style={profile.dogname}>Gordy</Text>
								<Text style={profile.dogbreed}>Large dog</Text>
							</VStack>
						</HStack>
						<HStack alignItems="center" space={2} style={profile.serviceContainer}>
							<Avatar
								bg="purple.200"
								source={{
									uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80',
								}}
								size="md"
							>
								<Text>{avatarFallback('Gordy', '')}</Text>
							</Avatar>
							<VStack>
								<Text style={profile.dogname}>Meow</Text>
								<Text style={profile.dogbreed}>Cat</Text>
							</VStack>
						</HStack>
					</View>
					<View style={[profile.containerDivider, profile.spaceBottom]}>
						<Text style={profile.subtitle}>My home</Text>
						<HStack alignItems="center" space={1}>
							<Ionicons name="ios-checkmark" size={24} color={colors.green} />
							<Text style={profile.home}>Garden</Text>
						</HStack>
						<HStack alignItems="center" space={1}>
							<Ionicons name="ios-checkmark" size={24} color={colors.green} />
							<Text style={profile.home}>No children</Text>
						</HStack>
					</View>
				</ScrollView>
			</Box>
		</View>
	)
}
