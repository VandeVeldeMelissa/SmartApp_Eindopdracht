import { Avatar, HStack, VStack } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import Review from '../interfaces/Review'
import card from '../styles/card'
import chat from '../styles/chat'
import colors from '../styles/colors'

export default ({item}: {item: Review}) => {

	const renderDescription = () => {
		if (item.description != null) {
			return(<Text style={[card.description, {marginTop: 8}]}>{item.description}</Text>)
		}
	}

	return (
		<View style={card.card}>
			<HStack space={2} alignItems='center'>
				<Avatar
					bg="purple.200"
					source={{
						uri: item.profilePic,
					}}
					size="lg"
				>
					MV
				</Avatar>
				<VStack alignItems="flex-start">
				    <Text style={card.smallTitle}>{item.name}</Text>
    				    <StarRating
        					disabled={true}
        					maxStars={5}
        					rating={item.rating}
        					fullStarColor={colors.rating}
        					emptyStarColor={colors.grey[300]}
        					starSize={20}
        				/>
                        <Text style={card.timeStamp}>{item.date}</Text>
				</VStack>
			</HStack>
			{renderDescription()}
		</View>
	)
}
