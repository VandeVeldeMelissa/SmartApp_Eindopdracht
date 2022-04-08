import React from 'react'
import { Text, View } from 'react-native'
import card from '../styles/card'
import { Avatar, HStack, VStack, Badge, Box } from 'native-base'
import colors from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import StarRating from 'react-native-star-rating'

export default () => {
	return (
		<View style={[card.card]}>
			<HStack alignItems="center" justifyContent="space-between">
			    <HStack alignItems="center" space={2} marginBottom={2}>
    				<Avatar
    					bg="purple.300"
    					source={{
    						uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    					}}
    					size="lg"
    				>
    					MV
    				</Avatar>
    				<VStack>
    					<Text style={card.title}>Melissa Van de Velde</Text>
    					<HStack alignItems="center" space={1}>
    						<Ionicons name="ios-location" color={colors.grey[800]} size={16} />
    						<Text style={card.distance}>800m - Bredene</Text>
    					</HStack>
    					<HStack space={1} alignItems="center">
    						<StarRating
    							disabled={true}
    							maxStars={5}
    							rating={4.5}
    							fullStarColor={colors.rating}
    							starSize={20}
    						/>
    						<Text style={card.ratingtext}>(8)</Text>
    					</HStack>
    				</VStack>
    			</HStack>
    			<VStack>
    				<Text style={card.price}>10 €{'\n'}/walk</Text>
    			</VStack>
			</HStack>
			<Text style={card.description}>
				Hallo ik ben blabla en ik doe graag blala ik heb hondjes katjes konijntjes
				echt alles eigl dusja...
			</Text>
		</View>
	)
}
