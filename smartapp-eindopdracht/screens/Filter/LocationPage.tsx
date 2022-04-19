import {
	FlatList,
	TextInput,
	View,
	Text,
} from 'react-native'
import colors from '../../styles/colors'
import React from 'react'
import { HStack } from 'native-base'
import styles from '../../styles'
import { Ionicons } from '@expo/vector-icons'


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
		<View>
			<HStack style={styles.inputContainer} alignItems="center">
				<Ionicons name="ios-search" size={24} style={styles.searchBarIcon} />
				<TextInput
					style={styles.inputSearchbar}
					placeholder={'Search'}
					placeholderTextColor={colors.light}
					autoCorrect={false}
				/>
			</HStack>
			<FlatList
				data={testLocaties}
				renderItem={({ item }) => (
					<View style={styles.locationContainer}>
						<Text style={styles.locationText}>{item.key}</Text>
					</View>
				)}
			/>
		</View>
	)
}
