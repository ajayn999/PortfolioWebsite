import React from 'react'
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
// import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons"
import { FaLinkedinIn, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-purple-800">AJAY PARIHAR</h3>
                <p className="text-lg font-normal text-gray-400">
                    Front End Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+91 9173541990</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">ajaypariharn@gamil.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont text-base font-bold text-purple-800 mb-4">CONNECT ME IN</h2>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/mr-ajay-pariharn/" target="_blank" rel="noreferrer" className="bannerIcon">
                        <p className='text-white hover:text-purple-800'><FaLinkedinIn /></p>


                    </a>
                    <a href='https://github.com/ajayn999/' target="_blank" rel="noreferrer" className="bannerIcon pb-2">
                        <p className='text-white hover:text-purple-800'><FaGithubSquare /></p>
                    </a>
                    <a href='https://www.crio.do/learn/portfolio/ajaypariharn/' target="_blank" rel="noreferrer" className="bannerIcon pb-2">
                        <p className='text-white hover:text-purple-800'><TiSocialGithub /></p>
                    </a>
                    <a href='https://twitter.com/ajaypariharn' target="_blank" rel="noreferrer" className="bannerIcon pb-2">
                        <p className='text-white hover:text-purple-800'><FaTwitter /></p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft