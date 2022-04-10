import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Filter from '../Filter/stackNavigation'
import Edit from '../Profile/Edit'
import tabNavigation from './tabNavigation'
import colors from '../../styles/colors'
import { Appearance, Pressable } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import styles from '../../styles'
import Detail from '../Home/Detail'
import Reviews from '../Home/Reviews'
import MyReviews from '../Profile/Reviews'

const RootStack = createStackNavigator()

export default () => {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen
					name="BottomTabNavigatorScreen"
					component={tabNavigation}
					options={() => ({
						title: 'Home',
						headerShown: false,
					})}
				/>
				<RootStack.Screen
					name="DetailPage"
					component={Detail}
					options={() => ({
						title: 'Detail',
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
						}
					})}
				/>
				<RootStack.Screen
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
						}
					})}
				/>
				<RootStack.Screen
					name="OwnReviewsPage"
					component={MyReviews}
					options={() => ({
						title: 'My Reviews',
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
						}
					})}
				/>
			</RootStack.Group>
			<RootStack.Group
				screenOptions={({ navigation }) => ({
					headerShown: true,
					presentation: 'modal',
					animationEnabled: true,
					headerStyle: {
						backgroundColor: colors.purple[700],
					},
					headerTitleStyle: {
						color: colors.light,
						fontFamily: 'Quicksand_600SemiBold',
					},
					headerTintColor: colors.light,
				})}
			>
				<RootStack.Screen
					name="FilterModal"
					component={Filter}
					options={({ navigation }) => ({
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
						title: 'Filter',
					})}
				/>
				<RootStack.Screen
					name="EditProfileModal"
					component={Edit}
					options={({ navigation }) => ({
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
						title: 'Edit profile',
					})}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	)
}
