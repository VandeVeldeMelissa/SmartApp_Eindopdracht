export default interface Review {
	id: string
	name: string
	description: string
	rating: number
	date: Date | number | string
	userId: string
}
