import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import {Link} from '@inertiajs/react';

export default function AuthenticatedAdmin({auth, header, children}) {
    const admin = auth.user;
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <nav className="bg-white border-r border-gray-100 w-64 min-h-screen">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800"/>
                        </Link>
                    </div>

                    <div className="mt-8">
                        <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                            Dashboard
                        </NavLink>
                        <ul className="flex flex-col py-4 space-y-1">
                            <li>
                                {/*Start of the sidebar nav*/}

                                <span
                                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 cursor-default"
                                >
                                <span className="inline-flex justify-center items-center ml-4">

                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        ></path>
                                    </svg>

                                </span>
                                <Link
                                    href={route('admin.receipts')}
                                >
                                    <span className="ml-2 text-sm tracking-wide truncate">
                                    Generate Receipts
                                    </span>
                                </Link>
                                </span>

                            </li>
                            <li>
                                {/*Start of the sidebar nav*/}
                                <span
                                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 cursor-default"
                                >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        ></path>
                                    </svg>
                                </span>
                                    <Link
                                        href={route('admin.change-plans')}
                                    >
                                    <span className="ml-2 text-sm tracking-wide truncate">
                                    Change Prices
                                    </span>
                                </Link>

                                </span>
                            </li>

                        </ul>
                    </div>

                    <div className="mt-8">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center hover:bg-gray-50 border-0 hover:border-l-8 hover:border-indigo-500 px-4 mx-auto py-3 text-sm leading-4 font-medium text-gray-600 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {admin.name}

                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <div className="flex-1">
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
