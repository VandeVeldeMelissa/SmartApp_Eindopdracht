import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Filter from '../Filter/index'
import tabNavigation from './tabNavigation'
import colors from '../../styles/colors'
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
						headerShown: false,
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
			</RootStack.Group>
		</RootStack.Navigator>
	)
}
