import React from 'react'
import Title from '../layouts/Title'

import { projectOne, projectTwo, projectThree, projectfive, projectsix, projectfour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-block"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="GEEKTRUST ADMIN-UI (GOLD MEMBER)"
                    des="
                    Geektrust admin UI challege  built in ReactJS It is an interface for admins to see and delete users."
                    src={projectOne}
                    src1="https://github.com/ajayn999/React-Admin-UI-web"
                    src2="https://adminuiajayp.netlify.app/"
                />
                <ProjectsCard
                    title="xFlix VideoSharing"
                    des="XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos."
                    src={projectTwo}
                    src1="https://github.com/ajayn999/VideoSharing-Xflix-frontend"
                    src2="https://xfilx-frontend-ajay.netlify.app/"
                />
                <ProjectsCard
                    title="Qkart E-commerce"
                    des="QKart is an e-commerce application offering a variety of products for customers to choose from."
                    src={projectThree}
                    src1="https://github.com/ajayn999/QkartFrontend-React-Ecommerce"
                    src2="https://qkart-frontend-ajay.netlify.app/"
                />
                <ProjectsCard
                    title="Xboard News"
                    des="XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard."
                    src={projectfour}
                    src1="https://github.com/ajayn999/Xboard-NewsFeed-Website"
                    src2="https://ajaypxboard.netlify.app/"
                />
                <ProjectsCard
                    title="Admin-CRM"
                    des="Admin CRM software website is for admin to updation for all details."
                    src={projectfive}
                    src1="https://github.com/ajayn999/AdminCRM"
                    src2="https://admincrmsoftware.netlify.app/"
                />
                <ProjectsCard
                    title="Qtrip travel website "
                    des="QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. "
                    src={projectsix}
                    src1="https://github.com/ajayn999/Qtrip-Dynamic-JavaScript-Project"
                    src2="https://ajaypdynamic.netlify.app/"
                />
                
            </div>
        </section>
    );
}

export default Projects
