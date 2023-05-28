import "./profile.css"
import abodhimage from "../../images/abodh.jpg";
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin, FaFileDownload,FaNodeJs } from 'react-icons/fa';
import { SiReact, SiGithub, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiMysql } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';



const profile=()=>{
     return (
        <div>

        
        <div className="header-head">
          <div className="my-name">
               <h4>Abodh.Shah</h4>
          </div>
          <div className="home-about-projects-contact">
            <div>
                <h4> <li><a href="home">Home</a></li></h4>
            </div>
            <div>
                <h4>        <li><a href="about">About</a></li></h4>
            </div>
            <div>
                <h4>        <li><a href="projects">Projects</a></li></h4>
            </div>
            <div>
                <h4>        <li><a href="contact">Contact</a></li></h4>
            </div>

          </div>
        </div>
        <div className="main-header">
          <div className="study">

          
           <div className="education-certificate">
               <h3>Education</h3>
               <div  className="10th">
                      10th  <a href="https://drive.google.com/file/d/1Obc5Ub66IpjG85k33H4tkxCrkIDFjtcM/view?usp=sharing" download> see me </a>
               </div>
               <div className="12th">
                     12th   <a href="https://drive.google.com/file/d/1TzL0m4JVNIADYQ98BHxvfxceMXngXOxX/view?usp=sharing" download>see me</a>
               </div>
               <div className="Btech">
                     B.Tech  <a href="https://drive.google.com/file/d/1Cn1UUfJRW1XLLw21U2pvAZqzKB-WaZQP/view?usp=sharing" download>see me</a>
               </div>

           </div>
           <div  className="course-certificate">
               <h3>Certificates</h3>
               <div className="dsa">
                    Data structure and algorithms  <a href="https://ninjasfiles.s3.amazonaws.com/certificate155847451993c64296668e85d57662898753c26.pdf" download> see mee</a>
               </div>
               <div className="web-developement">
                 web development <a href="https://www.udemy.com/certificate/UC-b0a987ed-c60d-4e19-976e-0f3fb56496f5/" download>see me</a>
               </div>
           </div>
        </div>
           <div className="main-header-content">
              <div className="full-stack-with-icon">
                   <div>
                      <h1>FULL STACK DEVELOPER</h1>
                   </div>
                   <div>
                      
                   </div>
              </div>
              <div  className="about-me">
                 <p1>
                    Hi,I'm Abodh Shah . A passionate Full-Stack
                    Developer <br></br>based in Delhi,India
                 </p1>
              </div>
              <div className="linkdin-github-leetcode">
                 <div>
                    <a href="https://leetcode.com/Abodh5921/" download>
                      <SiLeetcode  size={25}/>
                    </a>
                 </div>
                 <div>
                    <a href="https://github.com/ABODHKUMAR" download>
                    <BsGithub size={25}/>
                    </a>
                   
                 </div>
                 <div>
                    <a href="https://www.linkedin.com/in/abodh-44605a209/" download>
                    < FaLinkedin size={25}/>
                    </a>
                 </div>
                 <div>
                    <a href="https://drive.google.com/file/d/10OCzlTAroyRCd2QunpAU92LnMbLS0R-o/view?usp=sharing" download>
                   
                    <FaFileDownload size={25}/>
                    </a>
                 </div>
              </div>
             
                <div className="education">
                    <a href="https://nust.edu.pk/" > Netaji subhas university of technology      BTech            ECE</a>
                    <a href="https://schools.org.in/west-delhi/07070105702/govt-sarvodaya-vidyalaya-b-4-paschim-vihar-new-delhi.html">Govt. Sarvodaya Vidyalaya, B-4, Paschim Vihar, New Delhi     12th      Science   </a>
                </div>

                <div className="tech-stack">
                    <h3> Tech : Stack </h3>
                    <div> <FaNodeJs size={25} />    </div>
                    <div> <SiReact size={25} />    </div>
                    <div> <SiGithub size={25} />   </div>
                    <div> <SiHtml5  size={25}/>    </div>
                    <div>  <SiCss3 size={25} />    </div>
                    <div>  <SiJavascript size={25} />   </div>
                    <div>  <SiMongodb size={25} />      </div>
                    <div>  <SiMysql  size={25}/>        </div>
                   </div>
           </div>
           <div className="my-photo-section">
               
              <img src={abodhimage} className="my-photo"></img>
           </div>

        </div>
     </div>
    )
}
export default profile