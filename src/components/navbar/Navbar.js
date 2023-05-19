import React from 'react'
import { Link } from 'react-scroll';
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';




const Navbar = () => {
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div className="">
                <h1 style={{color:'#6b21a8', fontWeight: 900, fontSize:'25px'}}>MyPortfolio.</h1>
            </div>
            
            <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                {
                    navLinksdata.map(({ _id, title, link }) => (
                        <li className="text-base font-bold text-gray-400 tracking-wide cursor-pointer hover:text-purple-800 duration-300"
                            key={_id}>
                            {/* react-scroll is applied to to scroll down! */}
                            <Link 
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >{title}</Link>
                        </li>
            ))
                }
        </ul>
        </div >
    )
}

export default Navbar
