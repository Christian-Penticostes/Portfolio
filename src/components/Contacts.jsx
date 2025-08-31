import React from 'react'
import github1 from '../assets/github1.png';
import email1 from '../assets/email1.png';
import linkedin1 from '../assets/linkedin1.png';
import github1W from '../assets/github1-w.png';
import email1W from '../assets/email1-w.png';
import linkedin1W from '../assets/linkedin1-w.png';

const Contacts = () => {
  return (
    <div id="contacts" className="w-[80%] mx-auto max-lg:mt-20 max-md:mt-15 max-sm:mt-10">
        <div className="flex justify-center">
            <div className="w-full">
                <p className="font-bold text-xl dark:text-[#fafafa] ml-2" style={{ fontFamily: '"Poppins"' }}>Contacts</p>
                <hr className="border-black border-[1.1px] dark:border-white w-full max-w-[1210px] mx-auto" />
                <div className="flex flex-col items-center justify-center my-[60px]">
                    <p className="text-base font-bold mb-1" style={{ fontFamily: '"Poppins"' }}>Want to get in touch?</p>
                    <p className="text-sm font-normal" style={{ fontFamily: '"Poppins"' }}>Contact me via email or socials</p>
                    <div className="flex flex-col gap-[3%] w-[90%] max-xl:flex-col">
                        <div className="text-left flex-1 content-center max-xl:mb-2">
                            <div className='flex flex-wrap gap-[10px] max-lg:items-center max-lg:justify-center mt-10'>
                                <div onClick={() => window.open("https://www.linkedin.com/in/christian-penticostes-9a0246353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} className='cursor-pointer flex items-center w-[281.4px] bg-white dark:bg-[#434343] border-solid border-[1px] border-[#343434] dark:border-[#FAFAFA] rounded-md px-[20px] py-[10px]  max-lg:w-[48.4%] max-md:w-full flex-[1_1_calc(25%-1rem)] max-lg:flex-[1_1_calc(50%-1rem)] max-md:flex-[1_1_calc(50%-1rem)] max-sm:flex-[1_1_100%]'>
                                    <img src={linkedin1} alt='LinkedIn' className='dark:hidden rounded-md h-[40px] w-[40px] object-contain' />
                                    <img src={linkedin1W} alt='LinkedIn' className='hidden dark:block rounded-md h-[40px] w-[40px] object-contain' />
                                    <div>
                                        <p className='text-sm font-normal ml-3' style={{ fontFamily: '"Roboto"' }}>Click to view LinkedIn profile</p>
                                    </div>
                                </div>
                                <div onClick={() => window.open("mailto:pentichris0@gmail.com", "_blank")} className='cursor-pointer flex items-center w-[281.4px] bg-white dark:bg-[#434343] border-solid border-[1px] border-[#343434] dark:border-[#FAFAFA] rounded-md px-[20px] py-[10px]  max-lg:w-[48.4%] max-md:w-full flex-[1_1_calc(25%-1rem)] max-lg:flex-[1_1_calc(50%-1rem)] max-md:flex-[1_1_calc(50%-1rem)] max-sm:flex-[1_1_100%]'>
                                    <img src={email1} alt='Email' className='dark:hidden rounded-md h-[40px] w-[40px] object-contain' />
                                    <img src={email1W} alt='Email' className='hidden dark:block rounded-md h-[40px] w-[40px] object-contain' />
                                    <div>
                                        <p className='text-sm font-normal ml-3' style={{ fontFamily: '"Roboto"' }}>pentichris0@gmail.com</p>
                                    </div>
                                </div>
                                <div onClick={() => window.open("https://github.com/Christian-Penticostes", "_blank")} className='cursor-pointer flex items-center w-[281.4px] bg-white dark:bg-[#434343] border-solid border-[1px] border-[#343434] dark:border-[#FAFAFA] rounded-md px-[20px] py-[10px]  max-lg:w-[48.4%] max-md:w-full flex-[1_1_calc(25%-1rem)] max-lg:flex-[1_1_calc(50%-1rem)] max-md:flex-[1_1_calc(50%-1rem)] max-sm:flex-[1_1_100%]'>
                                    <img src={github1} alt='GitHub' className='dark:hidden rounded-md h-[40px] w-[40px] object-contain' />
                                    <img src={github1W} alt='GitHub' className='hidden dark:block rounded-md h-[40px] w-[40px] object-contain' />
                                    <div>
                                        <p className='text-sm font-normal ml-3' style={{ fontFamily: '"Roboto"' }}>Click to view GitHub profile</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-black border-[1.1px] mt-[70px] dark:border-white w-full max-w-[1210px] mx-auto" />
                <div className='my-4 text-right'>
                    <p className='text-[10px] mr-4' style={{ fontFamily: '"Roboto Flex"' }}>Portfolio site made by Christian Penticostes using React.js and Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts
