import Review from "./Review"

export default interface PetSitter {
    id: string
    firstName: string
    lastName: string
    profilePic: string
    location: string
    description: string
    rating: number
    priceStay: number
    priceDayCare: number
    priceHomeVisits: number
    priceDogWalking: number
    priceHouseSitter: number
    allowSmallDog: boolean
    allowMediumDog: boolean
    allowLargeDog: boolean
    allowCats: boolean
    allowSmallAnimal: boolean
    hasChildren: boolean
    hasPets: boolean
    hasGarden: boolean
}