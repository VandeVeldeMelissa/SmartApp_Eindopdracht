import React from 'react'
import { Text, View, Pressable, ScrollView } from 'react-native'
import { Avatar, Box, HStack, VStack } from 'native-base'
import profile from '../../styles/profile'
import StarRating from 'react-native-star-rating'
import colors from '../../styles/colors'
import { Ionicons } from '@expo/vector-icons'

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
						</VStack>
					</HStack>
					<View style={profile.containerDivider}>
						<Text style={profile.subtitle}>About me</Text>
						<Text style={profile.description}>Hello everybody</Text>
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
				</ScrollView>
			</Box>
		</View>
	)
}
