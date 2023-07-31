import React from 'react';
import {Head} from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import introIllustration from '@//../images/illustration-intro.png';
import iconAnywhere from '@//../images/icon-access-anywhere.svg';
import iconSecurity from '@//../images/icon-security.svg';
import iconCollaboration from '@//../images/icon-collaboration.svg';
import iconAnyFile from '@//../images/icon-any-file.svg';
import stayProductive from '@//../images/illustration-stay-productive.png';
import iconArrow from '@//../images/icon-arrow.svg';
import bgQuotes from '@//../images/bg-quotes.png';
import profile1 from '@//../images/profile-1.jpg';
import profile2 from '@//../images/profile-2.jpg';
import profile3 from '@//../images/profile-3.jpg';
import fileTransfer from '@//../images/2926635.jpg';


const Download = () => {
    return (
        <GuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/*Download Section*/}
                        <section className="bg-white dark:bg-gray-900">
                            <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                                <div className="flex justify-center xl:w-1/2">
                                    <img
                                        className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-contain rounded-full mr-3"
                                        src={fileTransfer}
                                        alt=""/>
                                </div>

                                <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                                        Download our file transfer app
                                    </h2>

                                    <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                                        We're excited to announce the launch of our new file transfer app! This
                                        user-friendly application allows you to seamlessly send and receive files across
                                        various platforms, ensuring your data is always within reach. Download it today
                                        on Windows, Mac, or Linux and experience the ease of file sharing like never
                                        before!</p>

                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow">
                                            <a href="#"
                                               className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                                     viewBox="0 0 32 32">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                       stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path
                                                            d="M1,15H12a1,1,0,0,0,1-1V4.17a1,1,0,0,0-.35-.77,1,1,0,0,0-.81-.22L.84,5A1,1,0,0,0,0,6v8A1,1,0,0,0,1,15ZM2,6.85l9-1.5V13H2Z"></path>
                                                        <path
                                                            d="M30.84,0l-15,2.5a1,1,0,0,0-.84,1V14a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V1a1,1,0,0,0-.35-.76A1,1,0,0,0,30.84,0ZM30,13H17V4.35L30,2.18Z"></path>
                                                        <path
                                                            d="M.84,27l11,1.83H12a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v8A1,1,0,0,0,.84,27ZM2,19h9v7.65l-9-1.5Z"></path>
                                                        <path
                                                            d="M31,17H16a1,1,0,0,0-1,1V28.5a1,1,0,0,0,.84,1l15,2.5H31a1,1,0,0,0,.65-.24A1,1,0,0,0,32,31V18A1,1,0,0,0,31,17ZM30,29.82,17,27.65V19H30Z"></path>
                                                    </g>
                                                </svg>

                                                <span className="mx-2">
                    Download for Windows
                </span>
                                            </a>
                                        </div>

                                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow">
                                            <a href="#"
                                               className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                                     viewBox="0 0 32 32">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                       stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path
                                                            d="M17,7.81a6.25,6.25,0,0,0,1.28.13,5.64,5.64,0,0,0,4-1.64A5.81,5.81,0,0,0,23.81,1,1,1,0,0,0,23,.19,5.81,5.81,0,0,0,17.7,1.7,5.81,5.81,0,0,0,16.19,7,1,1,0,0,0,17,7.81Zm2.14-4.69a3.66,3.66,0,0,1,2.81-1.05,3.66,3.66,0,0,1-1.05,2.81,3.61,3.61,0,0,1-2.81,1A3.68,3.68,0,0,1,19.12,3.12Z"></path>
                                                        <path
                                                            d="M28.16,23.28a6,6,0,0,1-.63-10.17,1,1,0,0,0,.41-.68,1,1,0,0,0-.21-.77A11.19,11.19,0,0,0,23.29,8.4a5.59,5.59,0,0,0-4.16,0l-1.79.72a3.62,3.62,0,0,1-2.67,0l-1.8-.72a5.59,5.59,0,0,0-4.16,0A11.08,11.08,0,0,0,2.34,22.12l.35.84a26.81,26.81,0,0,0,3.75,6.5,6.06,6.06,0,0,0,7.75,2.05,4,4,0,0,1,3.62,0,6.06,6.06,0,0,0,7.71-2,27.93,27.93,0,0,0,3.06-4.92A1,1,0,0,0,28.16,23.28ZM23.9,28.35a4.05,4.05,0,0,1-5.19,1.37,6.14,6.14,0,0,0-5.42,0,4.08,4.08,0,0,1-5.23-1.43,25.63,25.63,0,0,1-3.52-6.08l-.32-.78A9.06,9.06,0,0,1,9.46,10.26a3.5,3.5,0,0,1,2.66,0l1.8.72a5.64,5.64,0,0,0,4.16,0l1.8-.72a3.53,3.53,0,0,1,2.67,0,9.18,9.18,0,0,1,3,1.93,8,8,0,0,0,.87,12.34A27.67,27.67,0,0,1,23.9,28.35Z"></path>
                                                    </g>
                                                </svg>
                                                <span className="mx-2">
                    Download for Mac
                </span>
                                            </a>
                                        </div>

                                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow">
                                            <a href="#"
                                               className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                                     viewBox="0 0 32 32">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                       stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path
                                                            d="M30.34,24.73a.77.77,0,0,1-.19-.79A2.75,2.75,0,0,0,27,20.38a16,16,0,0,0-3.48-8.62c-1.12-1.61-1.8-2.63-1.53-3.44A6.55,6.55,0,0,0,21,2.53,6,6,0,0,0,16,0a6,6,0,0,0-5,2.53,6.55,6.55,0,0,0-.94,5.79c.27.81-.4,1.83-1.53,3.44A16,16,0,0,0,5,20.38a2.75,2.75,0,0,0-3.19,3.56.77.77,0,0,1-.19.79l-.35.35a2.75,2.75,0,0,0-.76,2.45,2.79,2.79,0,0,0,1.57,2l4.63,2.1a4.79,4.79,0,0,0,2,.43A5,5,0,0,0,9.66,32a4.82,4.82,0,0,0,1.71-.72A14.11,14.11,0,0,0,16,32a14.06,14.06,0,0,0,4.63-.72,4.82,4.82,0,0,0,1.71.72,5,5,0,0,0,.94.09,4.79,4.79,0,0,0,2-.43l4.63-2.1a2.82,2.82,0,0,0,1.58-2,2.78,2.78,0,0,0-.77-2.45ZM12.61,3.7A4.06,4.06,0,0,1,16,2a4,4,0,0,1,3.39,1.7,4.53,4.53,0,0,1,.66,4,3.4,3.4,0,0,0-.15.92,1.23,1.23,0,0,0-.19-.31A5.32,5.32,0,0,0,16,7a5.35,5.35,0,0,0-3.71,1.29,1.23,1.23,0,0,0-.19.31A3.4,3.4,0,0,0,12,7.68,4.56,4.56,0,0,1,12.61,3.7ZM17,9.11,16,9.8l-1-.68A5.24,5.24,0,0,1,17,9.11ZM9.27,30a2.73,2.73,0,0,1-1.69-.19L3,27.74a.77.77,0,0,1-.22-1.25l.35-.35a2.77,2.77,0,0,0,.67-2.83.75.75,0,0,1,.18-.79.78.78,0,0,1,.54-.23.81.81,0,0,1,.25,0,2.78,2.78,0,0,0,1.28.1h.06l.31-.07.07,0a2.63,2.63,0,0,0,1.11-.66l.35-.35a.77.77,0,0,1,.69-.21.78.78,0,0,1,.56.44l2.1,4.62a2.84,2.84,0,0,1,.2,1.7A2.77,2.77,0,0,1,9.27,30Zm3.62-.38a4.81,4.81,0,0,0,.52-1.4,4.69,4.69,0,0,0-.34-2.91L11,20.71a2.74,2.74,0,0,0-3.84-1.27,15.07,15.07,0,0,1,3-6.53,9.8,9.8,0,0,0,1.9-3.65.92.92,0,0,0,.39.57l3,2A1,1,0,0,0,16,12a1,1,0,0,0,.56-.17l3-2a.94.94,0,0,0,.38-.57,9.8,9.8,0,0,0,1.9,3.65,15.07,15.07,0,0,1,3,6.53,2.76,2.76,0,0,0-1.81-.31,2.81,2.81,0,0,0-2,1.58l-2.1,4.63a4.74,4.74,0,0,0,.18,4.31,14,14,0,0,1-6.22,0Zm16.16-1.91-4.63,2.1a2.72,2.72,0,0,1-1.69.19,2.77,2.77,0,0,1-2.18-2.17,2.84,2.84,0,0,1,.2-1.7l2.1-4.62a.78.78,0,0,1,.56-.44h.15a.79.79,0,0,1,.54.22l.35.35a2.69,2.69,0,0,0,1.11.66l.07,0,.31.07h0a2.58,2.58,0,0,0,1.29-.09.78.78,0,0,1,1,1,2.75,2.75,0,0,0,.66,2.83l.35.35a.75.75,0,0,1,.22.68A.78.78,0,0,1,29.05,27.74Z"></path>
                                                    </g>
                                                </svg>

                                                <span className="mx-2">
                    Download for Linux
                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <div>
                            {/* Hero Section */}
                            <section id="hero"
                                     className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
                                {/* Hero Container */}
                                <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
                                    <img src={introIllustration} alt="" className="mx-auto"/>
                                    <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
                                        All your files in one secure location, accessible from anywhere.
                                    </h1>

                                    <a href="/pricing">
                                        <button className="p-3 rounded-full w-52 bg-red-400 hover:scale-95">
                                            Get Started
                                        </button>
                                    </a>
                                </div>
                            </section>

                            {/* Features Section */}
                            <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
                                {/* Features Container */}
                                <div className="container mx-auto px-6 pb-32">
                                    {/* First Row */}
                                    <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
                                        {/* Item 1 */}
                                        <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                            <div className="flex items-center justify-center h-24 mb-6">
                                                <img src={iconAnywhere} alt=""/>
                                            </div>
                                            <h3 className="text-xl font-bold">Access your file from anywhere</h3>
                                            <p className="max-w-md">
                                                Our desktop app is designed to work seamlessly across Windows, Mac, and
                                                Linux, providing a consistent user experience.
                                            </p>
                                        </div>
                                        {/* Item 2 */}
                                        <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                            <div className="flex items-center justify-center h-24 mb-6">
                                                <img src={iconSecurity} alt=""/>
                                            </div>
                                            <h3 className="text-xl font-bold">Security you can trust</h3>
                                            <p className="max-w-md">
                                                2-factor authentication and user-controlled encryption are just a
                                                couple of the security features we allow to help secure your
                                                files.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Second Row */}
                                    <div
                                        className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
                                        {/* Item 3 */}
                                        <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                            <div className="flex items-center justify-center h-24 mb-6">
                                                <img src={iconCollaboration} alt=""/>
                                            </div>
                                            <h3 className="text-xl font-bold">Fast and Secure Transfers</h3>
                                            <p className="max-w-md">
                                                Experience lightning-fast and highly secure file transfers, ensuring
                                                your data reaches its destination without compromise.
                                            </p>
                                        </div>
                                        {/* Item 4 */}
                                        <div className="flex flex-col items-center space-y-2 md:w-1/2">
                                            <div className="flex items-center justify-center h-24 mb-6">
                                                <img src={iconAnyFile} alt=""/>
                                            </div>
                                            <h3 className="text-xl font-bold">User-Friendly Interface</h3>
                                            <p className="max-w-md">
                                                Navigate with ease through our user-friendly interface, designed to make
                                                file transferring a breeze for all users.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="productive" className="bg-white dark:bg-darkBlue">
                                {/* Productive Container */}
                                <div
                                    className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
                                    {/* Image */}
                                    <div className="md:w-1/2">
                                        <img src={stayProductive} alt="" className="mb-10"/>
                                    </div>
                                    {/* Content */}
                                    <div className="flex flex-col items-start md:w-1/2">
                                        <div className="flex flex-col space-y-5">
                                            <h4 className="max-w-md text-xl font-bold md:text-4xl">
                                                Stay productive, wherever you are
                                            </h4>
                                            <p className="text-md md:text-lg">
                                                Explore the capabilities of our file transfer app and discover how it
                                                can revolutionize your digital workflow. With its intuitive interface
                                                and powerful features, our app is designed to make file transferring a
                                                seamless and efficient process.
                                            </p>

                                            <p className="text-md md:text-lg">
                                                See what our app can do and how it can adapt to your needs. From
                                                real-time syncing to cross-platform compatibility, the app is packed
                                                with features that are designed to enhance productivity and
                                                collaboration
                                            </p>
                                        </div>

                                        {/* Link */}
                                        <div className="block mt-4">
                                            <a href="#" className="border-b border-accentCyan text-accentCyan">
                                                See how EzeApp works ????TO DO THIS ??
                                                <img src={iconArrow} alt="" className="inline ml-2 pb-1 scale-150"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
                                {/* Testimonials Container */}
                                <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
                                    {/* Boxes Container */}
                                    <div
                                        className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                                        {/* Quotes Image */}
                                        <img src={bgQuotes} alt=""
                                             className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"/>

                                        {/* Box 1 */}
                                        <div
                                            className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
                                            <p className="text-sm leading-5 md:text-lg">
                                                The real-time syncing feature is fantastic. It has made collaboration so
                                                much easier for our remote team. Highly recommended!
                                            </p>
                                            {/* Customer Info */}
                                            <div className="flex space-x-4">
                                                <img src={profile1} alt=""
                                                     className="w-10 h-10 rounded-full"/>
                                                <div>
                                                    <h5 className="text-sm font-semibold">Satish Patel</h5>
                                                    <p className="text-xs font-extralight">Founder & CEO. Company 1</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Box 2 */}
                                        <div
                                            className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
                                            <p className="text-sm leading-5 md:text-lg">
                                                I've tried many file transfer tools, but this one stands out. EzeApp
                                                cross-platform compatibility is a lifesaver, and the interface is so
                                                user-friendly.
                                            </p>
                                            {/* Customer Info */}
                                            <div className="flex space-x-4">
                                                <img src={profile2} alt=""
                                                     className="w-10 h-10 rounded-full"/>
                                                <div>
                                                    <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                                                    <p className="text-xs font-extralight">Founder & CEO. Company 2</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Box 3 */}
                                        <div
                                            className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
                                            <p className="text-sm leading-5 md:text-lg">
                                                The real-time syncing feature is fantastic. It has made collaboration so
                                                much easier for our remote team. Highly recommended EZE APP!
                                            </p>
                                            {/* Customer Info */}
                                            <div className="flex space-x-4">
                                                <img src={profile3} alt=""
                                                     className="w-10 h-10 rounded-full"/>
                                                <div>
                                                    <h5 className="text-sm font-semibold">Eva Boyd</h5>
                                                    <p className="text-xs font-extralight">Founder & CEO. Company 3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="early-access" className="relative px-6 dark:bg-darkBlue2 md:px-0">
                                <div
                                    className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
                                    <h5 className="text-2xl font-bold">Get early access today</h5>
                                    <p className="text-sm">

                                        Get ahead of the curve by securing your early access to our revolutionary file
                                        transfer app today! Our starter tier is incredibly generous, and signing up
                                        only takes a minute. If you have any questions, our dedicated support team is
                                        ready to assist. Don't wait, start experiencing the future of file transfers
                                        today!
                                    </p>
                                    {/* Input & Button Container */}
                                    <div
                                        className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                                        <div className="w-full md:flex-1">
                                            <input
                                                type="text"
                                                className="w-full px-10 py-3 rounded-full focus:outline-none"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        <button
                                            href="#"
                                            className="w-full p-3 px-6 rounded-full bg-red-400 md:w-56 hover:scale-95">
                                            Check prices
                                        </button>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </div>
            </div>


        </GuestLayout>
    );
};

export default Download;
