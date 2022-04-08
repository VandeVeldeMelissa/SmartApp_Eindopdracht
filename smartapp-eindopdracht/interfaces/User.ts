import { ImageSourcePropType } from "react-native"
import { Path } from "react-native-svg"

export default interface User {
    id?: number
    firstName: string
    lastName: string
    profilePic: string
    location: string
    description: string
    priceWalk: number
    priceNight: number
    rating: number
}
  