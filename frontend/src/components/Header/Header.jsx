import React from "react";
import {Link, NavLink,useLocation,useNavigate} from "react-router-dom";
import { useHeader } from "../../context/HeaderContext";

const Header = () => {

    const {isSticky} = useHeader();
    const location = useLocation();
    const navigate = useNavigate();

    // const prevPath = sessionStorage.getItem('prevPath');

    // const handleLoginRedirect = () => {
    //     // Store the current page's URL in session storage
    //     sessionStorage.setItem('prevPath', location.pathname);
    
    //     // Redirect the user to the login page
    //     navigate('user/signin');
    //   };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 p-1 ${isSticky ? "bg-white text-black" : "bg-transparent text-white"} transition duration-300`}>
            <nav className={`border-gray-200 px-4 lg:px-6 py-2.5`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className='mx-2 my-2'>
                        <Link to="/">
                            <p className={`text-2xl font-semibold`}>caraw<span className='text-red-900'>INN</span></p>
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3  ${isActive? "text-orange-700":"inherit"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/fleets"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3  ${isActive? "text-orange-700":"inherit"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >   
                                    Book Ride
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                            to="user/signin"
                            className=" hover:text-orange-700 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign In
                            </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;