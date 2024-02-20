import {Link, NavLink, useParams} from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop"

export default function FleetCard(props) {
    useScrollToTop();

    return(
            <div className="relative mx-auto my-20 h-120 w-70 rounded-2xl bg-body-primary">
                <div className="w-full h-2/5">
                    <img src="https://sites.create-cdn.net/siteimages/32/5/6/325619/15/5/9/15593488/2000x1369.jpg?1498739776" className="rounded-t-xl mx-auto mt-3 w-0.9"/>
                </div>
                <div className="rounded-2xl w-full h-3/5">
                    <div className="m-2">
                        <p className=" text-2xl pb-2">{props.heading}</p>
                        <p>{props.content}Phasellus sit amet dui quis purus tristique convallis. Vestibulum sit amet orci sed justo rhoncus tristique. Vivamus vel leo felis. Integer cursus faucibus elit,     </p>
                    </div>
                    <div className="absolute bottom-5 grid justify-items-center w-full">
                        <NavLink to={`/fleets/${props.title}`}>
                            <button className="rounded-md bg-red-800 h-10 w-40 mx-auto"><p className="text-xs text-white font-semibold">Explore Rides</p></button>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}