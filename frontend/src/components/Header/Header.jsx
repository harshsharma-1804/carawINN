import {Link, NavLink,useNavigate} from "react-router-dom";
import { useHeader } from "../../context/HeaderContext";
import {useSelector,useDispatch} from "react-redux";
import { logoutThunk } from "../../Thunks/user.thunks";

const Header = () => {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
    const {isSticky} = useHeader();

    const isLoggedIn = useSelector((state) => state.User.isUserLoggedIn);
    // const userName = useSelector(state => state.User.user.data);
    // const user = useSelector((state) => state.User.user);
    const dispatch = useDispatch();
    // const {isSticky} = useHeader();
    const navigate = useNavigate();

    const redirectToLogin= () => {
        sessionStorage.setItem('redirectURL', window.location.pathname);
        console.log('redirectURL', window.location.href);
        navigate('user/signin');
    }
    
    const handleFunction = () =>{
        if(!isLoggedIn){
            redirectToLogin();
        }else{
            dispatch(logoutThunk());
        }
    }

    return (
        <header className={`top-0 left-0 right-0 z-50 p-1 ${isHomePage ? 'fixed' : 'sticky bg-white'} ${isHomePage ? isSticky ? 'bg-white text-black' : 'text-white': 'text-black'} transition duration-300`}>
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
                            // to="user/signin"
                            onClick={handleFunction}
                            className=" hover:text-orange-700 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                {isLoggedIn? <i className="fa-regular fa-circle-user"/>: 'Sign In'}
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