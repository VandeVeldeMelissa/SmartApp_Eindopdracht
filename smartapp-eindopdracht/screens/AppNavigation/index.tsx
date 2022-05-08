import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Filter from '../Filter/index'
import Edit from '../Profile/Edit'
import tabNavigation from './tabNavigation'
import colors from '../../styles/colors'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import styles from '../../styles'
import authenticationScreen from '../Authentication/index'

const RootStack = createStackNavigator()

export default () => {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen
					name="AuthenticationScreen"
					component={authenticationScreen}
					options={() => ({
						title: 'Log in',
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
						animationEnabled: false,
						headerLeft: () => null,
						headerShown: false
					})}
				/>
				<RootStack.Screen
					name="BottomTabNavigatorScreen"
					component={tabNavigation}
					options={() => ({
						title: 'Home',
						headerShown: false,
						animationEnabled: false,
					})}
				/>
			</RootStack.Group>
			<RootStack.Group
				screenOptions={() => ({
					headerShown: false,
					presentation: 'modal',
					animationEnabled: true,
				})}
			>
				<RootStack.Screen name="FilterModal" component={Filter} />
				<RootStack.Screen
					name="EditProfileModal"
					component={Edit}
					options={({ navigation }) => ({
						headerShown: true,
						headerRight: () => (
							<Pressable
								onPress={() => {
									impactAsync(ImpactFeedbackStyle.Medium)
									navigation.goBack()
								}}
							>
								<Ionicons
									name="close"
									color={colors.light}
									size={24}
									style={styles.iconHeader}
								/>
							</Pressable>
						),
						headerLeft: () => null,
						title: 'Edit profile',
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
			</RootStack.Group>
		</RootStack.Navigator>
	)
}
