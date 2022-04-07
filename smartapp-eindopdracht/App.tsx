import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './screens/AppNavigation'
import {
	useFonts,
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from '@expo-google-fonts/quicksand'
import AppLoading from 'expo-app-loading'

export default function App() {
	let [fontsLoaded] = useFonts({
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<NavigationContainer>
				<SafeAreaProvider>
					<StatusBar style="auto" />
					<AppNavigation />
				</SafeAreaProvider>
			</NavigationContainer>
		)
	}
}
