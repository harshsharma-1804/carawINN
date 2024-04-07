import linkedinLogo from '/src/assets/linkedin.svg';
import tweetLogo from '/src/assets/twitter.svg'
import youtubeLogo from '/src/assets/youtube.svg'
import whatsAppLogo from '/src/assets/whatsapp.svg'
import facebookLogo from '/src/assets/facebook.svg'
import instagramLogo from '/src/assets/instagram.svg'
import {Link, NavLink} from 'react-router-dom';

export default function Footer(props) {
    return (
        <footer className="footer relative h-65 bg-body-5 text-body-4 bg-opacity-80">
            <div className='flex flex-wrap justify-between mx-10 border-b border-b-slate-500'>
                <div className='mx-20 my-20'>
                    <Link to="/">
                        <p className='text-6xl'>caraw<span className='text-red-900'>INN</span></p>
                    </Link>
                </div>
                <div className='flex my-auto mr-15'>
                    <div className='mx-10'>
                        <p className='text-xl font-semibold pb-2'>Company</p>
                        <ul className='font-light text-base'>
                            <li className='w-fit hover:font-normal'><NavLink>About</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Investors</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Partners</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Careers</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className='mx-10'>
                        <p className='text-xl font-semibold pb-2'>Discover</p>
                        <ul className='font-thin text-base'>
                            <li className='w-fit hover:font-normal'><NavLink>Home</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Packages</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Services</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Products</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className='mx-10'>
                    <p className='text-xl font-semibold pb-2'>Follow Us</p>
                        <div className='grid grid-rows-2 grid-cols-2'>
                        {/* <img src="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.8562-6/275949698_3248957128655833_369430323747988984_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=kmnNJys5n2cAX-NdJQ3&_nc_ht=scontent.fdel27-5.fna&oh=00_AfCAaPot6Gjy5fEhQDM9jwsu7D_k-IuIfMclJlL2Xp_vJA&oe=660E2EEE" alt="facebooklogo" className=' grid-item h-6 w-6 mx-2 my-2' /> */}
                        <img src={facebookLogo} alt="facebooklogo" className=' grid-item h-6 w-6 mx-2 my-2' />
                        <img src="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.8562-6/313408032_676073764084474_9080563414774037997_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=jR19S_LvqOgAX8ItNI-&_nc_ht=scontent.fdel27-5.fna&oh=00_AfAffaPm-3EMtm3MH4_aFnnyKOMhgSuGXBkcQhz49lhMEA&oe=660E24E6" alt="instagramlogo" className=' grid-item h-6 w-6 mx-2 my-2' />
                        <img src={tweetLogo} alt="teeterlogo" className=' grid-item h-6 w-6 mx-2 my-2' />
                        <img src={whatsAppLogo} alt="whatsapplogo" className="grid-item h-6 w-6 mx-2 my-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-10 my-3 text-xs flex flex-wrap">
                    <span > &copy;2024 carawINN Ltd.</span>
                    <span>
                    <ul className='flex flex-wrap list-disc ml-5'>
                        <li className='mx-5 underline hover:no-underline'><NavLink>Privacy Policy</NavLink></li>
                        <li className='underline hover:no-underline'><NavLink>Terms & Conditions</NavLink></li>
                    </ul></span>
            </div>
        </footer>
    );
}