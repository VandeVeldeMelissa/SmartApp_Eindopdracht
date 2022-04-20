import { Box, Button } from 'native-base'
import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../styles'
import calender from '../styles/calender'
import colors from '../styles/colors'

export default () => {
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
		<Box height="100%">
			<CalendarPicker
				startFromMonday={true}
				allowRangeSelection={true}
				showDayStragglers={true}
				minDate={minDate}
				maxDate={maxDate}
				previousTitleStyle={calender.button}
				nextTitleStyle={calender.button}
				todayBackgroundColor={colors.purple[600]}
				selectedDayColor={colors.purple[800]}
				selectedDayTextColor={colors.light}
				textStyle={calender.text}
				monthTitleStyle={calender.textTitle}
				yearTitleStyle={calender.textTitle}
				onDateChange={onDateChange}
			/>

			<View>
				<Text>SELECTED START DATE:{startDate}</Text>
				<Text>SELECTED END DATE:{endDate}</Text>
			</View>
		</Box>
	)
}
