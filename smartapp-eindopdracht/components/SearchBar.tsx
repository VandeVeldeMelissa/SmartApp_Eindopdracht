import { Ionicons } from '@expo/vector-icons'
import { HStack } from 'native-base'
import React from 'react'
import { FlatList, TextInput, View, Text } from 'react-native'
import styles from '../styles'
import colors from '../styles/colors'

export default () => {
	return (
		<HStack style={styles.inputContainer} alignItems="center">
			<Ionicons name="ios-search" size={24} style={styles.searchBarIcon} />
			<TextInput
				style={styles.inputSearchbar}
				placeholder={'Search'}
				placeholderTextColor={colors.grey[800]}
				autoCorrect={false}
			/>
		</HStack>
	)
}
