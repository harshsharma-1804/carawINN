import React, { useState, useEffect } from 'react';
import RideData from '../Data/RideData.json'
import { useParams } from 'react-router-dom';

function useAutoImage(db) {
    const {id} = useParams()
    const [data,setData] = useState({})
    
    const [currentIndex, setCurrentIndex] = useState(0);
     // Add your image filenames here

    useEffect(()=>{
            setData(db[id-1])
    },[id])
    

    useEffect(() => {
      const images = data.image || []
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // Change background every 5 seconds (adjust as needed)

      return () => clearInterval(intervalId);
    });

    const autoimage = data.image && data.image[currentIndex];
    return autoimage;

}

export default useAutoImage;