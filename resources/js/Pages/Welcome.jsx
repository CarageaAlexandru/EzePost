import {Head, Link} from '@inertiajs/react';
import NavBar from "@/Components/NavBar.jsx";
export default function Welcome({auth}) {
    return (
        <>
            <Head title="Welcome"/>
            <div className="min-h-screen bg-gray-100">
                <NavBar auth={auth}/>
                <section key="1" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center">
                    <div className="container grid gap-6 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center xl:grid xl:gap-8 xl:gap-y-16 xl:gap-x-8 xl:grid-cols-2">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Secure package delivery via UDP
                                </h1>
                                <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                                    EzePost allows you to securely send packages over the internet via FTP. Fast, reliable, and secure
                                    delivery for your most important files.
                                </p>
                                <div className="flex justify-center items-center">
                                    <Link
                                        className="btn btn-primary justify-center w-full inline-flex sm:w-auto py-3 px-6 mr-10 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105"
                                        href={route('register')}
                                        style={{ backgroundColor: '#4F46E5', color: '#FFFFFF' }} // Style for primary button
                                    >
                                        Sign Up
                                    </Link>
                                    <Link
                                        className="btn btn-ghost justify-center w-full inline-flex sm:w-auto py-3 px-6  rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105"
                                        href={route('about')}
                                        style={{ borderColor: '#4F46E5', color: '#4F46E5' }} // Style for ghost button
                                    >
                                        Learn More
                                    </Link>
                                </div>

                            </div>
                            <img
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                height="281"
                                width="500"
                                src="https://source.unsplash.com/500x281/?programming"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
