import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import {
	ParamListBase,
	RouteProp,
	useNavigation,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { ComponentProps } from 'react'
import { Octicons } from '@expo/vector-icons'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'

import Home from '../Home/Overview'
import Chat from '../Chat'
import Profile from '../Profile'
import Settings from '../Settings'
import colors from '../../styles/colors'
import { Button, Pressable } from 'react-native'
import styles from '../../styles'
import Filter from '../Filter/stackNavigation'

const Tab = createBottomTabNavigator()

const screenOptions = ({
	route,
}: {
	route: RouteProp<ParamListBase>
}): BottomTabNavigationOptions => ({
	tabBarIcon: ({
		focused,
		color,
		size,
	}: {
		focused: boolean
		color: string
		size: number
	}) => {
		let icon: ComponentProps<typeof Ionicons>['name'] = 'help'

		if (route.name === 'Sitters & Walkers') icon = 'paw'
		if (route.name === 'Chat') icon = 'ios-chatbubbles'
		if (route.name === 'Profile') icon = 'ios-person'
		if (route.name === 'Settings') icon = 'ios-settings'

		return <Ionicons color={color} name={icon} size={size} />
	},
	tabBarActiveTintColor: colors.purple[800],
	tabBarInactiveTintColor: colors.grey[400],
	tabBarStyle: {
		backgroundColor: colors.light,
		borderTopWidth: 1,
		borderTopColor: colors.light,
	},
	tabBarLabelStyle: {
		fontFamily: 'Quicksand_500Medium',
	},
	headerStyle: {
		backgroundColor: colors.purple[700],
	},
	headerTitleStyle: {
		color: colors.light,
		fontFamily: 'Quicksand_600SemiBold',
	},
})

export default () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Sitters & Walkers"
				component={Home}
				options={({ navigation }) => ({
					tabBarLabel: 'Home',
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
			<Tab.Screen name="Chat" component={Chat} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	)
}