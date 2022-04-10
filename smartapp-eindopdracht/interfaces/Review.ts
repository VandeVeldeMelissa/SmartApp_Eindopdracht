import User from "./User"

export default interface Review {
	id: string
    name: string
    profilePic: string
	rating: number
	text: string
    date: Date | number | string
}