import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Box, Button, HStack } from 'native-base'
import profile from '../../styles/profile'
import colors from '../../styles/colors'
import { auth } from '../../firebase'
import styles from '../../styles'
import { Ionicons } from '@expo/vector-icons'
import * as SMS from 'expo-sms'

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
		<View>
			<Box height="100%">
				<View
					style={[
						profile.containerDivider,
						{ backgroundColor: colors.light },
						profile.container,
					]}
				>
					<Text style={styles.subtitle}>Display Name:</Text>
					<Text style={styles.description}>{auth.currentUser?.displayName}</Text>
				</View>
				<View
					style={[
						profile.containerDivider,
						{ backgroundColor: colors.light },
						profile.container,
						profile.spaceBottom,
					]}
				>
					<Text style={styles.subtitle}>Email:</Text>
					<Text style={styles.description}>{auth.currentUser?.email}</Text>
				</View>
				<TouchableOpacity style={profile.buttonLogout} onPress={handleSignOut}>
					<HStack alignItems="center" space={2}>
						<Ionicons name="ios-power" size={24} color={colors.dark} />
						<Text style={profile.buttonLogoutText}>Log out</Text>
					</HStack>
				</TouchableOpacity>
			</Box>
		</View>
	)
}
