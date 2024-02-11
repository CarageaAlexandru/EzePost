// NavBar.jsx
import {Link} from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function NavBar({auth}) {
    const user = auth ? auth.user : null;
    console.log(user, "Navbar")

    return (
        <div className="bg-white border-b border-gray-100 w-full fixed top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
                </Link>
                {user ? (
                    <>
                        <Link
                            href={"/"}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Home
                        </Link>

                        <Link
                            href={route('pricing')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Pricing
                        </Link>

                        <Link
                            href={route('download')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Download
                        </Link>

                        <Link
                            href={route('contact')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Contact Us
                        </Link>

                        <Link
                            href={route('about')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            About Us
                        </Link>
                        {/*render the login only if there is no user, else, dashboard */}

                        <Link
                            href={route('login')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Dashboard
                        </Link>

                        {user.role === "admin" && (
                            <Link
                                href={route('admin.dashboard')}
                                className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                            >
                                Admin Dashboard
                            </Link>
                        )}
                        <Link
                            href={route('logout')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Log out
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={"/"}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Home
                        </Link>

                        <Link
                            href={route('pricing')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Pricing
                        </Link>

                        <Link
                            href={route('download')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Download
                        </Link>

                        <Link
                            href={route('contact')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Contact Us
                        </Link>

                        <Link
                            href={route('about')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            About Us
                        </Link>

                        <Link
                            href={route('login')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="font-semibold text-black hover:text-white hover:bg-gray-800 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800 px-2 py-2 rounded transition-colors duration-200 focus:outline-none"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
