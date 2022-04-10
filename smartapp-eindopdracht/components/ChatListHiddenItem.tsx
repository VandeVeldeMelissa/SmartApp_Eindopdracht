import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { HStack, Icon, Pressable, VStack, Text } from 'native-base'
import React from 'react'
import chat from '../styles/chat'
import colors from '../styles/colors'

export default ({ data, rowMap }: { data: any; rowMap: any }) => {
	const closeRow = (rowMap: any, rowKey: any) => {
		if (rowMap[rowKey]) {
			rowMap[rowKey].closeRow()
		}
	}

	const moreOptions = (rowMap: any, rowKey: any) => {
		console.log(`More: ${rowMap} ${rowKey}`)
	}

	const deleteRow = (rowMap: any, rowKey: any) => {
		console.log(`Delete: ${rowMap} ${rowKey}`)
	}

	return (
		<HStack flex="1">
			<Pressable
				w="70"
				ml="auto"
				bg="coolGray.200"
				justifyContent="center"
				onPress={() => moreOptions(rowMap, data.item.id)}
				_pressed={{
					opacity: 0.5,
				}}
			>
				<VStack alignItems="center" space={2}>
					<Icon
						as={<Entypo name="dots-three-horizontal" />}
						size="xs"
						color={colors.grey[900]}
					/>
					<Text style={[chat.hiddenButtonLabel, chat.darkButton]}>More</Text>
				</VStack>
			</Pressable>
			<Pressable
				w="70"
				bg="red.500"
				justifyContent="center"
				onPress={() => deleteRow(rowMap, data.item.id)}
				_pressed={{
					opacity: 0.5,
				}}
			>
				<VStack alignItems="center" space={2}>
					<Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
					<Text style={[chat.hiddenButtonLabel, chat.lightButton]}>Delete</Text>
				</VStack>
			</Pressable>
		</HStack>
	)
}
