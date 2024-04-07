import Fleet from '../Fleet/Fleet';
import Reviews from '../Reviews/Review';
import DataGetForm from '../Forms/DataGetForm';
import Button from '../Button/Button';
import { useHeader } from '../../context/HeaderContext';
import { useEffect,useState } from 'react';


export default function Home(){
    // const {isSticky} = useHeader(false);

    return(
        <>
            <div className="relative h-160 w-full mb-60">
                <div className='absolute top-0 left-0 flex flex-wrap bg-black h-180 w-full'/>
                <img src="https://www.practicalcaravan.com/wp-content/uploads/2020/07/CVN_Advert_13297_Advertorial_Image2.jpg" className='h-180 w-full transform scale-x-[-1] opacity-80'/>
                <div className='absolute top-0 left-0 flex flex-wrap h-170 w-full'>
                    <div className="flex w-1/2 h-full">
                        <div className='relative my-auto ml-10 h-1/2 text-white'>
                                <p className='text-8xl font-semibold'>&ldquo; Travel In</p>
                                <p className=' mt-10 ml-20 text-3xl font-semibold'>your home on WHEELS &rdquo;</p>
                                <div className='my-20 mx-10 flex items-center'>
                                    <DataGetForm classNameInput="focus:outline-none "/>
                                    <Button className="scale-x-[-1] w-10 h-10" content={<i className='fa-solid fa-magnifying-glass'/>}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fleet" className=''>
                <div><p className="text-5xl font-semibold ml-10">Fleet</p></div>
                <Fleet/>
            </div>
            <div className=''>
            <Reviews />
            </div>
        </>
    )
}