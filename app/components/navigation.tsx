'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'




function Navigation() {
    const [btnState, setBtnState] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setActive] = useState(true)
    const ref = useRef<any>();
    const ref2 = useRef<any>();

    const element = ref2.current;

    useEffect(() => {
        const closeDropDown = (e: Event) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
              }
            
        }

        window.addEventListener('click', closeDropDown )
        return() =>  {window.removeEventListener('click', closeDropDown )}
    }, [isOpen])

    function Openbar(){
        setBtnState(btnState => !btnState)
    }
  
    let checkToggle = btnState ? 'left-[0px]': 'left-[-300px]';
   

    useEffect(() => {
        const element = ref2.current;
        element.addEventListener('click', function (event: any) {
            if (event.target.tagName === 'H2') {
                setActive(isActive => isActive);
                const openH2s = document.querySelectorAll('h2 > h3.active');
                for (let i = 0; i < openH2s.length; i++) {
                    if (openH2s[i] !== event.target) {
                        openH2s[i].classList.remove('active');
                    }
                }
                event.target.nextElementSibling.classList.toggle('open');
            } else if (event.target.tagName === 'H3') {
                event.target.classList.toggle('active');
                event.target.nextElementSibling.classList.toggle('open');
            } else if (event.target.tagName === 'H4') {
                event.target.classList.toggle('active');
                event.target.nextElementSibling.classList.toggle('open');
            } else if (event.target.tagName === 'H5') {
                event.target.classList.toggle('active');
                event.target.nextElementSibling.classList.toggle('open');
            }
        }, []);
           


    })
//     const accordion = document.querySelector('#accordion');

 
    return (
        <>
      

        <nav className=" flex h-14 shadow-sm rounded-2xl">

           {/* logo start */}
            <div className="m-2 flex flex-auto items-center ">
            <button className="p-1 lg:fixed" onClick={() => Openbar(
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
            </button>
            </div>
             {/* logo end */}

            
            {/* search  start*/}
            <div className="hidden flex-auto  items-center justify-end md:space-x-10 md:flex">
                <form>
                    <input type="search" className="px-4 py-2 bg-slate-50 md:px-14 rounded-3xl focus:outline-none border-2"
                        placeholder="" />
                </form>
                <p className="text-sm text-gray-500">Search</p>
            </div>
            {/* search  end*/}


            {/* flag Notification profile*/}
            <div className=" m-4 flex flex-auto items-center justify-end space-x-10 md:space-x-5">
                <img src="https://flagicons.lipis.dev/flags/4x3/np.svg" className="h-6 w-6" alt="" />

                <a>
                    <div className="flex flex-row-reverse">
                        <p
                            className="flex h-1 -mt-2 -ml-2 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                            3
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className=" w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>
                </a>
               
                <div className="flex flex-row items-center justify-center md:space-x-3 ">
                    
                    <img src="https://media.istockphoto.com/id/1287459398/es/foto/sonriente-arquitecta-mujer-sentada-en-su-escritorio-de-oficina.jpg?s=1024x1024&w=is&k=20&c=SbVNJUZhHqdsZLbTfjMJlli6E8AVLklvdApM-JMbUa0="
                        className="h-8 w-8 rounded-xl object-cover " alt=""/>
                    <p className="text-xs">Henry</p>
                   
                    <div>
                        <button ref ={ref} onClick={() => setIsOpen(prev => !prev)}
                            className="flex flex-row items-center text-sm font-bold text-left rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode: md:block focus:shadow-outline-none">
                            <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.79681 7C4.95612 7 4.49064 7.97434 5.01887 8.62834L8.83333 13.351C9.43371 14.0943 10.5668 14.0943 11.1672 13.351L14.9816 8.62834C15.5098 7.97434 15.0444 7 14.2037 7H5.79681Z"
                                    fill="#212121" />
                            </svg>
                        </button>
                        { isOpen && ( <div 
                            className={"absolute right-0.5 w-50 mt-2 origin-top-left rounded-md shadow-lg focus:outline-none " + (isOpen ? 'block':'hidden')} >
                            <div className=" w-28 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">Account</a>
                                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#">Setting</a>
                                <Link  className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="/">Log Out</Link>
                            </div>
                        </div> )}
                    </div>

                </div>
                {/* flag Notification profile ends*/}
            </div>

        </nav>

        {/* sidebar */}

        <div className={ `btn ${checkToggle} w-[68] fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
          p-2  overflow-y-auto bg-gray-900 shadow h-screen z-50`}>
        <div className=" text-xl">
            <div className="fixed top-0 bg-gray-900">
                <div className=" mt-1 flex rounded-lg ">
                    
                    <p className="text-yellow-300 text-3xl font-bold mx-7 my-2">CE HRMS </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className=" w-6 h-6 ml-9 mt-4 cursor-pointer text-white lg-[min-1030]:hidden"
                        onClick={Openbar}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="bg-yellow-600 h-0.5 w-[250px]"></div>
            </div>
            <div>
               
            <ul className="dashboard mt-14" ref ={ref2} id = '#accordion'>
                    {/* <!-- mobile search only --> */}
                    <li
                        className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-gray-500 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer md:hidden">
                        <i className="bi bi-search text-sm"></i>
                        <input className="text-xs font-semibold text-white  w-full bg-transparent focus:outline-none"
                            placeholder="Search" />
                    </li>
                    {/* <!-- dashboard --> */}
                    <li
                        className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                        <p className="flex space-x-2 w-full items-center">
                            <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                            <span className="text-xs font-semibold  ">Dashboard</span>

                        </p>

                    </li>
                    {/* <!-- Employee Information  --> */}
                    <li className="Employee-Information">
                        <p className="text-gray-500 ml-4 mr-2 text-xs">Employee Information </p>
                        {/* <!-- dropdown --> */}
                    </li>
                    <ul>
                        <li>
                            <h2
                                className={(isActive ?"after:content-['-']":"active:after:content-['+'] ") +" after:text-base after:ml-auto after:text-right  text-gray-400 items-center  space-x-2 ml-9 mt-2 mr-3 justify-start py-1 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex  rounded-md  duration-300 cursor-pointer"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="text-xs font-semibold  ">Employee Records</span>

                            </h2>
                            <div>
                                <ul>
                                    <li>
                                        <h3
                                            className="after:content-['+'] after:text-base after:ml-auto after:text-right text-gray-400 items-center space-x-2 ml-12  mr-3 justify-start py-1 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                            <span className=" text-xs font-semibold ">Social</span>
                                        </h3>
                                        <div>
                                            <ul>
                                                <li>
                                                    <h4
                                                        className="after:content-['+'] after:text-base after:ml-auto after:text-right text-gray-400 items-center space-x-2 ml-14  mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                        <span className="text-xs font-semibold ">sub-social</span>
                                                    </h4>
                                                    <div>
                                                        <ul>
                                                            <li>
                                                                <h5
                                                                    className="after:content-['+'] after:text-base after:ml-auto after:text-right text-gray-400 items-center space-x-2 ml-20 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                                    <span
                                                                        className="text-xs font-semibold ">sub-sub-social</span>

                                                                </h5>

                                                                <div>
                                                                    <p className=" text-gray-400 items-center space-x-2 ml-24 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                                       <span className=" text-xs font-semibold ">sub-sub-subsocial</span>
                                                                       </p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                      </div>
                                                </li>
                                                <li>
                                                    <p
                                                    className=" text-gray-400 items-center space-x-2 ml-14 mr-3
                                                                        justify-start py-2 px-3 hover:bg-yellow-300
                                                                        hover:text-black hover:rounded-lg flex
                                                                        rounded-md duration-300 cursor-pointer">
                                                                        <span
                                                                            className="text-xs font-semibold ">sub-social</span>
                                                                    </p>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <p className=" text-gray-400 items-center space-x-2 ml-12 mr-3
                                                                        justify-start py-2 px-3 hover:bg-yellow-300
                                                                        hover:text-black hover:rounded-lg flex
                                                                        rounded-md duration-300 cursor-pointer">
                                                        <span className=" text-xs font-semibold ">Personal</span>

                                                    </p>
                                                </li>
                                                <li>
                                                    <p
                                                        className=" text-gray-400 items-center space-x-2 ml-12  mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                        <span className=" text-xs font-semibold ">Friends</span>

                                                    </p>
                                                </li>

                                            </ul>
                                        </div>


                                    </li>

                                    <li
                                        className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-xs font-semibold  ">Add New Employee</span>
                                        <span className="h-[14px] w-[19px]"></span>

                                    </li>
                                    <li
                                        className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                        </svg>

                                        <span className=" text-xs font-semibold  ">Employement History</span>
                                        <span className="h-[14px] w-[19px]"></span>

                                    </li>
                                    <li
                                        className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>

                                        <span className="text-xs font-semibold  "> Reports</span>

                                    </li>

                                </ul>
                                {/* <!-- Attendence & Leave Management --> */}
                        <li className="Attendence & Leave Management">
                            <p className="text-gray-500 ml-4 mr-2 text-xs">Attendence & Leave Management </p>
                        </li>
                        <ul>
                            <li>
                            <h2
                                className=" after:content-['+'] after:text-base after:ml-auto after:text-right  text-gray-400 items-center  space-x-2 ml-9 mt-2 mr-3 justify-start py-1 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex  rounded-md  duration-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="text-xs font-semibold  ">Attendence Management</span>

                            </h2>
                                <div>
                                    <ul>
                                        <li>
                                            <h3
                                                className="after:content-['+'] after:text-base after:ml-auto after:text-right text-gray-400 items-center space-x-2 ml-12  mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                <span className=" text-xs font-semibold ">Social</span>
                                            </h3>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <h4
                                                            className="after:content-['+'] after:text-base after:ml-auto after:text-right text-gray-400 items-center space-x-2 ml-14  mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                            <span className="text-xs font-semibold ">sub-social</span>
                                                        </h4>
                                                        <div>
                                                            <ul>
                                                                <li>
                                                                    <h5
                                                                        className="after:content-['+'] after:text-base after:ml-auto after:text-right text-gray-400 items-center space-x-2 ml-20 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                                        <span
                                                                            className="text-xs font-semibold ">sub-sub-social</span>

                                                                    </h5>

                                                                    <div>
                                                                        <p className=" text-gray-400 items-center space-x-2 ml-24 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                                           <span className=" text-xs font-semibold ">sub-sub-subsocial</span>
                                                                           </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                          </div>
                                                    </li>
                                                    <li>
                                                        <p
                                                        className=" text-gray-400 items-center space-x-2 ml-14 mr-3
                                                                            justify-start py-2 px-3 hover:bg-yellow-300
                                                                            hover:text-black hover:rounded-lg flex
                                                                            rounded-md duration-300 cursor-pointer">
                                                                            <span
                                                                                className="text-xs font-semibold ">sub-social</span>
                                                                        </p>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <p className=" text-gray-400 items-center space-x-2 ml-12 mr-3
                                                                            justify-start py-2 px-3 hover:bg-yellow-300
                                                                            hover:text-black hover:rounded-lg flex
                                                                            rounded-md duration-300 cursor-pointer">
                                                            <span className=" text-xs font-semibold ">Personal</span>

                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className=" text-gray-400 items-center space-x-2 ml-12  mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">
                                                            <span className=" text-xs font-semibold ">Friends</span>

                                                        </p>
                                                    </li>

                                                </ul>
                                            </div>

                                        </li>


                                        <li
                                            className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                            </svg>


                                            <span className="text-xs font-semibold  ">Manual Attendence</span>
                                            <span className="h-[14px] w-[19px]"></span>

                                        </li>

                                        <li
                                            className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            </svg>

                                            <span className="text-xs font-semibold  ">Attendence Approval</span>
                                            <span className="h-[14px] w-[19px]"></span>

                                        </li>

                                        <li
                                            className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                            </svg>

                                            <span className="text-xs font-semibold  ">Leave Management</span>
                                            <span className="h-[14px] w-[19px]"></span>

                                        </li>

                                        <li
                                            className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg>


                                            <span className="text-xs font-semibold  ">Manual Leave</span>
                                            <span className="h-[14px] w-[19px]"></span>

                                        </li>
                                        <li
                                            className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                            </svg>

                                            <span className="text-xs font-semibold  ">Leave Approval</span>
                                            <span className="h-[14px] w-[19px]"></span>

                                        </li>

                                        <li
                                            className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>

                                            <span className="text-xs font-semibold  "> Reports</span>


                                        </li>
                                    </ul>
                                    {/* <!-- Performance Management System  --> */}
                            <li className="Performance Management System ">
                                <p className="text-gray-500 ml-4 mr-2 text-xs">Performance Management System </p>
                            </li>
                            <ul>
                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mt-2 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>


                                    <span className="text-xs font-semibold  ">Performance Appraisal</span>
                                    <span className="h-[14px] w-[19px]"></span>

                                </li>
                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                    </svg>

                                    <span className="text-xs font-semibold  ">Probation Review</span>
                                    <span className="h-[14px] w-[19px]"></span>

                                </li>
                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>

                                    <span className="text-xs font-semibold  "> Reports</span>

                                </li>
                            </ul>
                            {/* <!-- Payroll Calculations --> */}
                            <li className="Payroll Calculations ">
                                <p className="text-gray-500 ml-4 mr-2 text-xs">Payroll Calculations</p>
                            </li>
                            <ul>
                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mt-2 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>

                                    <span className="text-xs font-semibold  ">Payroll</span>
                                    <span className="h-[14px] w-[19px]"></span>

                                </li>
                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>

                                    <span className="text-xs font-semibold  "> Reports</span>

                                </li>
                            </ul>
                            {/* <!-- Application Tracking System --> */}
                            <li className=" Application Tracking System ">
                                <p className="text-gray-500 ml-4 mr-2 text-xs">Application Tracking System</p>
                            </li>
                            <ul>
                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mt-2 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>

                                    <span className="text-xs font-semibold  ">Vacancies List</span>
                                    <span className="h-[14px] w-[19px]"></span>

                                </li>

                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>

                                    <span className="text-xs font-semibold  ">Applicant Records</span>
                                    <span className="h-[14px] w-[19px]"></span>

                                </li>

                                <li
                                    className="text-gray-400 items-center space-x-2 ml-9 mr-3 justify-start py-2 px-3 hover:bg-yellow-300 hover:text-black hover:rounded-lg flex rounded-md  duration-300 cursor-pointer">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>

                                    <span className="text-xs font-semibold  ">Other Forms</span>
                                    <span className="h-[14px] w-[19px]"></span>

                                </li>
                            </ul>
                        </ul>

            </div>
        </div>
    </div>
        </>
    )
}
export default Navigation;