import React from 'react'
import Filter from '../Filter/stackNavigation'
import Overview from './Overview'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import Detail from './Detail'
import Reviews from './Reviews'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler';

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
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Group>
				<Stack.Screen
					name="Home"
					component={Overview}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Detail"
					component={Detail}
					options={{ headerShown: true }}
				/>
			</Stack.Group>
			<Stack.Group screenOptions={screenOptions}>
				<Stack.Screen name="Filter" component={Filter} />
			</Stack.Group>
		</Stack.Navigator>
	)
}
