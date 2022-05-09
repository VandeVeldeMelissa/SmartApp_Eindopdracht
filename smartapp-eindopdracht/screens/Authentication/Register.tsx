import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../../firebase'
import authentication from '../../styles/authentication'
import colors from '../../styles/colors'

export default ({ navigation }: { navigation: any }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [displayName, setDisplayName] = useState('')

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: any) => {
			if (user) {
				navigation.navigate('BottomTabNavigatorScreen')
			}
		})
		return unsubscribe
	}, [])

	const handleSignUp = () => {
		if (displayName != '') {
			auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials: { user: any }) => {
				const user = userCredentials.user
				console.log('Registered with: ', user.email)
				auth.currentUser
					.updateProfile({
						displayName: displayName,
					})
					.then((r: any) => {
						console.log(r)
					})
					.catch((e: any) => {
						console.log(e)
					})
			})
			.catch((error: { message: any }) => alert(error.message))
		}
		else {
			alert("Display Name may not be empty.")
		}
	}

	return (
		<KeyboardAvoidingView
			style={[authentication.containerInputAndButtons, { flex: 1 }]}
			behavior="padding"
		>
			<SafeAreaView style={authentication.container}>
				<View style={authentication.containerTitle}>
					<Ionicons
						name="ios-paw"
						size={48}
						color={colors.purple[700]}
						style={authentication.icon}
					/>
					<Text style={authentication.title}>Please register.</Text>
				</View>
				<View style={authentication.inputContainer}>
					<Text style={authentication.inputLabel}>Display Name: </Text>
					<TextInput
						placeholder="Name"
						placeholderTextColor={colors.grey[600]}
						style={authentication.input}
						value={displayName}
						onChangeText={(text) => setDisplayName(text)}
						autoCapitalize="none"
					/>
					<Text style={authentication.inputLabel}>Email: </Text>
					<TextInput
						placeholder="example@example.com"
						placeholderTextColor={colors.grey[600]}
						style={authentication.input}
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize="none"
					/>
					<Text style={authentication.inputLabel}>Password: </Text>
					<TextInput
						placeholder="********"
						placeholderTextColor={colors.grey[600]}
						style={authentication.input}
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize="none"
						secureTextEntry
					/>
				</View>
				<View style={authentication.buttonContainer}>
					<TouchableOpacity style={authentication.button} onPress={handleSignUp}>
						<Text style={authentication.buttonText}>Register</Text>
					</TouchableOpacity>
					<Text style={authentication.smallText}>Already have an account?</Text>
					<TouchableOpacity
						style={[authentication.button, authentication.buttonOutline]}
						onPress={() => {
							navigation.navigate('Login')
						}}
					>
						<Text style={authentication.buttonOutlineText}>Log in</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}
