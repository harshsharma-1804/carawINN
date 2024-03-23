import {createContext,useContext,useEffect,useState}  from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({children}) => {
    const [isSticky, setSticky] = useState(false);
    
    useEffect(() => {
        const handlescroll = () => {
            setSticky(window.scrollY > 120);
        };

        window.addEventListener('scroll', handlescroll);

        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    });

    const contextValue = {
        isSticky
    };

    return(
        <HeaderContext.Provider value={contextValue}>
            {children}
        </HeaderContext.Provider>
    )
}

export const useHeader = () => {
    return useContext(HeaderContext);
}
