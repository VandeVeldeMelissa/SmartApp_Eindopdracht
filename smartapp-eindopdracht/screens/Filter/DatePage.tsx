import { Box, Button } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import Calender from '../../components/Calender'
import styles from '../../styles'
import colors from '../../styles/colors'

export default ({ navigation }: { navigation: any }) => {
	return (
			<Box height="100%" style={styles.container} background={colors.light}>
				<Calender />
				<Button
					style={styles.button}
					onPress={() => {
						navigation.goBack()
					}}
				>
					<Text style={styles.buttonText}>Save date(s)</Text>
				</Button>
			</Box>
	)
}
