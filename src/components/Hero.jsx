import React from 'react'
import "./Hero.css";
import myPhoto from '../assets/grad_pic.jpg';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import facebookW from '../assets/facebook-w.png';
import linkedinW from '../assets/linkedin-w.png'; 
import githubW from '../assets/github-w.png'; 
import emailW from '../assets/email-w.png';
import downloadW from '../assets/downloads.png';
import download from '../assets/downloads-w.png';
import resume from '../assets/Christian_Penticostes-Resume.pdf'

const Hero = () => {
  return (
    <div id="home" className="flex justify-center items-center lg:h-[calc(98dvh-10vh)] max-w-[1550px] mx-auto px-7 max-lg:mb-[30px]">
        <div className='flex gap-[55px] max-lg:flex-col max-lg:gap-[35px] max-md:gap-[35px] max-sm:mb-[30px]'>
            <div className='flex justify-center flex-col gap-5 max-lg:items-center max-lg:flex-row max-lg:order-2 max-md:order-2'>
                <img src={facebook} alt="Facebook" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("https://www.facebook.com/christian.penticostes.2024/", "_blank")} />
                <img src={facebookW} alt="Facebook" className="hidden dark:block w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("https://www.facebook.com/christian.penticostes.2024/", "_blank")} />

                <img src={linkedin} alt="LinkedIn" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/christian-penticostes-9a0246353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} />
                <img src={linkedinW} alt="LinkedIn White" className="hidden dark:block w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/christian-penticostes-9a0246353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} />

                <img src={github} alt="GitHub" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("https://github.com/Christian-Penticostes", "_blank")} />
                <img src={githubW} alt="GitHub White" className="hidden dark:block w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("https://github.com/Christian-Penticostes", "_blank")} />       

                <img src={email} alt="Email" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("mailto:pentichris0@gmail.com", "_blank")} />
                <img src={emailW} alt="Email White" className="hidden dark:block w-7 h-7 hover:scale-110 transition cursor-pointer" onClick={() => window.open("mailto:pentichris0@gmail.com", "_blank")} />
            </div>
            <div className='flex items-center max-lg:justify-center max-lg:mt-[80px] max-md:mt-[50px] max-lg:order-1 max-md:order-1'>
                <img src={myPhoto} alt="Christian" width={380} height={380} className="rounded-full object-cover"/>
            </div>
            <div className='flex items-start justify-center flex-col max-lg:items-center max-lg:order-3 max-md:order-3'>
                <div className="flex items-center gap-2 mb-3 max-md:mb-1">
                    <p className="dark:text-[#fafafa] text-sm" style={{ fontFamily: '"Poppins"' }}>Hi, Great to See You Here!</p>
                </div>
                <div className="flex flex-col gap-1 mb-3 max-lg:text-center max-md:text-center">
                    <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight max-md:text-3xl max-sm:text-xl" style={{ fontFamily: '"Roboto Flex"' }}>I'm Christian R. Penticostes</h1>
                    <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight max-md:text-3xl max-sm:text-xl" style={{ fontFamily: '"Roboto Flex"' }}>An Aspiring Web & Software Developer</h1>
                </div>
                <div className="mb-4">
                    <p className="dark:text-[#fafafa] text-sm max-w-[650px] leading-[26px] mb-6 max-lg:text-center max-md:text-center" style={{ fontFamily: '"Poppins"' }}>Passionate Full Stack Developer with a strong foundation in programming and hands-on experience in modern web technologies. Skilled in both front-end and back-end development, with expertise in PHP, Laravel, React.js, Node.js, and MySQL.</p>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <button onClick={() => window.open(resume, "_blank")} className="bg-black dark:bg-[#fafafa] dark:text-[#343434] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 transition">View Resume</button>
                    <a href={resume} download="Christian_Penticostes-Resume.pdf">
                        <button className="bg-black dark:bg-[#fafafa] p-3 rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 transition">
                            <img src={download} alt="Download" className="w-6 h-6 dark:hidden" />
                            <img src={downloadW} alt="Download" className="hidden dark:block w-6 h-6" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero