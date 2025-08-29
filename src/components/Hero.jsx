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

const Hero = () => {
  return (
    <div className="flex justify-center items-center lg:h-[calc(98dvh-10vh)] max-w-[1550px] mx-auto px-7 max-lg:mb-[30px]">
        <div className='flex gap-[55px] max-lg:flex-col max-md:gap-[55px] max-sm:mb-[30px]'>
            <div className='flex justify-center flex-col gap-4'>
                <img src={facebook} alt="Facebook" className="dark:hidden w-7 h-7 hover:scale-110 transition" />
                <img src={facebookW} alt="Facebook" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />

                <img src={linkedin} alt="LinkedIn" className="dark:hidden w-7 h-7 hover:scale-110 transition" />
                <img src={linkedinW} alt="LinkedIn White" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />

                <img src={github} alt="GitHub" className="dark:hidden w-7 h-7 hover:scale-110 transition" />
                <img src={githubW} alt="GitHub White" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />       

                <img src={email} alt="Email" className="dark:hidden w-7 h-7 hover:scale-110 transition" />
                <img src={emailW} alt="Email White" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />
            </div>
            <div className='flex items-center max-lg:justify-center max-lg:mt-[80px] max-md:mt-[50px]'>
                <img src={myPhoto} alt="Christian" width={380} height={380} className="rounded-full object-cover"/>
            </div>
            <div className='flex justify-center flex-col max-lg:items-center'>
                <div className='flex items-center gap-[6px] mb-[15px] max-md:mb-[5px]'>
                    <p className="dark:text-[#fafafa]">Hi, Great to See You Here!</p>
                </div>
                <div className='items-center gap-[6px] mb-[15px] max-md:mb-[5px]'>
                    <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight max-lg:text-center" style={{ fontFamily: '"Roboto Flex"' }}>I'm Christian R. Penticostes</h1>
                    <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight max-lg:text-center" style={{ fontFamily: '"Roboto Flex"' }}>An Aspiring Web & Software Developer</h1>
                </div>
                <div className='flex gap-[100px] mb-[12px]'>
                    <p className='dark:text-[#fafafa] text-md w-[40vw] leading-[26px] mb-[30px] max-lg:w-[80vw] max-lg:text-center'>I’m passionate Full-Stack Developer with strong foundation in back-end development. Experienced in building dynamic and interactive web applications that enhance user experience. Eager to expand my skills and contribute to real-world projects.</p>
                </div>
                <div className='flex gap-[18px]'>
                    <button className="bg-black dark:bg-[#fafafa] dark:text-[#343434] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">View Resume</button>
                    <button className="bg-black dark:bg-[#fafafa] p-3 rounded-lg shadow-md hover:bg-gray-200 transition"><img src={download} alt="Download" className="w-6 h-6 dark:hidden" /><img src={downloadW} alt="Download" className="hidden dark:block w-6 h-6" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero