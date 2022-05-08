import { Box, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import ReviewCard from '../../components/ReviewCard'
import Review from '../../interfaces/Review'
import styles from '../../styles'
import colors from '../../styles/colors'
import PetSitter from '../../interfaces/PetSitter'
import { statement, transaction } from '../../utils/db'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'

export default ({ route, petSitter }: { route: any; petSitter: PetSitter }) => {
	console.log(route.params)
	const testReviews: Review[] = [
		{
			id: '1',
			name: 'Aram Vanlerberghe',
			userId: '6',
			profilePic:
				'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
			rating: 5,
			description: 'Very friendly, very nice; would recommend 10/10!',
			date: '10/04/2022',
		},
		{
			id: '2',
			name: 'Yannick Schalck',
			userId: '6',
			profilePic:
				'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			rating: 3,
			description: 'jeh jeh',
			date: '19/04/2022',
		},
		{
			id: '3',
			name: 'Melissa Van de Velde',
			userId: '6',
			profilePic:
				'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
			rating: 5,
			description: 'Perfect',
			date: '16/04/2022',
		},
	]

	const [reviews, setReviews] = useState<Review[]>([])

	const getReviews = async () => {
		const tx: SQLTransaction = await transaction()
		const result: SQLResultSet = await statement(
			tx,
			`SELECT * FROM reviews WHERE userId IS "${route.params.userid}" ORDER BY rating DESC`,
		)
		setReviews(result.rows._array)
	}

	useEffect(() => {
		getReviews()
	}, [])

	const renderReview = ({ item }: { item: Review }) => (
		<ReviewCard item={item} key={item.id} />
	)

	const renderResponseWhenNoReviews = () => {
		if (reviews.length == 0) {
			return (<Text style={styles.noResultsText}>No reviews (yet).</Text>)
		}
	}

	return (
		<View>
			<Box height="100%" marginTop={3}>
				<HStack
					space={4}
					alignItems="center"
					justifyContent="center"
					marginBottom={2}
				>
					<Text style={styles.largeText}>{route.params.rating}</Text>
					<StarRating
						disabled={true}
						maxStars={5}
						rating={route.params.rating}
						fullStarColor={colors.rating}
						emptyStarColor={colors.grey[300]}
						starSize={20}
					/>
					<Text style={styles.largeText}>{reviews.length} review(s)</Text>
				</HStack>
				{renderResponseWhenNoReviews()}
				<FlatList
					style={styles.list}
					data={reviews}
					renderItem={renderReview}
					keyExtractor={(item) => item.id}
				/>
			</Box>
		</View>
	)
}
