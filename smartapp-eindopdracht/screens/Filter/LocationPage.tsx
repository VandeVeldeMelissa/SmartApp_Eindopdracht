import { FlatList, View, Text, TextInput } from 'react-native'
import colors from '../../styles/colors'
import React, { useEffect, useState } from 'react'
import { Box, HStack } from 'native-base'
import styles from '../../styles'
import SearchBar from '../../components/SearchBar'
import { Ionicons } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default ({ route, navigation }: { route: any; navigation: any }) => {
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

	const [searchLocations, setSearchLocations] = useState<any[]>(testLocaties)

	const handleSearch = (textInput: string) => {
		const newSearchLocations = []
		for (let location of testLocaties) {
			if (location.key.toLowerCase().includes(textInput.toLowerCase())) {
				newSearchLocations.push(location)
			}
		}
		setSearchLocations(newSearchLocations)
	}

	return (
		<Box height="100%" background={colors.light}>
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
			<FlatList
				data={searchLocations}
				renderItem={({ item }) => (
					<TouchableHighlight
						style={styles.locationContainer}
						activeOpacity={0.7}
						underlayColor={colors.grey[200]}
						onPress={() => {
							navigation.navigate('Filter', {
								service: route.params.service,
								location: item.key,
								dateStart: route.params.dateStart,
								dateEnd: route.params.dateEnd,
								pets: route.params.pets,
								smallDogs: route.params.smallDogs,
								mediumDogs: route.params.mediumDogs,
								largeDogs: route.params.largeDogs,
								cats: route.params.cats,
								smallAnimals: route.params.smallAnimals,
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
