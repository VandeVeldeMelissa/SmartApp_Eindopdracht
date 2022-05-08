import { AntDesign, Ionicons } from '@expo/vector-icons'
import { HStack } from 'native-base'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { auth } from '../../firebase'
import styles from '../../styles'
import authentication from '../../styles/authentication'
import colors from '../../styles/colors'
import filter from '../../styles/filter'
import settings from '../../styles/settings'

export default ({ navigation }: { navigation: any }) => {
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('AuthenticationScreen')
			})
			.catch((error: { message: any }) => alert(error.message))
	}

	return (
		<TouchableOpacity style={settings.buttonLogout} onPress={handleSignOut}>
			<HStack alignItems="center" space={2}>
				<Ionicons name="ios-power" size={24} color={colors.dark} />
				<Text style={settings.buttonLogoutText}>Log out</Text>
			</HStack>
		</TouchableOpacity>
	)
}
