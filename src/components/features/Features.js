import React from 'react'
import {SiCss3,SiJavascript,SiReact,SiMongodb } from "react-icons/si";
import {DiNodejs } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <section
      id='features'
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="My Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="HTML"
          des="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
          icon={<AiFillHtml5 />}
        />
        <Card
          title="CSS"
          des="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web."
          icon={<SiCss3/>}
        />
        <Card
          title="JAVASCRIPT"
          des="JavaScript is a text-based programming language that you can use from server-side and client-side in applications."
          icon={<SiJavascript />}
        />
        <Card
          title="REACTJS"
          des="React is a free and open-source front-end JavaScript library for building user interfaces based on components."
          icon={<SiReact />}
        />
        <Card
          title="NODEJS"
          des="Node.js is a cross-platform, open-source server environment that is use for create server-side web applications"
          icon={<DiNodejs />}
        />
        <Card
          title="MONGODB"
          des="MongoDB is a source-available cross-platform document-oriented database program."
          icon={<SiMongodb />}
        />
      </div>
    </section>
  )
}

export default Features
