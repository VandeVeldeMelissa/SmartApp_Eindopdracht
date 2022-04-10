import Review from "./Review"

export default interface User {
    id: string
    firstName: string
    lastName: string
    profilePic: string
    location: string
    description: string
    priceWalk: number
    priceNight: number
    rating: number
    reviews?: any
}
  