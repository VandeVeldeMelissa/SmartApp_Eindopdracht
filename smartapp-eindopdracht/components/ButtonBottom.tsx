import { Box, Button } from 'native-base'
import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../styles'
import calender from '../styles/calender'
import colors from '../styles/colors'

export default ({title}: {title: string}) => {
	//Moet altijd samen met het geheel in een box met height 100% en padding zitten!
	return (
		<Button style={styles.button}>
			<Text style={styles.buttonText}>{title}</Text>
		</Button>
	)
}
