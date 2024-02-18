import { NavLink } from "react-router-dom"
import Header from "./Header"

export default function Register(){
    return(
        
        <div className="relative h-max w-full">
            <div className='absolute top-0 left-0 bg-black h-full w-full'/>
            <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='h-full w-full transform scale-x-[-1] opacity-50'/>
            <div className="absolute top-0 h-full w-full">
                <Header />
                <div className="flex justify-center items-center h-0.9">
                    <div className="grid grid-cols-1 justify-items-center bg-white bg-opacity-70 p-10 rounded-lg h-max w-120">
                        <p className="mx-auto text-2xl font-semibold h-fit"> Create Account</p>
                        <form>
                            <div className="mb-5">
                                <p className=" font-medium text-sm">Full Name</p>
                                <input type="text" placeholder="Name" className="w-full pl-1"/>
                            </div>
                            <div className="my-5">
                                <p className=" font-medium text-sm">Email/Phone</p>
                                <input type="email" placeholder="Email" className="w-full pl-1"/>
                            </div>
                            <div className="flex justify-between my-5">
                                <div className="mr-2">
                                <p className=" font-medium text-sm">Password</p>
                                <input type="password" placeholder="Password" className=" pl-1"/>
                                </div>
                                <div className="ml-2">
                                <p className=" font-medium text-sm">Confirm Password</p>
                                <input type="password" placeholder="Confirm Password" className=" pl-1"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between pt-5">
                            <NavLink to="/signin"><p className="font-medium text-sm pt-1">Already have an account?</p></NavLink>
                            <NavLink to="authenticate"> <button className="bg-red-900 text-white w-20 rounded-lg"><p className="m-1">Register</p></button></NavLink>
                            </div>
                        </form>
                        <p className="text-lg font-semibold mt-5">OR</p>
                        <div className="flex flex-wrap justify-between w-3/5 m-5">
                            <NavLink><img className="h-10 w-10" src="https://lh3.googleusercontent.com/8v_oGMOj9bgohn50RgLhJ8XGZ2kIUdr0RG4zCkIYnfjK24ORS0WFaTWmnzxXzagUg2fwAmDy1W_Y4oTtIacT2dhQzAqOy5H9Vg23Rq1oVnhUGtOynjY"/></NavLink>
                            <NavLink><img className="h-8 w-8" src="https://th.bing.com/th?id=OSK.0a0142ba838f808962b476ba0dd54ae8&w=46&h=46&c=3&rs=1&qlt=80&o=6&dpr=1.4&pid=SANGAM"/></NavLink>
                            <NavLink><img className="h-8 w-8" src="https://th.bing.com/th?id=ODLS.45f25068-5b96-4c9e-86a3-99b9f949ac29&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"/></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}