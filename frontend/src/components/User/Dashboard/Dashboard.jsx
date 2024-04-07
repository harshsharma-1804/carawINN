import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"
import useScrollToTop from "../../../hooks/useScrollToTop";

export default function Dashboard(){
    useScrollToTop();

    const path = window.location.pathname;
    if(path==="dashboard"){
        window.location.href = "profile";
    }

    const isDashboard = window.location.pathname === '/dashboard';


    const isLoggedIn = useSelector((state) => state.User.isUserLoggedIn);
    const user = useSelector((state) => state.User.user.data);

    const [isActive1, setActive1] = useState(false  );
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);

    const handleNavLinkClick = (navLinkIndex) => {
        setActive1(navLinkIndex === 1);
        setActive2(navLinkIndex === 2);
        setActive3(navLinkIndex === 3);
    };

    return(
        <div>
            <div className="flex flex-wrap border-y-2">
                <div className="relative w-0.2 h-170 bg-body-4 pt-5 text-white">
                    <div className="flex gap-2 m-2">
                        <div>
                        {isActive1?(<i className="fa-solid fa-arrow-right"/>):""}<br/>
                        {isActive2?(<i className="fa-solid fa-arrow-right"/>):""}<br/>
                        {isActive3?(<i className="fa-solid fa-arrow-right"/>):""}
                        </div>
                        <div>
                            <NavLink to="profile"
                                    onClick={() => handleNavLinkClick(1)}
                            >Profile</NavLink><br/>
                            <NavLink to="yourrides"
                                    onClick={() => handleNavLinkClick(2)}
                            >Your Rides</NavLink><br/>
                            <NavLink to="paymenthistory"
                                    onClick={() => handleNavLinkClick(3)}
                            >PaymentHistory</NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-0.8 h-170 overflow-x-hidden">
                    {isLoggedIn? (isDashboard?<p className="text-6xl"> Hi, {user.fullName}</p> : <Outlet />):(<p className="text-4xl">Hey User, Login is required to see dashboard!!</p>)}
                </div>
            </div>
        </div>
    )
}