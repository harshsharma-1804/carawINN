import { useParams } from "react-router-dom"
import BookRidePage from "./BookRidePage"
import ProductData from "../Products/Products.json"

function createBookRide() {
    const { id } = useParams()
    const product = ProductData.find((p) => p.id === id)
    return (
        <BookRidePage />
    )
}

export default function BookRide(){
    return(
        <>
            <BookRidePage />
        </>
    )
}