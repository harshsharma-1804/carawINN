import { NavLink, Outlet } from "react-router-dom"

export default function Dashboard(){
    const path = window.location.pathname;
    if(path==="/dashboard"){
        window.location.href = "/dashboard/profile";
    }
    return(
        <div>
            <div className="flex flex-wrap">
                <div className="relative w-0.2 h-160 bg-red-200 pt-5">
                    <div className="flex flex wrap">
                        <div>
                            &#9654;<br/>
                            &#9654;<br/>
                            &#9654;
                        </div>
                        <div>
                            <NavLink to="profile">Profile</NavLink><br/>
                            <NavLink to="yourrides">Your Rides</NavLink><br/>
                            <NavLink to="paymenthistory">PaymentHistory</NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-0.8 h-160 bg-blue-200 overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}