import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function ScrollToTopPage(){
    const location = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location.pathname])

    return null;
}

export default ScrollToTopPage;