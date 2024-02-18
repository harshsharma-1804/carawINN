import {Link, NavLink, useParams} from "react-router-dom";

export default function ReviewCard(props) {
    
    return(
        <>
            <div className="relative flex flex-wrap mx-auto my-20 h-60 w-100 rounded-2xl bg-body-secondary font-semibold">
                <div className=" flex h-full w-1/2">
                    <img src="https://th.bing.com/th/id/OIP.SzzKGbfC2HvoreYobR4aggAAAA?rs=1&pid=ImgDetMain" className="rounded-s-2xl "></img>
                </div>
                <div className="h-full w-1/2">
                    <div className="h-5/6 w-0.98 mt-2 p-2 text-sm">
                        "<label>em. Mauris molestie massa justo, vitae iaculis diam condimentum sit amet. Curabitur ut augue a elit porttitor aliquam. Mauris viverra dignissim mollis. Cras ut dictum tortor. Integer vitae libero eget sapien </label>"
                    </div>
                    <div className="absolute h-1/6 w-max p-2 text-xs"><p className=" border-t border-black">Harsh Vardhan Sharma</p></div>
                </div>
            </div>
        </>
    )
}