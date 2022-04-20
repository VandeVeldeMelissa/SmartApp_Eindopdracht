import React, { useState } from 'react'
import { Box, Heading, Center } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import ChatUser from '../../interfaces/ChatUser'
import colors from '../../styles/colors'
import chat from '../../styles/chat'
import ChatListItem from '../../components/ChatListItem'
import ChatListHiddenItem from '../../components/ChatListHiddenItem'
import SearchBar from '../../components/SearchBar'

export default () => {
	const data: ChatUser[] = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			firstName: 'Afreen',
			lastName: 'Khan',
			timeStamp: '12:47 PM',
			recentText: 'Good Day!',
			profilePic:
				'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			firstName: 'Sujita',
			lastName: 'Mathur',
			timeStamp: '11:11 PM',
			recentText: 'Cheer up, there!',
			profilePic:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			firstName: 'Anci',
			lastName: 'Barroco',
			timeStamp: '6:22 PM',
			recentText: 'Good Day!',
			profilePic: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
		},
		{
			id: '68694a0f-3da1-431f-bd56-142371e29d72',
			firstName: 'Aniket',
			lastName: 'Kumar',
			timeStamp: '8:56 PM',
			recentText: 'All the best',
			profilePic:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
		},
		{
			id: '28694a0f-3da1-471f-bd96-142456e29d72',
			firstName: 'Kiara',
			lastName: 'Bennet',
			timeStamp: '12:47 PM',
			recentText: 'I will call today.',
			profilePic:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
		},
	]
	const [listData, setListData] = useState(data)

	const onRowDidOpen = (rowKey: string) => {
		console.log('This row opened: ', rowKey)
	}

	const renderItem = ({ item }: { item: ChatUser }) => (
		<ChatListItem item={item} key={item.id} />
	)

	const renderHiddenItem = (data: any, rowMap: any) => (
		<ChatListHiddenItem data={data} rowMap={rowMap} />
	)

	return (
		<Center h="full">
			<Box background={colors.light} flex="1" w="100%">
				<SearchBar/>
				<SwipeListView
					data={listData}
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
