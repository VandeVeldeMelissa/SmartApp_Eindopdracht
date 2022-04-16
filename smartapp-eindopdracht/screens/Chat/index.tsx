import React from 'react'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import 'react-native-gesture-handler'
import colors from '../../styles/colors'
import ChatList from './ChatList'

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
		<Stack.Navigator initialRouteName="ChatList">
			<Stack.Screen
				name="ChatList"
				component={ChatList}
				options={() => ({
					title: 'Chat',
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
