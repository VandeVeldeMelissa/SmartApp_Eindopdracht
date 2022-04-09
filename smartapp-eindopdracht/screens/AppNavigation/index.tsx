import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Filter from '../Filter/stackNavigation'
import Edit from '../Profile/Edit'
import tabNavigation from './tabNavigation'
import colors from '../../styles/colors'
import { Pressable } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import styles from '../../styles'

const RootStack = createStackNavigator()

export default () => {
	return (
		<RootStack.Navigator>
			<RootStack.Group screenOptions={{ headerShown: false }}>
				<RootStack.Screen
					name="BottomTabNavigatorScreen"
					component={tabNavigation}
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
						headerRight: () => (<Pressable onPress={() => navigation.goBack()}><Ionicons name="close" color={colors.light} size={24} style={styles.iconHeader}/></Pressable>),
						headerLeft: ()=> null,
						title: 'Filter'
					})}
				/>
				<RootStack.Screen
					name="EditProfileModal"
					component={Edit}
					options={({ navigation }) => ({
						headerRight: () => (<Pressable onPress={() => navigation.goBack()}><Ionicons name="close" color={colors.light} size={24} style={styles.iconHeader}/></Pressable>),
						headerLeft: ()=> null,
						title: 'Edit profile'
					})}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	)
}
