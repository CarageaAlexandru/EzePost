import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {HiOutlineArrowUturnRight} from "react-icons/hi2";
import {HiOutlineArrowUturnLeft} from "react-icons/hi2";
import {HiLockOpen} from "react-icons/hi2";
import {HiSquare3Stack3D} from "react-icons/hi2";

export default function Dashboard({auth, counts}) {
    let dynamicRoute = {
        'all': 'all',
        'received': 'received',
        'sent': 'sent',
        'viewed': 'viewed'
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-10">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        {/*     PLACE CONTENT HERE   */}
                        <div className="grid gap-4 grid-cols-2 gap-4 p-4 m-4 bg-gray-300/50">
                            {/*FIRST BOX*/}
                            <div
                                className="text-white bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="w-1/4 flex items-center justify-center border-r dark:border-gray-700">
                                    <HiOutlineArrowUturnRight className="h-full w-auto"/>
                                </div>
                                <div className="w-3/4 flex flex-wrap">
                                    <div className="p-4 flex flex-col h-full sm:p-7">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            Received Packages
                                        </h3>
                                        <p className="mt-1 text-gray-800 dark:text-gray-400">
                                            Here are the packages received today.
                                        </p>
                                        <div className="mt-5 sm:mt-auto flex-row flex-wrap">
                                            <a href={`/packages/${dynamicRoute.received}`}
                                               className="py-2 px-2 mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"> View
                                                Packages
                                            </a>
                                            <span
                                                className="inline-flex items-center justify-center p-4 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {counts.received}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*SECOND BOX*/}
                            <div
                                className="text-white bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="w-1/4 flex items-center justify-center border-r dark:border-gray-700">
                                    <HiOutlineArrowUturnLeft className="h-full w-auto"/>
                                </div>
                                <div className="w-3/4 flex flex-wrap">
                                    <div className="p-4 flex flex-col h-full sm:p-7">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            Sent Packages
                                        </h3>
                                        <p className="mt-1 text-gray-800 dark:text-gray-400">
                                            Here are the packages sent today.
                                        </p>
                                        <div className="mt-5 sm:mt-auto flex-row flex-wrap">
                                            <a href={`/packages/${dynamicRoute.sent}`}
                                               className="py-2 px-2 mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"> View
                                                Packages
                                            </a>
                                            <span
                                                className="inline-flex items-center justify-center p-4 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {counts.sent}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*THIRD BOX*/}
                            <div
                                className="text-white bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="w-1/4 flex items-center justify-center border-r dark:border-gray-700">
                                    <HiLockOpen className="h-full w-auto"/>
                                </div>
                                <div className="w-3/4 flex flex-wrap">
                                    <div className="p-4 flex flex-col h-full sm:p-7">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            Viewed Packages
                                        </h3>
                                        <p className="mt-1 text-gray-800 dark:text-gray-400">
                                            Here are the packages received today.
                                        </p>
                                        <div className="mt-5 sm:mt-auto flex-row flex-wrap">
                                            <a href={`/packages/${dynamicRoute.viewed}`}
                                               className="py-2 px-2 mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"> View
                                                Packages
                                            </a>
                                            <span
                                                className="inline-flex items-center justify-center p-4 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {counts.viewed}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*FOURTH BOX*/}
                            <div
                                className="text-white bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="w-1/4 flex items-center justify-center border-r dark:border-gray-700">
                                    <HiSquare3Stack3D className="h-full w-auto"/>
                                </div>
                                <div className="w-3/4 flex flex-wrap">
                                    <div className="p-4 flex flex-col h-full sm:p-7">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            All Packages
                                        </h3>
                                        <p className="mt-1 text-gray-800 dark:text-gray-400">
                                            Here are the packages received today.
                                        </p>
                                        <div className="mt-5 sm:mt-auto flex-row flex-wrap">
                                            <a href={`/packages/${dynamicRoute.all}`}
                                               className="py-2 px-2 mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"> View
                                                Packages
                                            </a>
                                            <span
                                                className="inline-flex items-center justify-center p-4 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {counts.all}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
