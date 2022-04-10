import { Ionicons } from '@expo/vector-icons'
import {
	CompositeNavigationProp,
	ParamListBase,
	useIsFocused,
	useNavigation,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Avatar, Box, HStack, VStack } from 'native-base'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import User from '../../interfaces/User'
import styles from '../../styles'
import colors from '../../styles/colors'
import profile from '../../styles/profile'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	const { payload } = route.params

	const nav = useNavigation()
	const isFocused = useIsFocused()

	useEffect(() => {
		nav?.getParent()?.setOptions({ title: 'Detail' })
	}, [isFocused])

	return (
		<View>
			<Box style={profile.container} height='100%' backgroundColor={colors.light}>
				<HStack alignItems="center" space={2}>
					<Avatar
						bg="purple.200"
						source={{
							uri: payload.profilePic,
						}}
						size="xl"
					>
						<Text>MV</Text>
					</Avatar>
					<VStack>
						<Text style={profile.name}>
							{payload.firstName} {payload.lastName}
						</Text>
						<Text style={profile.location}>{payload.location}</Text>
						<Pressable onPress={() => navigation.navigate('ReviewsPage')}>
							<HStack space={1} alignItems="center">
								<StarRating
									disabled={true}
									maxStars={5}
									rating={payload.rating}
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
				<Text style={profile.description}>{payload.description}</Text>
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
