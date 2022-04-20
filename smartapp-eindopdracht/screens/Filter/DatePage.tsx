import React from 'react'
import { Text, View } from 'react-native'
import Calender from '../../components/Calender'

export default ({ navigation }: { navigation: any }) => {
	return (
		<View>
			<Calender navigation={navigation}/>
		</View>
	)
}
