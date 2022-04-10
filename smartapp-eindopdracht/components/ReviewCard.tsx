import { Avatar, HStack, VStack } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import card from '../styles/card'
import chat from '../styles/chat'
import colors from '../styles/colors'

// id: string
// name: string
// profilePic: string
// rating: number
// text: string
// date: string

export default () => {
	return (
		<View style={card.card}>
			<HStack space={2} alignItems='center' marginBottom={2}>
				<Avatar
					bg="purple.200"
					source={{
						uri: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
					}}
					size="lg"
				>
					MV
				</Avatar>
				<VStack alignItems="flex-start">
				    <Text style={card.smallTitle}>Melissa Van de Velde</Text>
    				    <StarRating
        					disabled={true}
        					maxStars={5}
        					rating={4.5}
        					fullStarColor={colors.rating}
        					emptyStarColor={colors.grey[300]}
        					starSize={20}
        				/>
                        <Text style={card.timeStamp}>10/04/2022</Text>
				</VStack>
			</HStack>
            <Text style={card.description}>Great service and incredibly friendly with my dog! Would recommend :D I love how she kept me updated with pictured of my cute doggie :D</Text>
		</View>
	)
}
