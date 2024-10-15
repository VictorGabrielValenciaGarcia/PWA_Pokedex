import React from 'react';
import logo from '../img/system/logo.png'

function NavBar() {
    return <div className="bg-stone-50 pattern_body">
        {/* NavBar */}
        <nav className="border-b border-gray-400 shadow-lg bg-stone-200 pattern_header">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="/" className="flex items-center space-x-3 ">
                    <img src={logo} className="h-8 rounded" alt="Navbar" />
                    <span className="text-xl font-semibold">Pokédex Personal</span>
                </a>

                <div className="flex md:order-2">
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" disabled
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search..." />
                    </div>

                    <button type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div>

                <div className="hidden w-full md:flex md:w-auto md:order-1">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search..." />
                    </div>
                </div>
            </div>
        </nav>
    </div>;
}

export default NavBar;