import Header from "./Header";
import Login1 from "./Login1";
import Login2 from "./Login2";
import useAutoImage from "../../../hooks/useAutoImage";
import RideData from "../../../Data/RideData.json"

function SignIn(){
    return(
        <>  
            <div className="relative h-max w-full">
                <div className='absolute top-0 left-0 bg-black h-full w-full'/>
                <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='h-full w-full transform scale-x-[-1] opacity-50'/>
                <div className="absolute top-0 h-full w-full">
                    <Header />
                    <Login1 />
                </div>
            </div>
        </>
    )
}   

function Auth(){
    return(
        <>
            <div className="relative h-max w-full">
                <div className='absolute top-0 left-0 bg-black h-full w-full'/>
                <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='h-max w-max transform scale-x-[-1] opacity-50'/>
                <div className="absolute top-0 h-full w-full">
                    <Header />
                    <Login2 />
                </div>
            </div>
        </>
    )
}

export { SignIn, Auth };