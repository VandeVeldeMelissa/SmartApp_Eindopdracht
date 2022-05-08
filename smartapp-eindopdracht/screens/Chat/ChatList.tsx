import React, { useState } from 'react'
import { Box, Center, HStack } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import ChatUser from '../../interfaces/ChatUser'
import colors from '../../styles/colors'
import ChatListItem from '../../components/ChatListItem'
import ChatListHiddenItem from '../../components/ChatListHiddenItem'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import styles from '../../styles'

export default () => {
	const data: ChatUser[] = [
		{
			id: '1',
			name: 'Aram Vanlerberghe',
			timeStamp: '12:47 PM',
			recentText: 'Thank you :)',
			profilePic:
				'https://images.unsplash.com/photo-1535812859-6bfd2f132e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
		},
		{
			id: '2',
			name: 'Lydia Carver',
			timeStamp: '11:11 PM',
			recentText: 'See you soon!',
			profilePic:
				'https://images.unsplash.com/photo-1528113535984-1e3bb158e388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		},
		{
			id: '3',
			name: 'James Smith',
			timeStamp: '6:22 PM',
			recentText: 'Okay, I will let you know.',
			profilePic:
				'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
		},
	]

	const onRowDidOpen = (rowKey: string) => {
		console.log('This row opened: ', rowKey)
	}

	const renderItem = ({ item }: { item: ChatUser }) => (
		<ChatListItem item={item} key={item.id} />
	)

	const renderHiddenItem = (data: any, rowMap: any) => (
		<ChatListHiddenItem data={data} rowMap={rowMap} />
	)

	const [searchContact, setContacts] = useState<any[]>(data)

	const handleSearch = (textInput: string) => {
		const newSearchContacts = []
		for (let contact of data) {
			if (contact.name.toLowerCase().includes(textInput.toLowerCase())) {
				newSearchContacts.push(contact)
			}
		}
		setContacts(newSearchContacts)
	}

	return (
		<Center h="full">
			<Box background={colors.light} flex="1" w="100%">
				<HStack style={styles.inputContainer} alignItems="center">
					<Ionicons name="ios-search" size={24} style={styles.searchBarIcon} />
					<TextInput
						style={styles.inputSearchbar}
						placeholder={'Search'}
						placeholderTextColor={colors.grey[800]}
						autoCorrect={false}
						onChangeText={handleSearch}
					/>
				</HStack>
				<SwipeListView
					data={searchContact}
					keyExtractor={(rowData) => {
						return rowData.id.toString()
					}}
					renderItem={renderItem}
					renderHiddenItem={renderHiddenItem}
					rightOpenValue={-140}
					previewRowKey={''}
					previewOpenValue={-40}
					previewOpenDelay={3000}
					onRowDidOpen={onRowDidOpen}
				/>
			</Box>
		</Center>
	)
}
