import React from 'react'
import Overview from './Overview'
import {
	createStackNavigator,
} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import colors from '../../styles/colors'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../styles'
import Service from './Service'
import LocationPage from './LocationPage'
import DatePage from './DatePage'
import Pets from './Pets'

const Stack = createStackNavigator()

export default () => {
	return (
		<Stack.Navigator initialRouteName="Filter">
			<Stack.Screen
				name="Filter"
				component={Overview}
				options={({ navigation }) => ({
					title: 'Filter',
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
					headerRight: () => (
						<Pressable onPress={() => navigation.goBack()}>
							<Ionicons
								name="close"
								color={colors.light}
								size={24}
								style={styles.iconHeader}
							/>
						</Pressable>
					),
					headerLeft: () => null,
				})}
			/>
			<Stack.Screen
				name="Service"
				component={Service}
				options={() => ({
					title: 'Service',
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
			<Stack.Screen
				name="Location"
				component={LocationPage}
				options={() => ({
					title: 'Location',
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
			<Stack.Screen
				name="Date"
				component={DatePage}
				options={() => ({
					title: 'Date(s)',
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
			<Stack.Screen
				name="Pets"
				component={Pets}
				options={() => ({
					title: 'Pet(s)',
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
