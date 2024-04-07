import { CityInput, DateInput } from './Inputs';
import Button from '../Button/Button';


function DataGetForm({className,classNameInput,classNameArrow}){
    const swap = () => {
        console.log('swapping');
    }
    return(
        <form className='flex flex-wrap gap-4 items-center'>
            <div className="grid grid-cols-1 justify-items-center">
                <CityInput placeholder="Delhi" className={className} classNameInput={`placeholder-white ${classNameInput}`} label="From"/>
                <div className=" h-1">
                <Button
                    className={`text-white -translate-y-1/2 rotate-90 rounded-none p-1 !bg-transparent !text-lg hover:scale-150 hover:bg-transparent  ${classNameArrow}`}
                    onClick={swap}
                    content={<i className="fa-solid fa-arrow-right-arrow-left"/>}
                />
                </div>
                <CityInput placeholder="Mumbai" className={className} classNameInput={`placeholder-white ${classNameInput}`} label="To"/>
            </div>
            <div>
                <DateInput className={`m-3 h-13 ${className}`} classNameInput= {classNameInput} label="Start"/>
                <DateInput className={`m-3 h-13 ${className}`} classNameInput={classNameInput} label="End"/>
            </div>
        </form>

    )
}

export default DataGetForm;