import { useSelector } from "react-redux"
import { useState } from "react"
import Overlay from "../../Overlay/Overlay"
import pdf1 from "../../../resources/pdfs/Resume_SDE_1.5_np.pdf"
import pdf2 from "../../../resources/pdfs/2.What_is_regression.pdf"
import pdf3 from "../../../resources/pdfs/Form6_S24055O6N0702241200108.pdf.pdf"


export default function Profile(){
    const user = useSelector(state => state.User.user.data);

    const [overlay, setOverlay] = useState(false)
    const [eyeLink,setEyeLink] = useState('')
    
    const handleShowOverlay = (src) => {
        // const src = e.target.src
        setOverlay(true);
        setEyeLink(src)
      };
    
    const handleCloseOverlay = () => {
       setOverlay(false);
       setEyeLink("")
    };
    
    return(
        <div className="h-0.7 w-0.7 bg-body-4/[0.2] rounded-3xl">
            {overlay && <Overlay onClose={handleCloseOverlay} className="">{<embed src={eyeLink} type="application/pdf" className="h-full w-full" />}</Overlay>}
            <div className="grid grid-cols-3 grid-rows-2 m-2 h-full w-full">
                <img className="w-0.8 h-0.8 m-auto rounded-xl bg-blue-100"/>
                <div className="col-span-2 h-0.8 my-auto">
                    <p className="text-4xl font-semibold">{user.fullName}</p>
                    <p className="mt-5">{user.phone}</p>
                    <p>{user.email}</p>
                </div>
                <div className="mx-auto h-0.8 w-0.8">
                    <p className="text-2xl mb-2 font-semibold">Address</p>
                    <p className="">{user.address}</p>
                </div>
                <div className="mx-auto h-0.8 w-0.8 ">
                    <p className="text-2xl mb-2 font-semibold">Documents</p>
                    <p>Identity Proof<span className="cursor-pointer" onClick={() => handleShowOverlay(pdf1)}><i className="mx-2 fa-solid fa-eye text-xs"/></span></p>
                    <p>License<span className="cursor-pointer" onClick={() => handleShowOverlay(pdf2)}><i className="mx-2 fa-solid fa-eye text-xs"/></span></p>
                    <p>Verification<span className="cursor-pointer" onClick={() => handleShowOverlay(pdf3)}><i className="mx-2 fa-solid fa-eye text-xs"/></span></p>
                </div>
            </div>
        </div>
    )
}