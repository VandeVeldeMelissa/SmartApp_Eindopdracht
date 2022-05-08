import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import colors from '../../styles/colors'
import ChatList from './ChatList'

const Stack = createStackNavigator()

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
					headerLeft: () => null,
				})}
			/>
		</Stack.Navigator>
	)
}
