import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import React, { ComponentProps } from 'react'
import Home from '../Home/index'
import Chat from '../Chat/index'
import colors from '../../styles/colors'
import Profile from '../Profile/index'

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
	tabBarActiveTintColor: colors.purple[900],
	tabBarInactiveTintColor: colors.grey[400],
	tabBarStyle: {
		backgroundColor: colors.light,
		borderTopWidth: 1,
		borderTopColor: colors.grey[100],
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
	headerShown: false,
})

export default () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Sitters & Walkers"
				component={Home}
				options={() => ({
					tabBarLabel: 'Home',
				})}
			/>
			<Tab.Screen name="Chat" component={Chat} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	)
}
