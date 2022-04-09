import React, { useState } from 'react'
import { Modal, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Overview from './Overview'
import Service from './Service'

const Stack = createNativeStackNavigator()

export default () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Filter" component={Overview} options={{headerShown: false}}/>
			<Stack.Screen name="Select Service" component={Service} />
		</Stack.Navigator>
	)
}
