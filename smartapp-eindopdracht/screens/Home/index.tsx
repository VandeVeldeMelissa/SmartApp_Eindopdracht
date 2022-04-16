import React from 'react'
import Overview from './Overview'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import Detail from './Detail'
import Reviews from './Reviews'
import 'react-native-gesture-handler'
import colors from '../../styles/colors'
import { Pressable } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import styles from '../../styles'

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
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Overview}
				options={({ navigation }) => ({
					title: 'Sitters & Walkers',
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
						<Pressable onPress={() => navigation.navigate('FilterModal')}>
							<Octicons
								name="settings"
								size={24}
								color={colors.light}
								style={styles.iconHeader}
							/>
						</Pressable>
					),
				})}
			/>
			<Stack.Screen
				name="DetailPage"
				component={Detail}
				options={() => ({
					title: 'Details',
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
				name="ReviewsPage"
				component={Reviews}
				options={() => ({
					title: 'Reviews',
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
