import {createContext,useContext,useEffect,useState}  from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({children}) => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            setSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handlescroll);

        const shouldBeSticky = window.location.pathname === 'http://localhost:5173/'; // Change '/some-page' to the path you want to make sticky
        setSticky(shouldBeSticky);

        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, []);

    return(
        <HeaderContext.Provider value={{isSticky}}>
            {children}
        </HeaderContext.Provider>
    )
}

export const useHeader = () => {
    return useContext(HeaderContext);
}
