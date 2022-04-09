import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import Card from '../../components/Card'
import User from '../../interfaces/User'
import styles from '../../styles/index'
import Filter from './Filter'
import Overview from './Overview'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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
