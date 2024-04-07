import {Link, NavLink, useParams} from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop"
import Button from "../Button/Button";

export default function FleetCard(props) {
    useScrollToTop();
    return(
            <div className="outline outline-double outline-stone-800 outline-offset-4 relative mx-auto my-20 h-100 w-70 rounded-2xl bg-body-4 text-white shadow-2xl shadow-slate-500">
                <div className="w-full h-2/5">
                    <img src={props.image} className="saturate-200  h-full mx-auto mt-3 w-0.9 hover:scale-110 hover:rounded-t-2xl translate ease-out duration-300"/>
                </div>
                <div className="rounded-2xl mt-5 w-full h-3/5">
                    <div className="m-2">
                        <p className=" text-2xl pb-2 font-bold text-orange-100 drop-shadow-2xl">{props.heading}</p>
                        <p>{props.content}</p>
                    </div>
                    <div className="absolute bottom-5 grid justify-items-center w-full">
                        <NavLink to={`/fleets/${props.title}`}>
                            <Button className="w-40 h-10 font-semibold !bg-blue-300 !text-blue-900 !font-bold hover:!bg-blue-200" content="Explore Rides"/>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}