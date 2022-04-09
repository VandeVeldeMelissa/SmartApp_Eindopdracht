import React from 'react'
import Filter from '../Filter/stackNavigation'
import Overview from './Overview'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'

const Stack = createStackNavigator()

const screenOptions= ({
	route,
  }: {
	route: RouteProp<ParamListBase>
  }): StackNavigationOptions => ({
	presentation: 'modal',
})

export default () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen
					name="Home"
					component={Overview}
					options={{ headerShown: false }}
				/>
			</Stack.Group>
			<Stack.Group screenOptions={screenOptions}>
				<Stack.Screen name="Filter" component={Filter} />
			</Stack.Group>
		</Stack.Navigator>
	)
}
