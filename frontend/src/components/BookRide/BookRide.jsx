import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import BookRidePage from "./BookRidePage"
import RideData from "../../Data/RideData.json"
import FleetData from "../../Data/FleetData.json"
import useAutoImage from "../../hooks/useAutoImage"
import useScrollToTop from "../../hooks/useScrollToTop"



function CreateBookRide() {
    useScrollToTop()
    
    const { id, _title } = useParams();
    const [ridedata, setData] = useState({})  
    useEffect(() => {
        setData(RideData[id-1])
    }, [id, _title])
    // console.log(ridedata)

    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const images = ridedata.image || []
    //     const intervalId = setInterval(() => {
    //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 4000); // Change background every 5 seconds (adjust as needed)
  
    //     return () => clearInterval(intervalId);
    //   });
  
    //   const autoimage = ridedata.image && ridedata.image[currentIndex];

   
    
    return (
        <>
            <BookRidePage 
            image= {useAutoImage(RideData)}
            title={ridedata.title}
            subTitle={ridedata.subTitle}
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