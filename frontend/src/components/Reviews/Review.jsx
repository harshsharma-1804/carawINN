import ReviewCard from "../Cards/ReviewCard";

export default function Reviews(){
    return(
        <>
            <div><p className="text-5xl font-semibold m-10">User Diaries</p></div>
            <div className="flex flex-wrap justify-between h-100 w-full overflow-x-hidden text-white">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            </div>
        </>
            
    )
}