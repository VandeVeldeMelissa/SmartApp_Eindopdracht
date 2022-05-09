import React, { useCallback, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import card from '../styles/card'
import { Avatar, HStack, VStack, Badge, Box } from 'native-base'
import colors from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import StarRating from 'react-native-star-rating'
import User from '../interfaces/PetSitter'

const avatarFallback = (firstName: string, lastName: string) => {
	let firstLetter = firstName.slice(0, 1)
	let secondLetter = lastName.slice(0, 1)
	let abbreviation = firstLetter + secondLetter
	return abbreviation
}

const NUMBER_OF_LINES = 2

function showOnly2Lines(textBlock: string) {
	const [showMore, setShowMore] = useState(false)
	const onTextLayout = useCallback((e) => {
		setShowMore(e.nativeEvent.lines.length > NUMBER_OF_LINES)
	}, [])

	return (
		<Text
			style={card.description}
			numberOfLines={NUMBER_OF_LINES}
			onTextLayout={onTextLayout}
		>
			{textBlock}
		</Text>
	)
}

export default ({
	user,
	navigation,
	service,
}: {
	user: User
	navigation: any
	service: string
}) => {
	const renderServicePrice = () => {
		if (service != '') {
			if (service == 'Stay') {
				return (
					<View>
						<Text style={(card.price, { textAlign: 'center' })}>
							{user.priceStay}€
						</Text>
						<Text style={card.price}>/stay</Text>
					</View>
				)
			} else if (service == 'Day Care') {
				return (
					<View>
						<Text style={(card.price, { textAlign: 'center' })}>
							{user.priceDayCare}€
						</Text>
						<Text style={card.price}>/day</Text>
					</View>
				)
			} else if (service == 'Home Visits') {
				return (
					<View>
						<Text style={(card.price, { textAlign: 'center' })}>
							{user.priceHomeVisits}€
						</Text>
						<Text style={card.price}>/visit</Text>
					</View>
				)
			} else if (service == 'Dog Walking') {
				return (
					<View>
						<Text style={(card.price, { textAlign: 'center' })}>
							{user.priceDogWalking}€
						</Text>
						<Text style={card.price}>/walk</Text>
					</View>
				)
			} else if (service == 'House Sitter') {
				return (
					<View>
						<Text style={(card.price, { textAlign: 'center' })}>
							{user.priceHouseSitter}€
						</Text>
						<Text style={card.price}>/house sit</Text>
					</View>
				)
			}
		}
	}

	return (
		<Pressable
			onPress={() => navigation.navigate('DetailPage', { payload: user })}
		>
			<View style={[card.card]}>
				<HStack alignItems="center" justifyContent="space-between">
					<HStack alignItems="center" space={2} marginBottom={2}>
						<Avatar
							bg="purple.100"
							source={{
								uri: user.profilePic,
							}}
							size="lg"
						>
							<Text style={card.fallback}>
								{avatarFallback(user.firstName, user.lastName)}
							</Text>
						</Avatar>
						<VStack>
							<Text style={card.title}>
								{user?.firstName} {user?.lastName}
							</Text>
							<HStack alignItems="center" space={1}>
								<Ionicons name="ios-location" color={colors.grey[800]} size={16} />
								<Text style={card.distance}>{user?.location}</Text>
							</HStack>
							<HStack space={1} alignItems="center">
								<StarRating
									disabled={true}
									maxStars={5}
									rating={user?.rating == null ? 0 : user.rating}
									fullStarColor={colors.rating}
									emptyStarColor={colors.grey[300]}
									starSize={20}
								/>
								<Text style={card.ratingtext}>
									({user.rating == null ? '-' : user.rating})
								</Text>
							</HStack>
						</VStack>
					</HStack>
					{renderServicePrice()}
				</HStack>
				{showOnly2Lines(user.description)}
			</View>
		</Pressable>
	)
}
