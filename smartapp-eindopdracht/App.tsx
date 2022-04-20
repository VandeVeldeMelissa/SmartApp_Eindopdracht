import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './screens/AppNavigation'
import { NativeBaseProvider, Box, extendTheme } from 'native-base'
import {
	useFonts,
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from '@expo-google-fonts/quicksand'
import AppLoading from 'expo-app-loading'
import colors from './styles/colors'

const theme = extendTheme({ colors: colors.theme.colors })

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
			<NativeBaseProvider theme={theme}>
				<Box flex={1}>
					<NavigationContainer theme={colors.basictheme}>
						<SafeAreaProvider>
							<StatusBar style="auto" />
							<AppNavigation />
						</SafeAreaProvider>
					</NavigationContainer>
				</Box>
			</NativeBaseProvider>
		)
	}
}
