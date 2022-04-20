import { Switch, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, HStack, ScrollView } from 'native-base'
import filter from '../../styles/filter'
import colors from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'

export default ({ navigation }: { navigation: any }) => {
	const nav = useNavigation()

	const [isEnabledNoChildren, setIsEnabledNoChildren] = useState(false)
	const toggleSwitchNoChildren = () =>
		setIsEnabledNoChildren((previousState) => !previousState)

	const [isEnabledNoPets, setIsEnabledNoPets] = useState(false)
	const toggleSwitchNoPets = () =>
		setIsEnabledNoPets((previousState) => !previousState)

	const [isEnabledGarden, setIsEnabledGarden] = useState(false)
	const toggleSwitchGarden = () =>
		setIsEnabledGarden((previousState) => !previousState)

	const [onChangeValueMaxPrice, setOnChangeValueMaxPrice] = useState(50)
	return (
		<View>
			<Box height="100%" style={filter.container}>
				<ScrollView>
					<Text style={filter.subtitle}>What are you looking for?</Text>
					<TouchableHighlight
						activeOpacity={0.7}
						underlayColor={colors.grey[200]}
						onPress={() => navigation.navigate('Service')}
						style={filter.spaceTop}
					>
						<HStack
							alignItems="center"
							justifyContent="space-between"
							style={[filter.switchContainer, filter.topContainer]}
						>
							<HStack alignItems="center" space={2}>
								<MaterialCommunityIcons
									name="dog-service"
									size={24}
									color={colors.dark}
								/>
								<Text style={filter.selectText}>Service:</Text>
							</HStack>
							<HStack alignItems="center" space={1}>
								<Text style={filter.selectedText}>-</Text>
								<AntDesign name="right" size={24} color={colors.grey[600]} />
							</HStack>
						</HStack>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor={colors.grey[200]}
						onPress={() => navigation.navigate('Location')}
					>
						<HStack
							alignItems="center"
							justifyContent="space-between"
							style={filter.switchContainer}
						>
							<HStack alignItems="center" space={2}>
								<Ionicons name="ios-location" size={24} color={colors.dark} />
								<Text style={filter.selectText}>Location:</Text>
							</HStack>
							<HStack alignItems="center" space={1}>
								<Text style={filter.selectedText}>-</Text>
								<AntDesign name="right" size={24} color={colors.grey[600]} />
							</HStack>
						</HStack>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor={colors.grey[200]}
						onPress={() => navigation.navigate('Date')}
					>
						<HStack
							alignItems="center"
							justifyContent="space-between"
							style={filter.switchContainer}
						>
							<HStack alignItems="center" space={2}>
								<Ionicons name="ios-calendar-sharp" size={24} color={colors.dark} />
								<Text style={filter.selectText}>Date(s):</Text>
							</HStack>
							<HStack alignItems="center" space={1}>
								<Text style={filter.selectedText}>-</Text>
								<AntDesign name="right" size={24} color={colors.grey[600]} />
							</HStack>
						</HStack>
					</TouchableHighlight>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor={colors.grey[200]}
						onPress={() => navigation.navigate('Pets')}
						style={filter.spaceBottom}
					>
						<HStack
							alignItems="center"
							justifyContent="space-between"
							style={[filter.switchContainer]}
						>
							<HStack alignItems="center" space={2}>
								<Ionicons name="ios-paw" size={24} color={colors.dark} />
								<Text style={filter.selectText}>Pet(s):</Text>
							</HStack>
							<HStack alignItems="center" space={1}>
								<Text style={filter.selectedText}>-</Text>
								<AntDesign name="right" size={24} color={colors.grey[600]} />
							</HStack>
						</HStack>
					</TouchableHighlight>
					<HStack alignItems="center" justifyContent="space-between">
						<Text style={filter.subtitle}>Maximum price:</Text>
						<Text style={filter.priceText}>{onChangeValueMaxPrice}€</Text>
					</HStack>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						margin={2}
						style={filter.spaceBottom}
					>
						<Text>0€</Text>
						<Slider
							style={filter.slider}
							minimumValue={0}
							maximumValue={75}
							minimumTrackTintColor={colors.purple[700]}
							maximumTrackTintColor={colors.grey[300]}
							value={50}
							step={1}
							onValueChange={(maxPrice) => {
								setOnChangeValueMaxPrice(maxPrice)
							}}
							tapToSeek={true}
						/>
						<Text>75€</Text>
					</HStack>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={[filter.switchContainer, filter.topContainer]}
					>
						<Text style={filter.switchText}>Pet Sitter has no children</Text>
						<Switch
							trackColor={{ false: colors.grey[200], true: colors.purple[700] }}
							thumbColor={colors.light}
							ios_backgroundColor={colors.grey[200]}
							onValueChange={toggleSwitchNoChildren}
							value={isEnabledNoChildren}
						/>
					</HStack>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={filter.switchContainer}
					>
						<Text style={filter.switchText}>Pet Sitter doesn't have pets</Text>
						<Switch
							trackColor={{ false: colors.grey[200], true: colors.purple[700] }}
							thumbColor={colors.light}
							ios_backgroundColor={colors.grey[200]}
							onValueChange={toggleSwitchNoPets}
							value={isEnabledNoPets}
						/>
					</HStack>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						style={filter.switchContainer}
						marginBottom={16}
					>
						<Text style={filter.switchText}>Pet Sitter has a garden</Text>
						<Switch
							trackColor={{ false: colors.grey[200], true: colors.purple[700] }}
							thumbColor={colors.light}
							ios_backgroundColor={colors.grey[200]}
							onValueChange={toggleSwitchGarden}
							value={isEnabledGarden}
						/>
					</HStack>
				</ScrollView>
				<Button style={filter.button}>
					<Text style={filter.buttonText}>Filter results</Text>
				</Button>
			</Box>
		</View>
	)
}
