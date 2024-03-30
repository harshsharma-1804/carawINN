import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { NavLink,useNavigate,useLocation } from "react-router-dom"
import { login1Thunk } from "../../../Thunks/user.thunks.js"
import Button from "../../Button/Button.jsx";

// 

export default function LoginPage1(){
    const error = useSelector(state => state.User.error);

    const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()


    // const handleRegisterRedirect = () => {
    //     // Store the current page's URL in session storage
    //     sessionStorage.setItem('prevPath', location.pathname);
    
    //     // Redirect the user to the login page
    //     navigate('user/signup');
    //   };

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            const userData = await dispatch(login1Thunk(email));
            if (!userData) {
                throw new Error('User not found');
            }

            navigate('/user/authenticate');
        } catch (error) {
          console.error('Login Failed: ', error);
          // Handle login failure (show error message, etc.)
        }
    }

    return (
        <div className="flex flex-wrap h-0.9 w-full">
            <div className="mx-auto my-auto relative h-100 w-160">
                <div className='bg-white rounded-2xl h-full w-full opacity-60'/>
                <div className='absolute top-0 left-0 flex flex-wrap justify-between rounded-2xl h-full w-full'>
                    <div className="flex w-1/2 h-full">
                        <img src="https://th.bing.com/th/id/OIP.SzzKGbfC2HvoreYobR4aggAAAA?rs=1&pid=ImgDetMain" className="rounded-2xl mx-auto my-auto h-4/5 w-4/5"/>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center content-center w-1/2 h-full pr-10">
                        <p className="pb-5 text-3xl font-semibold">Sign In</p>
                        <div className="flex flex-wrap justify-between w-3/5 m-5">
                            <NavLink><img className="h-10 w-10" src="https://lh3.googleusercontent.com/8v_oGMOj9bgohn50RgLhJ8XGZ2kIUdr0RG4zCkIYnfjK24ORS0WFaTWmnzxXzagUg2fwAmDy1W_Y4oTtIacT2dhQzAqOy5H9Vg23Rq1oVnhUGtOynjY"/></NavLink>
                            <NavLink><img className="h-8 w-8" src="https://th.bing.com/th?id=OSK.0a0142ba838f808962b476ba0dd54ae8&w=46&h=46&c=3&rs=1&qlt=80&o=6&dpr=1.4&pid=SANGAM"/></NavLink>
                            <NavLink><img className="h-8 w-8" src="https://th.bing.com/th?id=ODLS.45f25068-5b96-4c9e-86a3-99b9f949ac29&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"/></NavLink>
                        </div>
                        <p className="text-lg font-semibold">OR</p>
                        <form onSubmit={handleLogin} className="w-full h-full">
                            <div className="w-full my-5">
                                <p className="py-1 font-medium">Email</p>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-2" placeholder="Please enter your email"/>
                                {/* <p className="py-1 font-medium">Pasword</p>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-2" placeholder="Please enter your password"/> */}
                            </div>
                            <div className="flex w-full my-5 justify-between">
                                <NavLink to="/user/signup"  /*onClick={handleRegisterRedirect}*/><p className="font-medium">Create Account</p></NavLink>
                                <Button content="Next" className="w-20 font-semibold"/>
                            </div>
                        </form>
                        {error && <p className="font-bold text-red-800">{error} !!</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}