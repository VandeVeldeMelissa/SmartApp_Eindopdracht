import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import colors from '../../styles/colors'
import SettingsPage from './SettingsPage'

const Stack = createStackNavigator()

export default () => {
	return (
		<Stack.Navigator initialRouteName="Settings">
			<Stack.Screen
				name="Settings"
				component={SettingsPage}
				options={() => ({
					title: 'Settings',
					headerShown: true,
					headerStyle: {
						backgroundColor: colors.purple[700],
					},
					headerTitleStyle: {
						color: colors.light,
						fontFamily: 'Quicksand_600SemiBold',
					},
					headerTintColor: colors.light,
					headerBackTitle: 'Back',
					headerBackTitleStyle: {
						fontFamily: 'Quicksand_600SemiBold',
					},
				})}
			/>
		</Stack.Navigator>
	)
}
