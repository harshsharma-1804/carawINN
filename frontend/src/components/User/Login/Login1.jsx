import { NavLink, useNavigate } from "react-router-dom"
export default function Login1(){

    const navigate = useNavigate();

  // Function to handle the "Next" button click and navigate to /signin/authenticate
    const navigateToAuthenticate = () => {
      navigate('/authenticate');
    };

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
                        <form className="w-full h-full">
                            <div className="w-full my-5">
                                <p className="py-1 font-medium">Email/Phone</p>
                                <input type="email" className="w-full pl-2" placeholder="Please enter your email or phone"/>
                            </div>
                            <div className="flex w-full my-5 justify-between">
                                <NavLink to="/register"><p className="font-medium">Create Account</p></NavLink>
                                <button onClick={navigateToAuthenticate} className="bg-red-800 rounded-lg w-20 text-white"><p className="m-1">Next</p></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}