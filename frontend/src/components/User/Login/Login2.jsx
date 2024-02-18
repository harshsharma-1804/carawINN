import { NavLink } from "react-router-dom"

export default function Login2(){
    return(
        <>
            <div className="flex flex-wrap h-0.9 w-full">
            <div className="mx-auto my-auto relative h-100 w-160">
                <div className='bg-white rounded-2xl h-full w-full opacity-60'/>
                <div className='absolute top-0 left-0 flex flex-wrap justify-between rounded-2xl h-full w-full'>
                    <div className="flex w-1/2 h-full">
                        <img src="https://th.bing.com/th/id/OIP.SzzKGbfC2HvoreYobR4aggAAAA?rs=1&pid=ImgDetMain" className="rounded-2xl mx-auto my-auto h-4/5 w-4/5"/>
                    </div>

                    <div className="grid grid-cols-1 justify-items-center content-center w-1/2 h-full pr-10">
                        <p className="pb-2 text-2xl font-semibold w-full">Hello!</p>
                        <p className="pb-2 text-2xl font-semibold w-full">Harsh Vardhan Sharma</p>
                        <p className="pb-2 text-base font-medium w-full">Please Authenticate yourself</p>
                        <form className="w-full h-full pt-12">
                        <div className="w-full my-5">
                            <p className="py-1 font-medium">Pasword</p>
                            <input className="w-full pl-2" placeholder="Please enter your password"/>
                        </div>
                        <div className="flex w-full my-5 justify-between">
                            <NavLink to=""><p className="font-medium">Forgot Password?</p></NavLink>
                            <button  className="bg-red-800 rounded-lg w-20 text-white"><p className="m-1">Sign In</p></button>
                        </div>
                        {/* <div className="flex w-full justify-between my-5">
                            <NavLink><p>Forgot Password</p></NavLink>
                            <button className="bg-red-800 rounded-lg w-20 text-white">Sign In</button>
                        </div> */}
                        </form>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}