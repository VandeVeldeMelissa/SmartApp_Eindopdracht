import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './screens/AppNavigation'
import { NativeBaseProvider, Box, extendTheme } from 'native-base'
import {
	useFonts,
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from '@expo-google-fonts/quicksand'
import AppLoading from 'expo-app-loading'
import colors from './styles/colors'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'
import { statement, transaction } from './utils/db'

import { LogBox } from 'react-native'
LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])
LogBox.ignoreAllLogs()

const theme = extendTheme({ colors: colors.theme.colors })

export default function App() {
	const generateAppTablePetSitters = async (): Promise<void> => {
		console.log('generate app table')
		const tx: SQLTransaction = await transaction()
		const response: SQLResultSet | void = await statement(
			tx,
			'CREATE TABLE IF NOT EXISTS petsitters (id integer primary key autoincrement, firstName text NOT NULL, lastName text NOT NULL, description text NOT NULL, profilePic text, location text NOT NULL, rating real, priceStay real, priceDayCare real, priceHomeVisits real, priceDogWalking real, priceHouseSitter real, allowSmallDog integer, allowMediumDog integer, allowLargeDog integer, allowCats integer, allowSmallAnimal integer, hasChildren integer, hasPets integer, hasGarden integer)',
		).catch((err) => console.log(err)) //no booleans in SQLite => integer 0 = false & 1 = true

		const txPetSitters: SQLTransaction = await transaction()
		const resultPetSitters: SQLResultSet = await statement(
			txPetSitters,
			'SELECT * FROM petsitters',
		)
		console.log(resultPetSitters.rows._array)
		console.log(resultPetSitters)
		if (resultPetSitters.rows._array.length == 0) {
			//Insert into petsitters
			const tx4: SQLTransaction = await transaction()
			const insert1 = await statement(
				tx4,
				'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'Aram',
					'Vanlerberghe',
					'Hi everybody... My name is Aram! Im 23 years old and I would love to babysit your pet! I dont have any pets myself anymore but I do have a lot of experience with dogs, rabbits, hamsters and birds.',
					'https://images.unsplash.com/photo-1535812859-6bfd2f132e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
					'Moorsele',
					4.7,
					15,
					13,
					10,
					7,
					17,
					1,
					1,
					1,
					1,
					1,
					0,
					0,
					1,
				],
			)
			const tx5: SQLTransaction = await transaction()
			const insert2 = await statement(
				tx5,
				'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'Lydia',
					'Carver',
					'Hey hey! My name is Lydia and I would love to help you take care of your dog! I work at a dog hair saloon and love all dogs big and small. I have a small cute dog Sam and he is really gentle with other dogs and my little girl Emily :)',
					'https://images.unsplash.com/photo-1528113535984-1e3bb158e388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
					'Kortrijk',
					3.3,
					16,
					13,
					10,
					undefined,
					undefined,
					1,
					1,
					1,
					0,
					0,
					1,
					1,
					0,
				],
			)
			const tx6: SQLTransaction = await transaction()
			const insert3 = await statement(
				tx6,
				'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'James',
					'Smith',
					'Yoooo sup bro, Im James and Im totally new here but I love cats and reptiles. So if you need a hand you know where to find me.',
					'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
					'Roeselare',
					undefined,
					undefined,
					9,
					9,
					undefined,
					18,
					0,
					0,
					0,
					1,
					1,
					0,
					1,
					1,
				],
			)
			const tx7: SQLTransaction = await transaction()
			const insert4 = await statement(
				tx7,
				'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'David',
					'Taylor',
					'I love absolutely love all small animals. I have multiple rabbits, guinea pigs and hamsters. I would love to help you with you cute litte pet! ',
					undefined,
					'Kortrijk',
					3,
					5,
					3,
					5,
					undefined,
					undefined,
					0,
					0,
					0,
					0,
					1,
					0,
					1,
					1,
				],
			)
		}
	}

	const generateAppTableReviews = async () => {
		const tx2: SQLTransaction = await transaction()
		const response2: SQLResultSet | void = await statement(
			tx2,
			'CREATE TABLE IF NOT EXISTS reviews (id integer primary key autoincrement, name text NOT NULL, description text, rating real, date text, userId text NOT NULL, FOREIGN KEY(userId) REFERENCES petsitters(id))',
		).catch((err) => console.log(err))

		const txReviews: SQLTransaction = await transaction()
		const resultReviews: SQLResultSet = await statement(
			txReviews,
			'SELECT * FROM reviews',
		)
		console.log(resultReviews.rows._array)
		console.log(resultReviews)
		if (resultReviews.rows._array.length == 0) {
			// Insert into reviews
			const tx7: SQLTransaction = await transaction()
			const insert4 = await statement(
				tx7,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'Eva Schrijvers',
					'Took really good care of my dog, I defnitly recommend him!',
					5,
					'01/05/2022',
					'1',
				],
			)
			const tx8: SQLTransaction = await transaction()
			const insert5 = await statement(
				tx8,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[undefined, 'Bjorn Van Acker', 'Really nice dude.', 4, '02/05/2022', '1'],
			)
			const tx9: SQLTransaction = await transaction()
			const insert6 = await statement(
				tx9,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'Maria Westhoven',
					'Such a sweetiepie! Reminds me of my grandson. Thank you for taking care of my little Nero :)',
					4,
					'04/05/2022',
					'1',
				],
			)
			const tx10: SQLTransaction = await transaction()
			const insert7 = await statement(
				tx10,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'Eva Schrijvers',
					'Not the best experience, but definitly not the worst either.',
					3,
					'07/05/2022',
					'2',
				],
			)
			const tx11: SQLTransaction = await transaction()
			const insert8 = await statement(
				tx11,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[undefined, 'Bjorn Van Acker', undefined, 3, '03/04/2022', '2'],
			)
			const tx12: SQLTransaction = await transaction()
			const insert9 = await statement(
				tx12,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[
					undefined,
					'Maria Westhoven',
					'Nice girl, but she gave my dog way to much cookies.',
					4,
					'02/01/2022',
					'2',
				],
			)
			const tx13: SQLTransaction = await transaction()
			const insert10 = await statement(
				tx13,
				'INSERT INTO reviews (id, name, description, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?)',
				[undefined, 'Yannick Schalck', undefined, 3, '07/05/2022', '4'],
			)
		}

		// DELETE TABLE
		// const txDropTable: SQLTransaction = await transaction()
		// const droptable = await statement(txDropTable, 'DROP TABLE reviews') // DELETE TABLE

		// Test data table
		const r: SQLResultSet | void = await statement(
			tx2,
			'SELECT * FROM reviews',
		).catch((err) => console.log(err))
		console.log('result: ', r)
	}

	useEffect(() => {
		generateAppTablePetSitters()
		generateAppTableReviews()
		
	}, [])

	let [fontsLoaded] = useFonts({
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<NativeBaseProvider theme={theme}>
				<Box flex={1}>
					<NavigationContainer theme={colors.basictheme}>
						<SafeAreaProvider>
							<StatusBar style="auto" />
							<AppNavigation />
						</SafeAreaProvider>
					</NavigationContainer>
				</Box>
			</NativeBaseProvider>
		)
	}
}
