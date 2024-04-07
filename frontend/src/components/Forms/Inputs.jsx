import { useId } from "react";

function CityInput(
    {label,
    className="",
    classNameInput="",
    placeholder,
    selectCity="",
    onCityChange,
    cityOptions=[]}
){

    const cityId = useId();
    return (
        <div className={`flex bg-white bg-opacity-40 rounded-lg ${className}`}>
            <div className="relative m-2">
                <label htmlFor={cityId} className="absolute left-2 text-sm font-semibold">{label}</label>
                <input
                type="text" 
                className={`px-5 pt-6 h-10 w-60 bg-transparent rounded-lg ${classNameInput}`}
                placeholder={placeholder}
                
                onChange={(e) => onCityChange && onCityChange(e.target.value)} />
            </div>
            <div>
                <select
                    className=" bg-transparent text-black my-4 mx-2 cursor-pointer outline-none"
                    value={selectCity}
                    onChange={(e)=> onCityChange && onCityChange(e.target.value)}
                >
                    {cityOptions.map((city)=>(
                        <option value={city} key={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            
        </div>
    );
}

function DateInput({label, className="", placeholder, onDateChange,classNameInput=""}){
    const dateId = useId();
    return (
        <div className={`relative bg-white bg-opacity-40 rounded-lg p-1 ${className}`}>
            <label className="absolute left-2 text-sm font-semibold">{label}</label>
            <input
                type="date"
                className={`px-5 pt-6 h-10 w-60 bg-transparent rounded-lg ${classNameInput}`}
                placeholder={placeholder}
                onChange={(e) => onDateChange && onDateChange(e.target.value)}
            />
        </div>
    );
}

export {CityInput, DateInput};