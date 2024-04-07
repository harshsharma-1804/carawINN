function YourRideCard() {
    return (
        <div className=" rounded-2xl grid grid-cols-3 grid-rows-1 bg-body-4/[0.1] h-1/3 w-0.9 mx-auto my-14">
            <img className="rounded-lg m-auto h-0.8 w-0.8 bg-red-200"/>
            <div className="my-8 grid grid-col gap-10">
                <div>
                    <p className="text-3xl">Ride Title</p>
                    <p>TRN: 123bt1431234Y</p>
                </div>
                <div className="flex justify-between">
                <div><label className="mr-5">Source</label>to<label className="ml-5">Destination</label></div>
                <p>Round Trip</p>
                </div>
                <p>$ 784.57</p>
            </div>
            <div className="flex flex-col justify-between items-end m-8">
                <span className="text-xl">status &#9654;</span>
                <p>Assistant: Not Opted</p>
            </div>
        </div>
    );
}

export default YourRideCard;