import { FlatList, View, Text, TextInput } from 'react-native'
import colors from '../../styles/colors'
import React from 'react'
import { Box, HStack } from 'native-base'
import styles from '../../styles'
import SearchBar from '../../components/SearchBar'
import { Ionicons } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	//console.log(route.params)

	const testLocaties = [
		{ key: 'Bredene' },
		{ key: 'Brugge' },
		{ key: 'De Panne' },
		{ key: 'De Haan' },
		{ key: 'Ieper' },
		{ key: 'Kortrijk' },
		{ key: 'Knokke' },
		{ key: 'Moorsele' },
		{ key: 'Menen' },
		{ key: 'Oostende' },
		{ key: 'Roeselare' },
		{ key: 'Wevelgem' },
	]

	return (
		<Box height="100%" background={colors.light}>
			<HStack style={styles.inputContainer} alignItems="center">
				<Ionicons name="ios-search" size={24} style={styles.searchBarIcon} />
				<TextInput
					style={styles.inputSearchbar}
					placeholder={'Search'}
					placeholderTextColor={colors.grey[800]}
					autoCorrect={false}
				/>
			</HStack>
			<FlatList
				data={testLocaties}
				renderItem={({ item }) => (
					<TouchableHighlight
						style={styles.locationContainer}
						activeOpacity={0.7}
						underlayColor={colors.grey[200]}
						onPress={() => {
							console.log(item.key)
							//navigation.navigate('Filter', { location: item.key })
							navigation.navigate('Filter', {
								service: route.params.service,
								location: item.key,
								dates: route.params.dates,
								pets: route.params.pets,
							})
						}}
					>
						<Text style={styles.locationText}>{item.key}</Text>
					</TouchableHighlight>
				)}
			/>
		</Box>
	)
}
