import React, {useState, useEffect}  from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { CiLight, CiDark } from "react-icons/ci";
import { Link } from "react-scroll"

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
    <div className='flex justify-between items-center h-20 max-w-[1550px] mx-auto px-4 text-white sticky top-0 bg-[#FAFAFA] dark:bg-[#343434]'>
        <h1 className='w-full text-3xl text-[#4169E1] m-2 leading-none animated-gradient-text' style={{ fontFamily: '"Alfa Slab One"' }}>「Christian」</h1>
        <ul className="hidden lg:flex items-center uppercase mr-4 dark:text-[#fafafa]">
            <li className="p-4 text-md font-light cursor-pointer text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}><Link to="home" smooth={true} duration={600} offset={-80}>Home</Link></li>
            <li className="p-4 text-md font-light cursor-pointer text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}><Link to="about" smooth={true} duration={600} offset={-80}>About</Link></li>
            <li className="p-4 text-md font-light cursor-pointer text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}><Link to="skills" smooth={true} duration={600} offset={-80}>Skills</Link></li>
            <li className="p-4 text-md font-light cursor-pointer text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}><Link to="contacts" smooth={true} duration={600} offset={-80}>Contacts</Link></li>
            <li className="p-4 text-md font-light cursor-pointer text-[#343434] dark:text-[#fafafa]" style={{ fontFamily: '"Poppins"' }}>Projects</li>
            <li className="p-4 flex items-center">
                <button onClick={toggleTheme} className="flex items-center justify-center w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 relative">
                    <span className={`absolute left-1 transition-all duration-300 text-black flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}>
                        {darkMode ? <CiDark size={16} /> : <CiLight size={16} />}
                    </span>
                </button>
            </li>
        </ul>
        <div onClick={handleNav} className='block lg:hidden mr-4 cursor-pointer text-[#343434] dark:text-[#fafafa]'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={`fixed top-0 h-full w-[60%] shadow-[4px_0_15px_rgba(0,0,0,0.3)] dark:shadow-[4px_0_15px_rgba(255,255,255,0.3)] backdrop-blur-3xl backdrop-brightness-150 transition-all duration-500 ease-in-out lg:hidden ${nav ? 'left-0' : 'left-[-100%]'}`}>
            <h1 className='w-full text-3xl text-[#4169E1] mt-10 mb-4 text-center leading-none animated-gradient-text' style={{ fontFamily: '"Alfa Slab One"' }}>「Christian」</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300 cursor-pointer'><Link to="home" smooth={true} duration={600} offset={-80}>Home</Link></li>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300 cursor-pointer'><Link to="about" smooth={true} duration={600} offset={-80}>About</Link></li>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300 cursor-pointer'><Link to="skills" smooth={true} duration={600} offset={-80}>Skills</Link></li>
                <li className='p-4 text-md font-light border-b border-gray-600 text-[#343434] dark:text-[#fafafa] dark:border-gray-300 cursor-pointer'><Link to="contacts" smooth={true} duration={600} offset={-80}>Contacts</Link></li>
                <li className='p-4 text-md font-light text-[#343434] dark:text-[#fafafa] cursor-pointer'>Projects</li>
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
