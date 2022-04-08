import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import card from '../styles/card'
import { Avatar, HStack, VStack, Badge, Box } from 'native-base'
import colors from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import StarRating from 'react-native-star-rating'
import User from '../interfaces/User'

const avatarFallback = (firstName: string, lastName: string) => {
    let firstLetter = firstName.slice(0,1)
    let secondLetter = lastName.slice(0,1)
    let abbreviation = firstLetter + secondLetter
    return abbreviation
}

export default ({ user }: { user: User }) => {
	return (
		<View style={[card.card]}>
			<HStack alignItems="center" justifyContent="space-between">
			    <HStack alignItems="center" space={2} marginBottom={2}>
    				<Avatar
    					bg="purple.200"
    					source={{
    						uri: "",
    					}}
    					size="lg"
    				>
    					<Text style={card.fallback}>{avatarFallback(user.firstName,user.lastName)}</Text>
    				</Avatar>
    				<VStack>
    					<Text style={card.title}>{user?.firstName} {user?.lastName}</Text>
    					<HStack alignItems="center" space={1}>
    						<Ionicons name="ios-location" color={colors.grey[800]} size={16} />
    						<Text style={card.distance}>{user?.location}</Text>
    					</HStack>
    					<HStack space={1} alignItems="center">
    						<StarRating
    							disabled={true}
    							maxStars={5}
    							rating={user?.rating}
    							fullStarColor={colors.rating}
    							starSize={20}
    						/>
    						<Text style={card.ratingtext}>(?)</Text>
    					</HStack>
    				</VStack>
    			</HStack>
    			<VStack>
    				<Text style={card.price}>{user.priceWalk} €{'\n'}/walk</Text>
    			</VStack>
			</HStack>
			<Text style={card.description}>
				{user.description}
			</Text>
		</View>
	)
}
