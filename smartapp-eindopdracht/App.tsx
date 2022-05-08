import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
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

const theme = extendTheme({ colors: colors.theme.colors })

export default function App() {
	const generateAppTable = async (): Promise<void> => {
		const tx: SQLTransaction = await transaction()
		// const response: SQLResultSet | void = await statement(
		// 	tx,
		// 	'CREATE TABLE IF NOT EXISTS petsitters (id integer primary key autoincrement, firstName text NOT NULL, lastName text NOT NULL, description text NOT NULL, profilePic text, location text NOT NULL, rating real, priceStay real, priceDayCare real, priceHomeVisits real, priceDogWalking real, priceHouseSitter real, allowSmallDog integer, allowMediumDog integer, allowLargeDog integer, allowCats integer, allowSmallAnimal integer, hasChildren integer, hasPets integer, hasGarden integer)',
		// ).catch((err) => console.log(err)) //no booleans in SQLite => integer 0 = false & 1 = true

		// const response: SQLResultSet | void = await statement(
		// 	tx,
		// 	'CREATE TABLE IF NOT EXISTS reviews (id integer primary key autoincrement, name text NOT NULL, description text, profilePic text, rating real, date text, userId text NOT NULL, FOREIGN KEY(userId) REFERENCES petsitters(id))',
		// ).catch((err) => console.log(err))

		const tx2: SQLTransaction = await transaction()
		// Insert into petsitters
		// const insert = await statement(tx2, 'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [undefined, 'Aram', 'Vanlerberghe', 'Hi everybody... My name is Aram! Im 23 years old and I would love to babysit your pet! I dont have any pets myself anymore but I do have a lot of experience with dogs, rabbits, hamsters and birds.', "https://images.unsplash.com/photo-1535812859-6bfd2f132e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 'Moorsele', 4.7, 15, 13, 10, 7, 17, 1, 1, 1, 1, 1, 0, 0, 1])
		// console.log({insert})

		// const insert2 = await statement(tx2, 'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [undefined, 'Lydia', 'Carver', 'Hey hey! My name is Lydia and I would love to help you take care of your dog! I work at a dog hair saloon and love all dogs big and small. I have a small cute dog Sam and he is really gentle with other dogs and my little girl Emily :)', "https://images.unsplash.com/photo-1528113535984-1e3bb158e388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", 'Kortrijk', 3.3, 16, 13, 10, undefined, undefined, 1, 1, 1, 0, 0, 1, 1, 0])
		// console.log({insert2})

		// const insert3 = await statement(tx2, 'INSERT INTO petsitters (id, firstName, lastName, description, profilePic, location, rating, priceStay, priceDayCare, priceHomeVisits, priceDogWalking, priceHouseSitter, allowSmallDog, allowMediumDog, allowLargeDog, allowCats, allowSmallAnimal, hasChildren, hasPets, hasGarden) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [undefined, 'James', 'Smith', 'Yoooo sup bro, Im James and Im totally new here but I love cats and reptiles. So if you need a hand you know where to find me.', "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 'Roeselare', undefined, undefined, 9, 9, undefined, 18, 0, 0, 0, 1, 1, 0, 1, 1])
		// console.log({insert3})

		//Insert into reviews
		// const insert = await statement(tx2, 'INSERT INTO reviews (id, name, description, profilePic, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?, ?)', [undefined, 'Eva Schrijvers', 'Took really good care of my dog, I defnitly recommend him!', "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 5, "01/05/2022", "1"])

		// const insert2 = await statement(tx2, 'INSERT INTO reviews (id, name, description, profilePic, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?, ?)', [undefined, 'Bjorn Van Acker', 'Really nice dude.', "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", 4, "02/05/2022", "1"])

		// const insert3 = await statement(tx2, 'INSERT INTO reviews (id, name, description, profilePic, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?, ?)', [undefined, 'Maria Westhoven', 'Such a sweetiepie! Reminds me of my grandson. Thank you for taking care of my little Nero :)', "https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 4, "04/05/2022", "1"])

		// const insert4 = await statement(tx2, 'INSERT INTO reviews (id, name, description, profilePic, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?, ?)', [undefined, 'Eva Schrijvers', 'Not the best experience, but definitly not the worst either.', "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 3, "07/05/2022", "2"])

		// const insert5 = await statement(tx2, 'INSERT INTO reviews (id, name, description, profilePic, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?, ?)', [undefined, 'Bjorn Van Acker', undefined, "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", 3, "03/04/2022", "2"])

		// const insert6 = await statement(tx2, 'INSERT INTO reviews (id, name, description, profilePic, rating, date, userId) VALUES (?, ?, ?, ?, ?, ?, ?)', [undefined, 'Maria Westhoven', 'Nice girl, but she gave my dog way to much cookies.', "https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 4, "02/01/2022", "2"])

		// DELETE TABLE
		// const droptable = await statement(tx2, 'DROP TABLE reviews') // DELETE TABLE

		const r: SQLResultSet | void = await statement(
			tx2,
			'SELECT * FROM reviews',
		).catch((err) => console.log(err))
		console.log(r)
	}

	useEffect(() => {
		generateAppTable()
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
