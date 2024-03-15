import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink,useNavigate } from "react-router-dom"
import { login2Thunk } from "../../../Thunks/user.thunks.js"
export default function LoginPage2(){

    const userName = useSelector(state => state.User.user.fullName);
    const userEmail = useSelector(state => state.User.user.email);
    const [Error,setError] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!password) {
            setError('Please enter your password');
        }else{
            try {
                const userData = await dispatch(login2Thunk(userEmail,password));
                if (userData) {
                    navigate('/')
                }
                
            } catch (error) {
                console.error('Validation Failed: ', error);
                setError('Password Incorrect');
            }
        }
    }


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
                        <p className="pb-2 text-2xl font-semibold w-full">{userName}</p>
                        <p className="pb-2 text-base font-medium w-full">Please Authenticate yourself</p>
                        <form onSubmit={handleSubmit} className="w-full h-full pt-12">
                        <div className="w-full my-5">
                            <p className="py-1 font-medium">Pasword</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-2" placeholder="Please enter your password"/>
                        </div>
                        <div className="flex w-full my-5 justify-between">
                            <NavLink to=""><p className="font-medium">Forgot Password?</p></NavLink>
                            <button type="submit" className="bg-red-800 rounded-lg w-20 text-white"><p className="m-1">Sign In</p></button>
                        </div>
                        {/* <div className="flex w-full justify-between my-5">
                            <NavLink><p>Forgot Password</p></NavLink>
                            <button className="bg-red-800 rounded-lg w-20 text-white">Sign In</button>
                        </div> */}
                        </form>
                        {Error && <p className="font-bold text-red-800">{Error} !!</p>}
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}