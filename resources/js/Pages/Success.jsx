import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';


export default function Success({auth, customer}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Success</h2>}
        >
            <Head title="Success"/>

            <div className="py-10">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        {/*     PLACE CONTENT HERE   */}
                        <div className="bg-gray-100 h-screen">
                            <div className="bg-white p-6  md:mx-auto">
                                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                                    <path fill="currentColor"
                                          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                    </path>
                                </svg>
                                <div className="text-center">
                                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment
                                        Done!</h3>
                                    <p className="text-gray-600 my-2">Thank you for completing your secure online
                                        payment.</p>
                                    <p> Have a great day {customer.name}! </p>
                                    <div className="py-10 text-center">
                                        <a href={route('dashboard')}
                                           className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                            Go to Dashboard
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
