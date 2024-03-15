import Fleet from '../Fleet/Fleet';
import Reviews from '../Reviews/Review';
import { useHeader } from '../../context/HeaderContext';
import { useEffect } from 'react';
export default function Home(){
    // const {isSticky} = useHeader(false);

    return(
        <>
            <div className="relative h-160 w-full mb-60">
                <div className='absolute top-0 left-0 flex flex-wrap bg-black h-180 w-full'/>
                <img src="https://www.twowanderingsoles.com/wp-content/uploads/2021/07/Van2BLife2BQ26A2BSunset2BCheers.jpg" className='h-180 w-full transform scale-x-[-1] opacity-50'/>
                <div className='absolute top-0 left-0 flex flex-wrap h-170 w-full opacity-100'>
                    <div className="flex w-1/2 h-full">
                        <div className='relative my-auto mx-auto h-1/2 text-white'>
                                <p className='text-9xl font-semibold'>&ldquo; Travel In</p>
                                <p className=' mt-10 ml-20 text-5xl font-semibold'>your home on WHEELS &rdquo;</p>
                                <a href='#fleet'><button className='absolute bottom-10 left-20 w-40 h-10 rounded-lg bg-footer-primary text-red-900 text-xl font-semibold'>Explore</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fleet">
                <div><p className="text-5xl font-semibold ml-10">Fleet</p></div>
                <Fleet/>
            </div>
            <div className='overflow-x-hidden'>
            <Reviews />
            </div>
        </>
    )
}