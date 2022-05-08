import React from 'react'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import 'react-native-gesture-handler'
import Profile from './Profile'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../styles/colors'
import styles from '../../styles'

const Stack = createStackNavigator()

export default () => {
	return (
		<Stack.Navigator initialRouteName="MyProfile">
			<Stack.Screen
				name="MyProfile"
				component={Profile}
				options={({ navigation }) => ({
					title: 'My Profile',
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
						<Pressable
							onPress={() => {
								impactAsync(ImpactFeedbackStyle.Medium)
								navigation.navigate('EditProfileModal')
							}}
						>
							<Ionicons
								name="ios-pencil"
								size={24}
								color={colors.light}
								style={styles.iconHeader}
							/>
						</Pressable>
					),
				})}
			/>
		</Stack.Navigator>
	)
}
