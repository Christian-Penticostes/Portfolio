import React, {useState, useEffect}  from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { CiLight, CiDark } from "react-icons/ci";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className='flex justify-between items-center h-20 max-w-[1440px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl text-[#4169E1] m-0 leading-none' style={{ fontFamily: '"Alfa Slab One"' }}>「Christian」</h1>
        <ul className="hidden md:flex items-center uppercase mr-2 dark:text-[#fafafa]">
            <li className="p-4 text-md font-light text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}>Home</li>
            <li className="p-4 text-md font-light text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}>About</li>
            <li className="p-4 text-md font-light text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}>Skills</li>
            <li className="p-4 text-md font-light text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}>Contacts</li>
            <li className="p-4 text-md font-light text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}>Projects</li>
            <li className="p-4 flex items-center">
                <button onClick={toggleTheme} className="flex items-center justify-center w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 relative">
                    <span className={`absolute left-1 transition-all duration-300 text-black flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}>
                        {darkMode ? <CiDark size={16} /> : <CiLight size={16} />}
                    </span>
                </button>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mr-4 cursor-pointer text-[#343434] dark:text-[#fafafa]'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={`fixed top-0 h-full w-[60%] shadow-[4px_0_15px_rgba(0,0,0,0.3)] dark:shadow-[4px_0_15px_rgba(255,255,255,0.3)]  backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${nav ? 'left-0' : 'left-[-100%]'}`}>
            <h1 className='w-full text-3xl text-[#4169E1] mt-10 mb-4 text-center leading-none' style={{ fontFamily: '"Alfa Slab One"' }}>「Christian」</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300'>Home</li>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300'>About</li>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300'>Skills</li>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300'>Contacts</li>
                <li className='p-4 text-md font-light text-[#343434] dark:text-[#fafafa]'>Projects</li>
                <li className="p-4 flex items-center">
                    <button onClick={toggleTheme} className="flex items-center justify-center w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 relative">
                        <span className={`absolute left-1 transition-all duration-300 text-black flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}>
                            {darkMode ? <CiDark size={16} /> : <CiLight size={16} />}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
