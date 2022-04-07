import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { ComponentProps } from 'react'

import Sitters from '../Sitters'
import Chat from '../Chat'
import Profile from '../Profile'
import Settings from '../Settings'
import colors from '../../styles/colors'

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

		if (route.name === 'Sitters') icon = 'paw'
		if (route.name === 'Chat') icon = 'ios-chatbubbles'
		if (route.name === 'Profile') icon = 'ios-person'
		if (route.name === 'Settings') icon = 'ios-settings'

		return <Ionicons color={color} name={icon} size={size} />
	},
	tabBarActiveTintColor: colors.theme.darkpurple,
	tabBarInactiveTintColor: colors.theme.grey,
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
			<Tab.Screen name="Sitters" component={Sitters} />
			<Tab.Screen name="Chat" component={Chat} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	)
}
