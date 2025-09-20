import React from 'react';
import calculator from '../assets/calculator.png';
import fibonacci from '../assets/fibonacci.png';
import guess from '../assets/guess.png';
import jacknpoy from '../assets/jacknpoy.png';
import guidance from '../assets/Guidance System.png';
import food from '../assets/food system.png';
import studentModule from '../assets/student-module.png';
import currency from '../assets/currency.png';
import capstone from '../assets/capstone.png';
import wordpress from '../assets/wordpress system.png';
import portfolio from '../assets/portfolio.png';
import authentication from '../assets/authentication.png';
import blog from '../assets/blog.png';
import currencyConverter from '../assets/currency-converter.png';
import shopping from '../assets/java-activity.png';
import fibonacciNest from '../assets/fibonacci-nest.png';
import primeNest from '../assets/prime-nest.png';
import factorial from '../assets/factorial.png';

const Projects = () => {
  const techColors = {
    "HTML": "bg-[#FC490B]/25 text-[#FC490B]",
    "CSS": "bg-[#2196F3]/25 text-[#2196F3]",
    "JavaScript": "bg-[#FFDF00]/25 text-[#B8860B] dark:text-yellow-300",
    "PHP": "bg-[#777BB3]/25 text-[#777BB3] dark:text-[#a8a9d6]",
    "MySQL": "bg-[#CB8A2D]/25 text-[#CB8A2D] dark:text-[#f1b867]",
    "SSE": "bg-[#5e17ec]/25 text-[#5e17ec] dark:text-[#a06cf0]",
    "Curl": "bg-[#093754]/25 text-[#093754] dark:text-[#4fa3d1]",
    "LeafletJS": "bg-[#b1de5c]/25 text-[#6a8f2e] dark:text-[#d0f09b]",
    "TypeScript": "bg-[#3178c6]/25 text-[#3178c6] dark:text-[#6ba8f7]",
    "Node.js": "bg-[#83cd29]/25 text-[#4a7d14] dark:text-[#b6f06c]",
    "NestJS": "bg-[#e0234e]/25 text-[#e0234e] dark:text-[#ff6b88]",
    "OpenAPI": "bg-[#6ba43a]/25 text-[#4a6e28] dark:text-[#9fdc75]",
    "RESTful API": "bg-[#259ECA]/25 text-[#259ECA] dark:text-[#6fcdf7]",
    "React.js": "bg-[#02CFDC]/25 text-[#02CFDC] dark:text-[#5aeef7]",
    "Laravel": "bg-[#FF2D20]/25 text-[#FF2D20] dark:text-[#ff7269]",
    "WordPress": "bg-[#00769D]/25 text-[#00769D] dark:text-[#48b8db]",
    "Elementor": "bg-[#d63362]/25 text-[#d63362] dark:text-[#f87ca4]",
    "WooCommerce": "bg-[#7f54b3]/25 text-[#7f54b3] dark:text-[#b89ce0]",
    "Java": "bg-[#427595]/25 text-[#427595] dark:text-[#7fb4db]",
    "Tailwind CSS": "bg-[#38BDF8]/25 text-[#38BDF8]",
  };

  const TechTag = ({ tech }) => {
    const colorClasses = techColors[tech] || "bg-[#4169E1]/25 text-[#4169E1]"; 
    
    return (
      <span 
        className={`px-3 py-1 text-xs rounded-full font-medium ${colorClasses}`}
        style={{ fontFamily: '"Poppins"' }}
      >
        {tech}
      </span>
    );
  };

  const projectsData = [
    {
      id: 1,
      title: "Calculator",
      description: "A simple calculator designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: calculator,
      github: "https://github.com/Christian-Penticostes/Calculator",
      imageBg: "bg-[#d9d9d9]"
    },
    {
      id: 2,
      title: "Fibonacci Sequence",
      description: "A system that calculates and displays the Fibonacci sequence, providing the resulting values based on user input.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: fibonacci,
      github: "https://github.com/Christian-Penticostes/fibonacci-sequence",
      imageBg: "bg-[#0b0a1d]"
    },
    {
      id: 3,
      title: "Guess the Number",
      description: "A system where you play a number-guessing game (1–10) with hints if the guess is too low or too high until the correct number is found.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: guess,
      github: "https://github.com/Christian-Penticostes/Guess-The-Number",
      imageBg: "bg-[#1c1948]"
    },
    {
      id: 4,
      title: "Jack En Poy",
      description: "A system that lets you play Rock-Paper-Scissors by choosing Rock, Paper, or Scissors, and displays whether you win, lose, or tie.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: jacknpoy,
      github: "https://github.com/Christian-Penticostes/Jack-en-Poy",
      imageBg: "bg-white"
    },
    {
      id: 5,
      title: "Guidance System",
      description: "A web-based guidance system with role-based login for admins, professors, and students. It includes features such as appointment scheduling, grade tracking, profile management, and health monitoring.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: guidance,
      github: null,
      imageBg: "bg-white"
    },
    {
      id: 6,
      title: "Online Ordering System",
      description: "An online ordering system with login access for customers, employees, and admins. Admins can manage employees, while both admins and employees handle products and orders. Customers can manage their accounts, place orders from the menu, and manage their orders.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: food,
      github: null,
      imageBg: "bg-[#efefef]"
    },
    {
      id: 7,
      title: "Fibonnaci Sequence",
      description: "A system that calculates and displays the Fibonacci sequence, providing the resulting values based on user input.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "NestJS"],
      image: fibonacciNest,
      github: "https://github.com/Christian-Penticostes/fibonacci-sequence",
      imageBg: "bg-[#212121]"
    },
    {
      id: 8,
      title: "Prime Number",
      description: "A system that checks whether a given number is prime or not and displays the result instantly, providing a straightforward way to test prime numbers.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "NestJS"],
      image: primeNest,
      github: "https://github.com/Christian-Penticostes/nestjs-prime-number",
      imageBg: "bg-[#212121]"
    },
    {
      id: 9,
      title: "Factorial Number",
      description: "A system that calculates the factorial of a given number and clearly displays the result based on user input, making mathematical operations simple and interactive.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "NestJS"],
      image: factorial,
      github: "https://github.com/Christian-Penticostes/nestjs-factorial",
      imageBg: "bg-[#212121]"
    },
    {
      id: 10,
      title: "Student Module",
      description: "A student module system that allows creating, reading, updating, and deleting student records, making it easier to manage student information.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "NestJS", "RESTful API", "MySQL"],
      image: studentModule,
      github: "https://github.com/Christian-Penticostes/nestjs-student-module",
      imageBg: "bg-[#212121]"
    },
    {
      id: 11,
      title: "Currency Converter OpenAPI",
      description: "A system that converts currencies between different countries by entering an amount, the currency to convert from, and the currency to convert to, then displaying the converted value. It uses an API to provide accurate and real-time currency conversion.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "NestJS", "OpenAPI"],
      image: currency,
      github: "https://github.com/Christian-Penticostes/nestjs-currency-converter-openAPI",
      imageBg: "bg-[#212121]"
    },
    {
      id: 12,
      title: "Online Ordering System with Product Image to 3D Viewing and Conversion",
      description: "An online ordering system that allows customers to browse products with 3D viewing, place orders, and track dispatched items on an interactive map. Admins and employees can manage products and orders while converting product images into 3D models through an API.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "SSE", "Curl", "LeafletJS"],
      image: capstone,
      github: null,
      imageBg: "bg-[#edeff3]"
    },
    {
      id: 13,
      title: "Internship WordPress System",
      description: "A WordPress-based system that showcases products and company details. Customers can request product quotes directly from the site and submit inquiries through forms covering products, careers, and other services. It provides a simple yet effective platform for engaging with customers and managing inquiries online.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor", "WooCommerce"],
      image: wordpress,
      github: null,
      imageBg: "bg-white"
    },
    {
      id: 14,
      title: "Calculator",
      description: "A simple calculator designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      technologies: ["React.js"],
      image: calculator,
      github: "https://github.com/Christian-Penticostes/Simple-Calculator_ReactJs",
      imageBg: "bg-[#d9d9d9]"
    },
    {
      id: 15,
      title: "Simple User Authentication",
      description: "A simple user authentication system that allows users to register an account and securely log in to access the application.",
      technologies: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
      image: authentication,
      github: "https://github.com/Christian-Penticostes/laravel-login-logout",
      imageBg: "bg-[#d9d9d9]"
    },
    {
      id: 16,
      title: "Simple Blog System",
      description: "A simple blog system that allows users to register and log in, with full CRUD functionality for creating, reading, updating, and deleting blog posts.",
      technologies: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
      image: blog,
      github: "https://github.com/Christian-Penticostes/simple-blog-system",
      imageBg: "bg-[#d9d9d9]"
    },
    {
      id: 17,
      title: "Portfolio",
      description: "A personal portfolio website that highlights my background, showcases my skills, and presents a collection of projects I have developed. It serves as an online platform to introduce myself and display my work in a professional way.",
      technologies: ["React.js", "Tailwind CSS"],
      image: portfolio,
      github: "https://github.com/Christian-Penticostes/Portfolio",
      imageBg: "bg-[#343434]"
    },
    {
      id: 18,
      title: "Currency Converter",
      description: "A system that converts currencies between different countries by entering an amount, the currency to convert from, and the currency to convert to, then displaying the converted value. It uses an API to provide accurate and real-time currency conversion.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Vite", "TypeScript", "Node.js", "NestJS", "OpenAPI"],
      image: currencyConverter,
      github: "https://github.com/Christian-Penticostes/currency-converter",
      imageBg: "bg-[#f3f4f6]"
    },
    {
      id: 19,
      title: "Simple Shopping System",
      description: "A simple shopping system with login functionality where admins can manage products and orders, while customers can browse items and place orders. The system is structured using object-oriented programming (OOP) to keep the code organized and maintainable.",
      technologies: ["Java"],
      image: shopping,
      github: "https://github.com/Christian-Penticostes/simple-shopping-system",
      imageBg: "bg-[#1e1f22]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#343434]">
      <div className="max-w-[1550px] mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#4169E1] mb-4 animated-gradient-text" style={{ fontFamily: '"Alfa Slab One"' }}>My Projects</h1>
          <p className="text-lg text-[#343434] dark:text-[#fafafa] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: '"Poppins"' }}>Here's a collection of projects I've worked on, showcasing my skills in web development, and software development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.sort((a, b) => b.id - a.id).map((project) => (
            <div key={project.id} className="bg-white dark:bg-[#4a4a4a] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className={`h-56 max-sm:h-auto ${project.imageBg || 'bg-black dark:bg-[#4a4a4a]'} overflow-hidden`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-300"/>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#343434] dark:text-[#fafafa] mb-3" style={{ fontFamily: '"Poppins"' }}>{project.title}</h3>        
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1" style={{ fontFamily: '"Poppins"' }}>{project.description}</p>

                <div className="mb-4 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index} tech={tech} />
                    ))}
                  </div>
                </div>

                {project.github && (
                  <div className="mt-auto">
                    <a href={project.github} target='_blank' rel="noopener noreferrer" className="w-full block border border-[#343434] text-[#343434] py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-[#434343] hover:text-white dark:border-[#FAFAFA] dark:text-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#343434] transition-all duration-200" style={{ fontFamily: '"Poppins"' }}>GitHub</a>
                  </div>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;