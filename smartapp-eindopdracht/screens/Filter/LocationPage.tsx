import {
	FlatList,
	TextInput,
	View,
	Text,
} from 'react-native'
import colors from '../../styles/colors'
import React from 'react'
import { Box, HStack } from 'native-base'
import styles from '../../styles'
import { Ionicons } from '@expo/vector-icons'
import SearchBar from '../../components/SearchBar'


export default () => {
	const testLocaties = [
		{ key: 'Kortrijk' },
		{ key: 'Wevelgem' },
		{ key: 'Moorsele' },
		{ key: 'Menen' },
		{ key: 'Brugge' },
		{ key: 'Oostende' },
		{ key: 'Bredene' },
		{ key: 'Knokke' },
		{ key: 'De Panne' },
		{ key: 'Roeselare' },
	]

	return (
		<Box height='100%' background={colors.light}>
			<SearchBar/>
			<FlatList
				data={testLocaties}
				renderItem={({ item }) => (
					<View style={styles.locationContainer}>
						<Text style={styles.locationText}>{item.key}</Text>
					</View>
				)}
			/>
		</Box>
	)
}
