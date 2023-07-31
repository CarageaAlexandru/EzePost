import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';


export default function Cancel({auth}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cancelled</h2>}
        >
            <Head title="Cancelled"/>

            <div className="py-10">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        {/*     PLACE CONTENT HERE   */}
                        <div className="bg-gray-100 h-screen">
                            <div className="bg-white p-6  md:mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="text-red-500 w-16 h-16 mx-auto my-6">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                <div className="text-center">
                                    <h3 className="md:text-2xl text-base text-red-400 font-semibold text-center">Payment
                                        not taken!</h3>
                                    <p className="text-gray-600 my-2">We are sorry but something went wrong and we could
                                        not complete the payment.</p>
                                    <p> Please try again! </p>
                                    <div className="py-10 text-center">
                                        <a href={route('pricing')}
                                           className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                            Go back to Pricing
                                        </a>
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
