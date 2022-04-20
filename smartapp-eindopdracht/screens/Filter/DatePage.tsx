import { Box, Button } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import Calender from '../../components/Calender'
import styles from '../../styles'
import calender from '../../styles/calender'

export default ({ navigation }: { navigation: any }) => {
	return (
		<View>
			<Box height="100%" style={calender.container}>
			  <Calender/>
        <Button
  					style={styles.button}
  					onPress={() => {
  						navigation.goBack()
  					}}
  				>
  					<Text style={styles.buttonText}>Save date(s)</Text>
  				</Button>
			</Box>
		</View>
	)
}
