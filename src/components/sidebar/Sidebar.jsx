// import React, { useState } from "react";
// import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
// import CreateQuiz from './CreateQuiz'
// import './Sidebar.css'
// export default function ParentSidebar() {
//     const [activeSection, setActiveSection] = useState(null);

//     const handleSectionClick = (section) => {
//         setActiveSection(section);
//     };

//     const renderContent = () => {
//         if (activeSection === 'vocabulary') {
//             return <CreateQuiz />;
//         }
//         else if (activeSection === 'grammar') {
//             return <Grammar />
//         }

//         // Add more conditions for other sections if needed

//         // Default content when no section is active
//         return null;
//     };

//     return (
//         <div className="flex custom_sidebar h-screen">
//             <Sidebar aria-label="Sidebar with logo branding example ">
//                 <Sidebar.Logo
//                     href="#"
//                     img="https://www.flowbite-react.com/favicon.svg"
//                     imgAlt="Flowbite logo"
//                 >
//                     <p>
//                         Vocatel
//                     </p>
//                 </Sidebar.Logo>
//                 <Sidebar.Items>
//                     <Sidebar.ItemGroup>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiChartPie}
//                             onClick={() => handleSectionClick('dashboard')}
//                         >
//                             <p>
//                                 Dashboard
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiViewBoards}
//                             onClick={() => handleSectionClick('learn')}
//                         >
//                             <p>
//                                 Learn
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiInbox}
//                             onClick={() => handleSectionClick('vocabulary')}
//                         >
//                             <p>
//                                 Create Quiz
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiUser}
//                             onClick={() => handleSectionClick('grammarCheck')}
//                         >
//                             <p>
//                                 Grammar check
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiArrowSmRight}
//                             onClick={() => handleSectionClick('profile')}
//                         >
//                             <p>
//                                 Profile
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiTable}
//                             onClick={() => handleSectionClick('signUp')}
//                         >
//                             <p>
//                                 Sign Up
//                             </p>
//                         </Sidebar.Item>
//                     </Sidebar.ItemGroup>
//                 </Sidebar.Items>
//             </Sidebar>

//             <div className="container mx-auto mt-12">
//                 {renderContent()}
//             </div>
//         </div>
//     );
// }
import React from 'react'

const SideBar = () => {
    return (
        <>
            <div class="relative hidden h-screen my-4 ml-4  lg:block w-72">
                <div class="h-full bg-transparent rounded-2xl dark:bg-gray-700">
                    <div class="flex items-center justify-center pt-6">
                        <img src='https://www.flowbite-react.com/favicon.svg'></img>
                    </div>
                    <nav class="mt-6">
                        <div>
                            <a class=" flex items-center justify-start w-full p-4 my-2 font-thin text-lime-500 uppercase transition-colors duration-200  " href="/home">
                                <div className='mx-auto flex'>
                                    <span class="text-left">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        Dashboard
                                    </span>
                                </div>

                            </a>
                            <a  class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="learn">
                                <div className='mx-auto flex'>

                                    <span class="text-left">
                                        <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        LEARN
                                    </span>
                                </div>
                            </a>
                            <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="/home/vocab">
                                <div className='mx-auto flex'>

                                    <span class="text-left">
                                        <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        VOCAB
                                    </span>
                                </div>
                            </a>
                            <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="/home/quiz">
                                <div className='mx-auto flex'>
                                    <span class="text-left">
                                        <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        QUIZ
                                    </span>
                                </div>
                            </a>
                            <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="/home/profile">
                                <div className='mx-auto flex'>
                                    <span class="text-left">
                                        <svg width="20" height="20" class="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        PROFILE
                                    </span>
                                </div>
                            </a>
                            <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="/home/grammar">
                                <div className='mx-auto flex'>
                                    <span class="text-left">
                                        <svg width="20" height="20" class="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        Grammar
                                    </span>
                                </div>
                            </a>
                            <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="/home/chat">
                                <div className='mx-auto flex'>
                                    <span class="text-left">
                                        <svg width="20" height="20" class="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-normal">
                                        Chat
                                    </span>
                                </div>
                            </a>
                            <div className="pt-3" style={{ opacity: 1, display: 'block' }}>
                                <a className="bg-gradient-to-r from-orange-400 to-orange-500 w-5/6 h-12 mx-auto flex items-center space-x-2 rounded-lg p-2 text-white transition-all hover:scale-95" href="/pricing">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 sm:h-6 sm:w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                                    </svg>
                                    <span className="text-xs font-medium sm:text-sm md:font-bold md:uppercase">Upgrade plan</span>
                                </a>
                            </div>
                            {/* <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="#">
                                <span class="text-left">
                                    <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="mx-4 text-sm font-normal">
                                    Reports
                                </span>
                            </a>
                            <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-lime-500" href="#">
                                <span class="text-left">
                                    <svg width="20" fill="currentColor" height="20" class="w-5 h-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="mx-4 text-sm font-normal">
                                    Settings
                                </span>
                            </a> */}
                            <div className="relative flex items-end justify-between rounded-full p-2 hover:bg-dark-xs hover:dark:bg-secondary-dark" style={{ position: "relative", bottom: "0" }}>
                                <div className="relative flex max-w-full items-center mx-auto bottom-0">
                                    <span className="h-[36px] w-[36px]">
                                        <img
                                            alt=""
                                            src='https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-cute-bear-avatar-with-a-yellow-background-png-image_1770297.jpg'
                                            width="36"
                                            height="36"
                                            decoding="async"
                                            data-nimg="1"
                                            className="h-full w-full rounded-full object-cover"
                                            loading="lazy"
                                            style={{ color: "transparent" }}
                                        />
                                    </span>
                                    <p className="max-w-[100px] truncate pl-2 font-semibold">Three</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar