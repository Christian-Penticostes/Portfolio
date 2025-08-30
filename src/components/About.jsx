import React from 'react'
import education from '../assets/education.png';
import educationW from '../assets/education-w.png';
import internship from '../assets/internship.png';
import internshipW from '../assets/internship-w.png';


const About = () => {
  return (
    <div id="about" className="w-[80%] mx-auto mb-10 max-lg:mt-20 max-md:mt-15 max-sm:mt-10">
        <div className="flex justify-center">
            <div className="w-full">
                <p className="font-bold text-xl dark:text-[#fafafa] ml-2" style={{ fontFamily: '"Poppins"' }}>Backgrounds</p>
                <hr className="border-black border-[1.1px] dark:border-white w-full max-w-[1210px] mx-auto" />
                <div className="flex justify-center mt-2">
                    <div className="flex flex-row gap-[3%] w-[95%] max-xl:flex-col">
                        <div className="text-left flex-1 content-center max-xl:mb-2">
                            <p className="text-lg font-bold" style={{ fontFamily: '"Poppins"' }}>Education</p>
                            <div className="flex flex-row items-center max-sm:flex-col max-sm:items-start">
                                <div className="flex items-center">
                                    <img src={education} alt="Education" className="dark:hidden w-7 h-7" />
                                    <img src={educationW} alt="Education" className="hidden dark:block w-7 h-7" />
                                    <p className="font-semibold text-sm ml-2 max-sm:ml-2" style={{ fontFamily: '"Poppins"' }}>Cavite State University - Imus Campus</p>
                                </div>
                                <p className="text-sm ml-auto max-sm:ml-9 max-sm:mb-1" style={{ fontFamily: '"Poppins"' }}>Sept. 2021 - Sept. 2025</p>
                            </div>
                            <p className='ml-[36px] text-sm' style={{ fontFamily: '"Poppins"' }}>Bachelor of Science in Information Technology</p>
                            <p className='ml-[36px] text-sm mt-[5px]' style={{ fontFamily: '"Poppins"' }}>Latin Honor: GPA 1.46 Cum Laude</p>
                            <ul className="list-disc ml-[55px] text-sm leading-[25px] mt-1" style={{ fontFamily: '"Poppins"' }}>
                                <li>Relevant Courses on Full Stack Web Development, Network Management and other practices.</li>
                                <li>Award for Best Web Design (2023)</li>
                            </ul>
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-lg font-bold" style={{ fontFamily: '"Poppins"' }}>Internship Experience</p>
                            <div className="flex flex-row items-center max-sm:flex-col max-sm:items-start">
                                <div className="flex items-center">
                                    <img src={internship} alt="Internship" className="dark:hidden w-7 h-7" />
                                    <img src={internshipW} alt="Internship" className="hidden dark:block w-7 h-7" />
                                    <p className="font-semibold text-sm ml-2 max-sm:ml-2" style={{ fontFamily: '"Poppins"' }}>Wellness PRO Incorporated</p>
                                </div>
                                <p className="text-sm ml-auto max-sm:ml-9 max-sm:mb-1" style={{ fontFamily: '"Poppins"' }}>March 2025 - July 2025</p>
                            </div>
                            <ul className="list-disc ml-[55px] text-sm leading-[25px]" style={{ fontFamily: '"Poppins"' }}>
                                <li>
                                    Developed dynamic websites using WordPress. Collaborated with team members to create user-friendly designs and enhance website functionality. Gained hands-on experience with WordPress core, theme customization, plugin development, and content management systems.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
