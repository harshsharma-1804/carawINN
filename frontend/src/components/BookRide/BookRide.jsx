import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import BookRidePage from "./BookRidePage"
import RideData from "../Data/RideData.json"
import useAutoImage from "../../hooks/useAutoImage"

function CreateBookRide() {
    
    const { id } = useParams();
    const [data, setData] = useState({})  
    useEffect(() => {
        setData(RideData[id-1])
    }, [id])

    // if (!data) {
    //     return <div>Loading...</div>; // or handle loading state accordingly
    // }

    return (
        <>
            <BookRidePage 
            image= {useAutoImage()}
            title={data.title}
            subTitle={data.subTitle}
            />
        </>
    )
}


export default function BookRide(){
    return(
        <>
            <CreateBookRide />
        </>
    )
}