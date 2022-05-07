import User from "./PetSitter"

export default interface Review {
	id: string
    name: string
    profilePic: string
	rating: number
	text: string
    date: Date | number | string
}