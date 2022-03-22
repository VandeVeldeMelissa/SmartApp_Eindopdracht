import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import Sitters from '../Sitters'
import Chat from '../Chat'
import Profile from '../Profile'
import Settings from '../Settings'

const Tab = createBottomTabNavigator()

export default () => {
	return (
		<Tab.Navigator>
            <Tab.Screen name="Sitters" component={Sitters} />
			<Tab.Screen name="Chat" component={Chat} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	)
}
