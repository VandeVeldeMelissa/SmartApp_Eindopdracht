import React from 'react'
import {
	createStackNavigator,
} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Profile from './Profile'
import colors from '../../styles/colors'

const Stack = createStackNavigator()

export default () => {
	return (
		<Stack.Navigator initialRouteName="MyProfile">
			<Stack.Screen
				name="MyProfile"
				component={Profile}
				options={({ navigation }) => ({
					title: 'Profile',
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
					headerLeft: () => null,
				})}
			/>
		</Stack.Navigator>
	)
}
