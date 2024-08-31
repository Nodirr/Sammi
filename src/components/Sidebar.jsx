import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaFolderMinus } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GiLion } from "react-icons/gi";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Sidebar = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }
  return (
    <div>
      <div className="sidebar" id='top'>
      <ul className="menu">
        <h1>Sahifalar</h1>
        
        <li><a href="#"><FaHome /> Bosh Sahifa</a></li>
        <li><a href="#"><FaCode /> Kurslar</a></li>
        <li><a href="#"><LiaProjectDiagramSolid /> Loyihalar</a></li>
        <li><a href="#"><FaFolderMinus /> Kod manbalar</a></li>
        <li><a href="#"><IoSpeedometerOutline /> Profil</a></li>
        <h1>Startup</h1>
        <li><a href="#"><FaBlog /> Bloglar</a></li>
        <li><a href="#"><RiNextjsFill /> Next Js
        </a></li>
        <li><a href="#"><GiLion /> MERN Stack</a></li>
      </ul>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />

     <div className="btns1">
      <b><FaTelegram /></b>
      <b><FaInstagram /></b>
      <b><FaYoutube /></b>
      <b><FaLinkedin /></b>
      <b><FaGithub /></b>

     </div>
    </div>
    </div>
  )
}

export default Sidebar
