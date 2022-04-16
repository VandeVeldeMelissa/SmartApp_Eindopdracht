import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { Avatar, Box, HStack, VStack } from 'native-base'
import profile from '../../styles/profile'
import StarRating from 'react-native-star-rating'
import colors from '../../styles/colors'
import { Ionicons } from '@expo/vector-icons'

export default ({ navigation }: { navigation: any }) => {
	return (
		<View>
			<Box style={profile.container} height="100%" backgroundColor={colors.light}>
				<HStack alignItems="center" space={2}>
					<Avatar
						bg="purple.200"
						source={{
							uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
						}}
						size="xl"
					>
						<Text>MV</Text>
					</Avatar>
					<VStack>
						<Text style={profile.name}>Melissa Van de Velde</Text>
						<HStack alignItems="center" space={1}>
							<Ionicons name="ios-location" color={colors.grey[800]} size={16} />
							<Text style={profile.location}>Bredene</Text>
						</HStack>
						<Pressable onPress={() => navigation.navigate('MyReviewsPage')}>
							<HStack space={1} alignItems="center">
								<StarRating
									disabled={true}
									maxStars={5}
									rating={4}
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
				<Text style={profile.subtitle}>Description</Text>
				<Text style={profile.description}>
					Hallo iedereen. Ik ben Mel. Ik heb een hond. Test123. Ik ben de lijntjes
					tekst hier aan het testen. En zo te zien werkt het joepie de poepie.
				</Text>
				<Text style={profile.subtitle}>Pets</Text>
				<HStack alignItems="center" space={2}>
					<Avatar
						bg="purple.200"
						source={{
							uri: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
						}}
						size="md"
					>
						<Text>G</Text>
					</Avatar>
					<VStack>
						<Text style={profile.dogname}>Gordy</Text>
						<Text style={profile.dogbreed}>Gordon Setter</Text>
					</VStack>
				</HStack>
				<Text style={profile.subtitle}>My home</Text>
				<Text style={profile.home}>
					- House{'\n'}- Garden{'\n'}- No Children
				</Text>
			</Box>
		</View>
	)
}
