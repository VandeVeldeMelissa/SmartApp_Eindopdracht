import React from 'react'
import Filter from '../Filter/stackNavigation'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import colors from '../../styles/colors'
import Settings from './Settings'

const Stack = createStackNavigator()

const screenOptions = ({
	route,
}: {
	route: RouteProp<ParamListBase>
}): StackNavigationOptions => ({
	presentation: 'modal',
})

export default () => {
	return (
		<Stack.Navigator initialRouteName="Settings">
			<Stack.Screen
				name="Settings"
				component={Settings}
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
