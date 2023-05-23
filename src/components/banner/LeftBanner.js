import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaLinkedinIn, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";

const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ["Front-End Software Developer.", "ReactJS Developer.", "Backend Developer.", "Coder."],
        loop: true,
        typeSpeed: 90,
        deleteSpeed: 30,
        delaySpeed: 2000,
    });
    // const IconFont = createFromIconfontCN({
    //     scriptUrl: [
    //         '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    //         '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    //     ],
    // });

    return (
        <>
            <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className="text-lg font-normal">WELCOME NICE TO MEET YOU</h4>
                    <h1 className="text-6xl font-bold text-white">
                        Hi, I'm {" "}
                        <span className='text-purple-800 capitalize'>Ajay Parihar</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>

                        {/* simple react type writer */}

                        a <span style={{color:'#6b21a8'}}>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#6b21a8"
                        />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
                        <p>Professionally connected with the web development industry.</p>
                        <p>Problem solver, Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
                    </p>
                    <a className="px-0" href='https://drive.google.com/file/d/1ozPg9EnLXNfpxAarrpvLfwrpRmEtgroh/view' download="AjayParihar.pdf">
                        <button class=" rounded-md bg-rose-500 hover:bg-purple-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg class="text-white fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span className='text-white'>Resume/CV</span>
                        </button>
                    </a>
                </div>
                <div className='flex flex-col lgl:flex-row gap-6 lgl:gap-0 justify-between'>
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-3">
                            CONNECT ME IN
                            {/* github crio linkdin  */}
                        </h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/mr-ajay-pariharn/" target="_blank" rel="noreferrer" className="bannerIcon">
                                <p className='text-white hover:text-purple-800'><FaLinkedinIn /></p>


                            </a>
                            <a href='https://github.com/ajayn999/'target="_blank" rel="noreferrer" className="bannerIcon pb-2">
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
                    {/* <div>
                        <h2 className="text-base uppercase font-titleFont mb-3">
                            BEST SKILL ON
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                            
                            <span className="bannerIcon">
                                <SiNextdotjs />
                            </span>
                            
                            <span className="bannerIcon">
                                <IconFont type="icon-java" />
                            </span>
                            <span className="bannerIcon">
                                <ConsoleSqlOutlined />
                            </span>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default LeftBanner
