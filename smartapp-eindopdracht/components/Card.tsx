import React from 'react'
import { Text, View } from 'react-native'
import card from '../styles/card'

export default () => {
	return <View style= {[card.card]}>
    <Text>Name (picture on left side)</Text>
    <Text>Walker/Sitter</Text>
    <Text>Description</Text>
    </View>
}