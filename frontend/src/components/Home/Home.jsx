import Fleet from '../Fleet/Fleet';
import Reviews from '../Reviews/Review';
export default function Home(){
    return(
        <>
            <div className="relative h-160 w-full mb-25">
                <div className='absolute top-0 left-0 flex flex-wrap bg-black h-160 w-full'/>
                <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='h-160 w-full transform scale-x-[-1] opacity-50'/>
                <div className='absolute top-0 left-0 flex flex-wrap h-160 w-full opacity-100'>
                    <div className="flex w-1/2 h-full">
                        <div className='relative my-auto mx-auto h-1/2 text-white'>
                                <p className='text-9xl font-semibold'>&ldquo; Travel In</p>
                                <p className=' mt-10 ml-20 text-5xl font-semibold'>your home on WHEELS &rdquo;</p>
                                <a href='#fleet'><button className='absolute bottom-10 left-20 w-40 h-10 rounded-lg bg-footer-primary text-red-900 text-xl font-semibold'>Explore</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div id="fleet"><p className="text-5xl font-semibold ml-10">Fleet</p></div>
                <Fleet/>
            </div>
            <Reviews />
        </>
    )
}