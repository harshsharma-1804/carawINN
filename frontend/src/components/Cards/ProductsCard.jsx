import {Link, NavLink} from 'react-router-dom';
import { Suspense } from 'react';
import Button from '../Button/Button.jsx';
import useScrollToTop from '../../hooks/useScrollToTop';



export default function ProductCard(props) {
    useScrollToTop();
    
    return (
        <div className="relative border-2 rounded-3xl h-100 w-74 mx-5 my-5  hover:transition transform hover:scale-110 duration-300">
            <div className="absolute top-3 bg-white rounded-t-2xl h-60 w-70 mx-2.5">
                <Suspense fallback={<div>Loading...</div>}>
                    <img src={props.image} alt="van" className="h-60 w-70 rounded-t-2xl " />
                </Suspense>
            </div>
            <div className="absolute bottom-3 bg-white rounded-b-2xl h-30 w-70 mx-2.5">
                <div className="absolute top-1 left-2 flex w-65 justify-between">
                    <div className="w-40 font-semibold">{props.title}</div>
                    <div className="mr-2">
                        <p> <span className="font-semibold">$ {props.price}</span></p>
                        <p className="text-xs absolute right-2">per night</p>
                    </div>
                </div>
                <div  className="absolute bottom-3 left-2 flex w-65 justify-between text-">
                    <div className="text-white">
                        <NavLink to={`bookride/${props.id}`}>
                            <Button className="" content = "Book Now"/>
                        </NavLink>
                    </div>
                    <div className="mr-2">
                        <p className="text-xl"> <span className="text-2xl">&#9733;</span> {props.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}