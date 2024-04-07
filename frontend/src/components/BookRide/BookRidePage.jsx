import Reviews from "../Reviews/Review"
import Button from "../Button/Button"
import Overlay from "../Overlay/Overlay"
import DataGetForm from "../Forms/DataGetForm.jsx"
import { useState } from "react"
import Profile from "../User/Dashboard/Profile.jsx"
import Login1 from "../User/Login/Login1.jsx"

export default function BookRidePage(props) {
    const [overlay, setOverlay] = useState(false)
    
    const handleShowOverlay = () => {
        setOverlay(true);
      };
    
    const handleCloseOverlay = () => {
       setOverlay(false);
    };

    const content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium tristique justo in pharetra. Curabitur mollis diam sit amet metus finibus, vitae pharetra justo vestibulum. Aenean erat dui, lobortis eu lacus at, pellentesque vestibulum sapien. Nulla facilisi. Nulla non ipsum efficitur, posuere orci ut, imperdiet dolor. Morbi fringilla rutrum sapien, vitae consequat tellus sodales vitae. In lacinia urna eget nisl porta tristique non non enim. Sed non lacus in arcu tempor lobortis. Donec sed purus lobortis, porttitor metus vel, pretium velit. Sed sem turpis, euismod eget dui a, pharetra sodales diam. Donec eget sapien nulla. Integer lobortis vulputate sem, a sollicitudin odio tristique ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium tristique justo in pharetra. Curabitur mollis diam sit amet metus finibus, vitae pharetra justo vestibulum. Aenean erat dui, lobortis eu lacus at, pellentesque vestibulum sapien. Nulla facilisi. Nulla non ipsum efficitur, posuere orci ut, imperdiet dolor. Morbi fringilla rutrum sapien, vitae consequat tellus sodales vitae. In lacinia urna eget nisl porta tristique non non enim. Sed non lacus in arcu tempor lobortis. Donec sed purus lobortis, porttitor metus vel, pretium velit. Sed sem turpis, euismod eget dui a, pharetra sodales diam. Donec eget sapien nulla. Integer lobortis vulputate sem, a sollicitudin odio tristique ac. "
    return (
        <div className="">
            {overlay && <Overlay onClose={handleCloseOverlay} className="text-xs text-green-900 font-bold">{content}</Overlay>}

            <div className="flex flex-wrap justify-between justify-center">
                <div className="h-150 w-5/12 mx-10 my-12 ">
                    <img src={props.image} alt="van" className={`h-150 w-max rounded-3xl`} />
                </div>
                <div className="h-150 w-6/12 mr-10 my-12">
                    <div className="h-30">
                        <p className="text-4xl mb-2">{props.title}</p>
                        <p>{props.subTitle}</p>
                    </div>
                    <div className="relative bg-body-4 w-0.95 my-8 h-90 mx-auto rounded-3xl">
                        <div className="absolute flex flex-wrap m-5 ml-10">
                            <div className="ml-7">
                                <DataGetForm className="bg-opacity-30" classNameArrow="" classNameInput="text-white"/>
                            </div>
                        </div>
                        <div className="absolute bottom-0 flex flex-wrap justify-between h-1/3 w-full rounded-b-3xl">
                            <div className="h-full w-fit ml-8 mt-5 text-white">
                                <input type="checkbox" className=""/><label className="ml-2">Would like to avail driving assistant</label><br/>
                                <input type="checkbox" className=""/><label className="ml-2">Include fuel and service charges</label><br/>
                                <input type="checkbox" className=""/><label className="ml-2">Include road side assistances</label><br/>
                            </div>
                            <div className="flex h-full w-1/3 rounded-ee-3xl">
                            <Button onClick={handleShowOverlay} className="m-auto !bg-white !text-blue-900 hover:!bg-red-200 font-semibold" content="Cost Breakdown"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap h-25">
                        <div className="flex h-full w-1/2">
                        <Button className="!bg-blue-900 text-white hover:!bg-red-300 hover:text-blue-900 ml-5 w-23 font-semibold mt-auto" content="Checkout"/>
                        <Button className="!bg-blue-900 text-white hover:!bg-red-300 hover:text-blue-900 ml-5 w-23 font-semibold mt-auto" content="Add to Wishlist"/>
                        </div>
                        <div className="relative h-full w-1/2 text-right pt-8 pr-5">
                            <p className="text-4xl mb-5">$ <span>497.</span><span className="text-lg">72</span></p>
                            <p className="absolute bottom-0 right-5 w-fit border-t border-gray-900">inc. of all taxes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap bg-body-5 w-0.98 mx-auto my-5 font-semibold">
                <div className="relative mx-auto my-40 h-100 w-70 rounded-2xl shadow-2xl border border-red-900 ring-red-200">
                    <div className="flex absolute top-2 rounded-2xl w-full">
                        <p className=" text-2xl border-b border-gray-800 mx-auto">Amenities Inside</p>
                    </div>
                    <div className="h-full w-full rounded-2xl pt-12 bg-white">
                    <ul className="list-decimal mx-10">
                        <li>Air Conditioning</li>
                        <li>26inches Television</li>
                        <li>120Ltr Refrigerator</li>
                        <li>Inside Washroom</li>
                        <li>King Size Bed</li>
                        <li>Music System</li>
                    </ul>
                    </div>
                </div>
                <div className="relative mx-auto my-40 h-100 w-70 rounded-2xl shadow-2xl border border-red-900 ring-red-200">
                    <div className="flex absolute top-2 rounded-2xl w-full">
                        <p className=" text-2xl border-b border-gray-800 mx-auto">Base Breakdown</p>
                    </div>
                    <div className="h-full w-full rounded-2xl pt-12 bg-white">
                    </div>
                </div>
                <div className="relative mx-auto my-40 h-100 w-70 rounded-2xl shadow-2xl border border-red-900 ring-red-200">
                    <div className="flex absolute top-2 rounded-2xl w-full">
                        <p className=" text-2xl border-b border-gray-800 mx-auto">Addititonal Services</p>
                    </div>
                    <div className="h-full w-full rounded-2xl pt-12 bg-white">
                    </div>
                </div>
            </div>
            <div className=''>
            <Reviews />
            </div>
        </div>
    )
}