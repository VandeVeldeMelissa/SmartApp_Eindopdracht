export default interface Review {
	id: string
	name: string
	description: string
	profilePic: string
	rating: number
	date: Date | number | string
	userId: string
}
