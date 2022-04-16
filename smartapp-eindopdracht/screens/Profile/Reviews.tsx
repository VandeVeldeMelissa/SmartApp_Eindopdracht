import { Box, HStack } from 'native-base'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import ReviewCard from '../../components/ReviewCard'
import Review from '../../interfaces/Review'
import User from '../../interfaces/User'
import styles from '../../styles'
import colors from '../../styles/colors'

export default ({ user }: { user: User }) => {
	const testReviews: Review[] = [
		{
			id: '1',
			name: 'Aram Vanlerberghe',
			profilePic:
				'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
			rating: 5,
			text: 'Very friendly, very nice; would recommend 10/10!',
			date: '10/04/2022',
		},
		{
			id: '2',
			name: 'Yannick Schalck',
			profilePic:
				'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			rating: 3,
			text: 'jeh jeh',
			date: '19/04/2022',
		},
	]

    const renderReview = ({ item }: { item: Review }) => (
		<ReviewCard item={item} key={item.id} />
	)

	const averageScore = () => {
		let average = 0
		if (testReviews.length != 0) {
			for (let i = 0; i < testReviews.length; i++) {
				average += testReviews[i].rating
			}
			average = average / testReviews.length
		}
		return average.toFixed(1)
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
					<Text style={styles.largeText}>{averageScore()}</Text>
					<StarRating
						disabled={true}
						maxStars={5}
						rating={4}
						fullStarColor={colors.rating}
						emptyStarColor={colors.grey[300]}
						starSize={20}
					/>
					<Text style={styles.largeText}>{testReviews.length} reviews</Text>
				</HStack>
				<FlatList
                    style={styles.list}
                    data={testReviews}
                    renderItem={renderReview}
                    keyExtractor={(item) => item.id}
			/>
			</Box>
		</View>
	)
}
