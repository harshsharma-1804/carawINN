import Reviews from "../Reviews/Review"

export default function BookRidePage(props) {

    return (
        <div className="">
            <div className="flex flex-wrap justify-between justify-center">
                <div className="h-150 w-5/12 mx-10 my-12 ">
                    <img src={props.image} alt="van" className={`h-150 w-max rounded-3xl`} />
                </div>
                <div className="h-150 w-6/12 mr-10 my-12">
                    <div className="h-30">
                        <p className="text-4xl mb-2">{props.title}</p>
                        <p>{props.subTitle}</p>
                    </div>
                    <div className="relative bg-body-primary w-0.95 my-8 h-90 mx-auto rounded-3xl">
                        <div className="absolute flex flex-wrap m-5 ml-10">
                            <div className="">
                                <div className="relative m-2">
                                    <label className="absolute left-2 top-1 text-sm">From</label>
                                    <input className="h-12 w-100 border border-gray-300 pt-2 pl-12" placeholder="Delhi"/>
                                </div>
                                <div className="relative m-2">
                                    <label className="absolute left-2 top-1 text-sm">To</label>
                                    <input className="h-12 w-100 border border-gray-300 pt-2 pl-12" placeholder="Bombay"/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="relative m-2">
                                    <label className="absolute left-1 top-1 text-xs">Departure</label>
                                    <input className="h-12 w-40 border border-gray-300 pt-4 pl-1 "/>
                                </div>
                                <div className="relative m-2">
                                    <label className="absolute left-1 top-1 text-xs">Return</label>
                                    <input className="h-12 w-40 border border-gray-300 pt-4 pl-1 "/>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 flex flex-wrap justify-between h-1/3 w-full rounded-b-3xl">
                            <div className="h-full w-fit ml-8 mt-5">
                                <input type="checkbox" /><label className="ml-2">Would like to avail driving assistant</label><br/>
                                <input type="checkbox" /><label className="ml-2">Include fuel and service charges</label><br/>
                                <input type="checkbox" /><label className="ml-2">Include road side assistances</label><br/>
                            </div>
                            <div className="flex h-full w-1/3 rounded-ee-3xl"><button className="rounded-md bg-red-800 h-8 w-25 mx-auto my-auto"><p className="text-xs text-white font-semibold">Cost Breakdown</p></button></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap h-25">
                        <div className="flex h-full w-1/2">
                        <button className="rounded-md bg-red-800 h-10 w-28 ml-5 mt-auto"><p className="text-xs text-white font-semibold">Checkout</p></button>
                        <button className="rounded-md bg-red-800 h-10 w-28 ml-5 mt-auto"><p className="text-xs text-white font-semibold">Add to Wishlist</p></button>
                        </div>
                        <div className="relative h-full w-1/2 text-right pt-8 pr-5">
                            <p className="text-4xl mb-5">$ <span>497.</span><span className="text-lg">72</span></p>
                            <p className="absolute bottom-0 right-5 w-fit border-t border-green-800">inc. of all taxes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap bg-body-primary w-0.98 mx-auto my-5 font-semibold">
                <div className="relative mx-auto my-40 h-100 w-70 rounded-2xl">
                    <div className="h-full w-full rounded-2xl pt-12 bg-white">
                    happy
                    </div>
                    <div className="flex absolute top-2 rounded-2xl w-full">
                        <p className=" text-2xl border-b border-gray-800 mx-auto">Amenities Inside</p>
                    </div>
                </div>
                <div className="relative mx-auto my-40 h-100 w-70 rounded-2xl">
                    <div className="h-full w-full rounded-2xl pt-12 bg-white">
                    </div>
                    <div className="flex absolute top-2 rounded-2xl w-full">
                        <p className=" text-2xl border-b border-gray-800 mx-auto">Base Breakdown</p>
                    </div>
                </div>
                <div className="relative mx-auto my-40 h-100 w-70 rounded-2xl">
                    <div className="h-full w-full rounded-2xl pt-12 bg-white">
                    </div>
                    <div className="flex absolute top-2 rounded-2xl w-full">
                        <p className=" text-2xl border-b border-gray-800 mx-auto">Addititonal Services</p>
                    </div>
                </div>
            </div>
            <div className='overflow-x-hidden'>
            <Reviews />
            </div>
        </div>
    )
}