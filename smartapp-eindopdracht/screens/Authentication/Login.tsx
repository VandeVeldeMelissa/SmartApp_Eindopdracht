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

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: any) => {
			if (user) {
				navigation.navigate('BottomTabNavigatorScreen')
			}
		})
		return unsubscribe
	}, [])

	const handleSignIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials: { user: any }) => {
				const user = userCredentials.user
				console.log('Logged in with: ', user.email)
			})
			.catch((error: { message: any }) => alert(error.message))
	}

	return (
		<SafeAreaView style={authentication.container}>
			<View style={authentication.containerTitle}>
				<Ionicons
					name="ios-paw"
					size={48}
					color={colors.purple[700]}
					style={authentication.icon}
				/>
				<Text style={authentication.title}>Welcome!</Text>
				<Text style={authentication.title}>Please sign in or register.</Text>
			</View>
			<KeyboardAvoidingView
				style={authentication.containerInputAndButtons}
				behavior="padding"
			>
				<View style={authentication.inputContainer}>
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
					<TouchableOpacity style={authentication.button} onPress={handleSignIn}>
						<Text style={authentication.buttonText}>Log in</Text>
					</TouchableOpacity>
					<Text style={authentication.smallText}>Don't have an account yet?</Text>
					<TouchableOpacity
						style={[authentication.button, authentication.buttonOutline]}
						onPress={() => {
							navigation.navigate('Register')
						}}
					>
						<Text style={authentication.buttonOutlineText}>Register</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}
