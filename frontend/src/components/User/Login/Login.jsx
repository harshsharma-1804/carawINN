import Header from "./Header";
import LoginPage1 from "./Login1";
import LoginPage2 from "./Login2";

function Login1(){

    return(
        <>  
            <div className="relative h-max w-full">
                <div className='absolute top-0 left-0 bg-black h-full w-full'/>
                <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='w-full h-full transform scale-x-[-1] opacity-50'/>
                <div className="absolute top-0 h-full w-full">
                    <Header />
                    <LoginPage1 />
                </div>
            </div>
        </>
    )
}   

function Login2(){
    return(
        <>
            <div className="relative h-max w-full">
                <div className='absolute top-0 left-0 bg-black h-full w-full'/>
                <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='h-full w-full transform scale-x-[-1] opacity-50'/>
                <div className="absolute top-0 h-full w-full">
                    <Header />
                    <LoginPage2 />
                </div>
            </div>
        </>
    )
}

export { Login1, Login2 };