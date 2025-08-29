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
        <div className='flex gap-[55px] max-lg:flex-col max-lg:gap-[35px] max-md:gap-[35px] max-sm:mb-[30px]'>
            <div className='flex justify-center flex-col gap-5 max-lg:items-center max-lg:flex-row max-lg:order-2 max-md:order-2'>
                <img src={facebook} alt="Facebook" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" />
                <img src={facebookW} alt="Facebook" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />

                <img src={linkedin} alt="LinkedIn" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" />
                <img src={linkedinW} alt="LinkedIn White" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />

                <img src={github} alt="GitHub" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" />
                <img src={githubW} alt="GitHub White" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />       

                <img src={email} alt="Email" className="dark:hidden w-7 h-7 hover:scale-110 transition cursor-pointer" />
                <img src={emailW} alt="Email White" className="hidden dark:block w-7 h-7 hover:scale-110 transition" />
            </div>
            <div className='flex items-center max-lg:justify-center max-lg:mt-[80px] max-md:mt-[50px] max-lg:order-1 max-md:order-1'>
                <img src={myPhoto} alt="Christian" width={380} height={380} className="rounded-full object-cover"/>
            </div>
            <div className='flex justify-center flex-col max-lg:items-center max-lg:order-3 max-md:order-3'>
                <div className='flex items-center gap-[6px] mb-[15px] max-md:mb-[5px]'>
                    <p className="dark:text-[#fafafa] text-sm" style={{ fontFamily: '"Poppins"' }}>Hi, Great to See You Here!</p>
                </div>
                <div className='items-center gap-[6px] mb-[15px] max-md:mb-[5px]'>
                    <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight max-lg:text-center max-md:text-3xl max-md:mt-2" style={{ fontFamily: '"Roboto Flex"' }}>I'm Christian R. Penticostes</h1>
                    <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight max-lg:text-center max-md:text-3xl max-md:mb-2 max-sm:text-xl" style={{ fontFamily: '"Roboto Flex"' }}>An Aspiring Web & Software Developer</h1>
                </div>
                <div className='flex gap-[100px] mb-[12px]'>
                    <p className='dark:text-[#fafafa] text-sm w-[40vw] leading-[26px] mb-[30px] max-lg:w-[80vw] max-lg:text-center' style={{ fontFamily: '"Poppins"' }}>I’m passionate Full-Stack Developer with strong foundation in back-end development. Experienced in building dynamic and interactive web applications that enhance user experience. Eager to expand my skills and contribute to real-world projects.</p>
                </div>
                <div className='flex gap-[18px]'>
                    <button className="bg-black dark:bg-[#fafafa] dark:text-[#343434] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 transition ">View Resume</button>
                    <button className="bg-black dark:bg-[#fafafa] p-3 rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 transition"><img src={download} alt="Download" className="w-6 h-6 dark:hidden" /><img src={downloadW} alt="Download" className="hidden dark:block w-6 h-6" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero