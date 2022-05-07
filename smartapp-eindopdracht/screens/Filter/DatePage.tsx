import { Box, Button } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import Calender from '../../components/Calender'
import styles from '../../styles'
import calender from '../../styles/calender'
import colors from '../../styles/colors'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	//console.log(route.params)
	const [dateStartSelected, setDateStartSelected] = useState<Date | null>()
	const [dateEndSelected, setDateEndSelected] = useState<Date | null>()

	const onDateChange = (date: any, type: any) => {
		if (type === 'END_DATE') {
			setDateEndSelected(date)
		} else {
			setDateStartSelected(date)
			setDateEndSelected(null)
		}
	}

	const minDate = new Date() // Today
	const maxDate = new Date(2023, 12, 31)
	const startDate = dateStartSelected ? dateStartSelected.toString() : ''
	const endDate = dateEndSelected ? dateEndSelected.toString() : ''

	return (
		<Box height="100%" style={styles.container} background={colors.light}>
			<Box height="100%">
				<CalendarPicker
					startFromMonday={true}
					allowRangeSelection={true}
					showDayStragglers={true}
					minDate={minDate}
					maxDate={maxDate}
					previousTitleStyle={calender.button}
					nextTitleStyle={calender.button}
					todayBackgroundColor={colors.purple[500]}
					selectedDayColor={colors.purple[800]}
					selectedDayTextColor={colors.light}
					textStyle={calender.text}
					monthTitleStyle={calender.textTitle}
					yearTitleStyle={calender.textTitle}
					onDateChange={onDateChange}
					selectedStartDate={route.params.dateStart ? route.params.dateStart : undefined}
					selectedEndDate={route.params.dateEnd ? route.params.dateEnd : undefined}
				/>
				<View>
					<Text>SELECTED START DATE:{startDate}</Text>
					<Text>SELECTED END DATE:{endDate}</Text>
				</View>
			</Box>
			<Button
				style={styles.button}
				onPress={() => {
					navigation.navigate('Filter', {
						service: route.params.service,
						location: route.params.location,
						dateStart: startDate,
						dateEnd: endDate,
						pets: route.params.pets,
						smallDogs: route.params.smallDogs,
						mediumDogs: route.params.mediumDogs,
						largeDogs: route.params.largeDogs,
						cats: route.params.cats,
						smallAnimals: route.params.smallAnimals,
					})
				}}
			>
				<Text style={styles.buttonText}>Save date(s)</Text>
			</Button>
		</Box>
	)
}
