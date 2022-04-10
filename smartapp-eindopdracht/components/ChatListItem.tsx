import {
	Avatar,
	Box,
	HStack,
	Pressable,
	Spacer,
	VStack,
	Text,
} from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ChatUser from '../interfaces/ChatUser'
import chat from '../styles/chat'
import colors from '../styles/colors'

export default ({ item }: { item: ChatUser }) => {
	return (
		<View>
			<Pressable
				onPress={() => console.log('Clicked on chat')}
				backgroundColor={colors.light}
			>
				<Box style={chat.container}>
					<HStack alignItems="center" space={3}>
						<Avatar
							size="48px"
							source={{
								uri: item.profilePic,
							}}
						/>
						<VStack>
							<Text style={chat.overviewName}>
								{item.firstName} {item.lastName}
							</Text>
							<Text style={chat.recentText}>{item.recentText}</Text>
						</VStack>
						<Spacer />
						<Text style={chat.timeStamp} alignSelf="flex-start">
							{item.timeStamp}
						</Text>
					</HStack>
				</Box>
			</Pressable>
		</View>
	)
}
