import { Link } from "react-router-dom"

export default function Header(){
    return( 
        <div className="flex flex-wrap justify-between">
            <div>
                <div className='mt-10 ml-10'>
                    <Link to="/">
                        <p className='text-4xl font-semibold text-white'>caraw<span className='text-red-900'>INN</span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}