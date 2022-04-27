import { Button, HStack, VStack, Box } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../styles/colors'
import filter from '../../styles/filter'

export default ({ route, navigation }: { route: any; navigation: any }) => {
	//console.log(route.params)
	const [amountSmallDogs, setAmountSmallDogs] = useState(0)
	const [amountMediumDogs, setAmountMediumDogs] = useState(0)
	const [amountLargeDogs, setAmountLargeDogs] = useState(0)
	const [amountCats, setAmountCats] = useState(0)
	const [amountSmallAnimals, setAmountSmallAnimals] = useState(0)

	const totalPets = () => {
		let smallDogs = ''
		let mediumDogs = ''
		let largeDogs = ''
		let cats = ''
		let smallAnimals = ''
		smallDogs = amountSmallDogs + 'small dogs'
		mediumDogs = amountMediumDogs + 'medium dogs'
		largeDogs = amountLargeDogs + 'large dogs'
		cats = amountCats + 'cats'
		smallAnimals = amountSmallAnimals + 'small animals'
		let total =
			amountSmallDogs +
			amountMediumDogs +
			amountLargeDogs +
			amountCats +
			amountSmallAnimals +
			' pet(s)'
		return total
	}

	return (
		<Box height="100%" background={colors.light} style={styles.container}>
			<HStack
				alignItems="center"
				justifyContent="space-between"
				style={styles.containerDivider}
			>
				<VStack>
					<Text style={styles.subtitle}>Small dog</Text>
					<Text style={styles.description}>0-10kg</Text>
				</VStack>
				<HStack alignItems="center" space={3}>
					<Button
						onPress={() => {
							if (amountSmallDogs > 0) {
								setAmountSmallDogs(amountSmallDogs - 1)
							}
						}}
						bg={amountSmallDogs > 0 ? colors.purple[700] : colors.grey[300]}
					>
						<Ionicons name="ios-remove" size={24} color={colors.light} />
					</Button>
					<Text style={filter.counter}>{amountSmallDogs}</Text>
					<Button
						onPress={() => {
							setAmountSmallDogs(amountSmallDogs + 1)
						}}
						bg={colors.purple[700]}
					>
						<Ionicons name="ios-add" size={24} color={colors.light} />
					</Button>
				</HStack>
			</HStack>
			<HStack
				alignItems="center"
				justifyContent="space-between"
				style={styles.containerDivider}
			>
				<VStack>
					<Text style={styles.subtitle}>Medium size dog</Text>
					<Text style={styles.description}>10-25kg</Text>
				</VStack>
				<HStack alignItems="center" space={3}>
					<Button
						onPress={() => {
							if (amountMediumDogs > 0) {
								setAmountMediumDogs(amountMediumDogs - 1)
							}
						}}
						bg={amountMediumDogs > 0 ? colors.purple[700] : colors.grey[300]}
					>
						<Ionicons name="ios-remove" size={24} color={colors.light} />
					</Button>
					<Text style={filter.counter}>{amountMediumDogs}</Text>
					<Button
						onPress={() => {
							setAmountMediumDogs(amountMediumDogs + 1)
						}}
						bg={colors.purple[700]}
					>
						<Ionicons name="ios-add" size={24} color={colors.light} />
					</Button>
				</HStack>
			</HStack>
			<HStack
				alignItems="center"
				justifyContent="space-between"
				style={styles.containerDivider}
			>
				<VStack>
					<Text style={styles.subtitle}>Large dog</Text>
					<Text style={styles.description}>{'>'}25kg</Text>
				</VStack>
				<HStack alignItems="center" space={3}>
					<Button
						onPress={() => {
							if (amountLargeDogs > 0) {
								setAmountLargeDogs(amountLargeDogs - 1)
							}
						}}
						bg={amountLargeDogs > 0 ? colors.purple[700] : colors.grey[300]}
					>
						<Ionicons name="ios-remove" size={24} color={colors.light} />
					</Button>
					<Text style={filter.counter}>{amountLargeDogs}</Text>
					<Button
						onPress={() => {
							setAmountLargeDogs(amountLargeDogs + 1)
						}}
						bg={colors.purple[700]}
					>
						<Ionicons name="ios-add" size={24} color={colors.light} />
					</Button>
				</HStack>
			</HStack>
			<HStack
				alignItems="center"
				justifyContent="space-between"
				style={styles.containerDivider}
			>
				<VStack>
					<Text style={styles.subtitle}>Cat</Text>
					<Text style={styles.description}>All kind of cats</Text>
				</VStack>
				<HStack alignItems="center" space={3}>
					<Button
						onPress={() => {
							if (amountCats > 0) {
								setAmountCats(amountCats - 1)
							}
						}}
						bg={amountCats > 0 ? colors.purple[700] : colors.grey[300]}
					>
						<Ionicons name="ios-remove" size={24} color={colors.light} />
					</Button>
					<Text style={filter.counter}>{amountCats}</Text>
					<Button
						onPress={() => {
							setAmountCats(amountCats + 1)
						}}
						bg={colors.purple[700]}
					>
						<Ionicons name="ios-add" size={24} color={colors.light} />
					</Button>
				</HStack>
			</HStack>
			<HStack
				alignItems="center"
				justifyContent="space-between"
				style={styles.containerDivider}
			>
				<VStack>
					<Text style={styles.subtitle}>Small animal</Text>
					<Text style={styles.description}>Rabbit, bird, hamster...</Text>
				</VStack>
				<HStack alignItems="center" space={3}>
					<Button
						onPress={() => {
							if (amountSmallAnimals > 0) {
								setAmountSmallAnimals(amountSmallAnimals - 1)
							}
						}}
						bg={amountSmallAnimals > 0 ? colors.purple[700] : colors.grey[300]}
					>
						<Ionicons name="ios-remove" size={24} color={colors.light} />
					</Button>
					<Text style={filter.counter}>{amountSmallAnimals}</Text>
					<Button
						onPress={() => {
							setAmountSmallAnimals(amountSmallAnimals + 1)
						}}
						bg={colors.purple[700]}
					>
						<Ionicons name="ios-add" size={24} color={colors.light} />
					</Button>
				</HStack>
			</HStack>
			<Button
				style={[styles.button]}
				onPress={() => {
					let total = totalPets()
					console.log(totalPets)
					navigation.navigate('Filter', {
						service: route.params.service,
						location: route.params.location,
						dates: route.params.dates,
						pets: total,
					})
				}}
			>
				<Text style={styles.buttonText}>Save pet(s)</Text>
			</Button>
		</Box>
	)
}
