import React, {useState} from 'react';
import {Head} from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const Pricing = ({plans, csrf}) => {
    const [planType, setPlanType] = useState('Personal');
    const [billingType, setBillingType] = useState('Monthly');
    const currentPlans = plans.filter(plan => plan.type === planType);
    return (
        <GuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Pricing"/>

            <section className="bg-white dark:bg-gray-900 mt-10">
                <div className="w-4/5 mx-auto mb-8">
                    <p className="px-4 py-4 text-center text-4xl dark:text-white text-gray-600">Choose the plan that
                        suits your needs. You can switch between monthly and yearly billing at any time.</p>
                </div>
                <div className="bg-gray-100 shadow rounded-full bg-gray-900 flex flex-col items-center mt-10">
                    <div className="bg-gray-100 shadow rounded-full flex items-center">
                        <button onClick={() => setPlanType('Personal')}
                                className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${planType === 'Personal' ? 'bg-indigo-700 text-white' : ''}`}>
                            Personal
                        </button>
                        <button onClick={() => setPlanType('Business')}
                                className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${planType === 'Business' ? 'bg-indigo-700 text-white' : ''}`}>
                            Business
                        </button>
                    </div>

                    <div className="bg-gray-100 shadow rounded-full flex items-center mt-5 mb-5">
                        <button onClick={() => setBillingType('monthly')}
                                className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${billingType === 'monthly' ? 'bg-indigo-700 text-white' : ''}`}>
                            Monthly
                        </button>
                        <button onClick={() => setBillingType('yearly')}
                                className={`bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1 ${billingType === 'yearly' ? 'bg-indigo-700 text-white' : ''}`}>
                            Yearly
                        </button>
                    </div>
                </div>


                <div className="flex flex-wrap justify-between w-4/5 mx-auto">
                    {currentPlans.map((plan, index) => (
                        <div key={index}
                             className="flex flex-col p-6 mx-2 my-2 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{plan.description}</p>
                            <div className="flex justify-center items-baseline my-8">
                               <span className="mr-2 text-5xl font-extrabold">
                                       {billingType === 'yearly' ? (plan.price * 11).toFixed(2) : (plan.price * 1).toFixed(2)}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">/{billingType}</span>
                            </div>
                            <ul className="mb-8 space-y-4 text-left">
                                {JSON.parse(plan.options).map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <form action={route('checkout')} method="POST">
                                <input type="hidden" name="_token" value={csrf}/>
                                {/*SEND THE STRIPE_PLAN -> only 1 plan has the stripe plan ATM*/}
                                <input type="hidden" name="plan" value={plan.stripe_plan}/>
                                <a className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-600">
                                    <button type="submit">
                                        Subscribe
                                    </button>
                                </a>
                            </form>
                        </div>
                    ))}
                </div>
            </section>
        </GuestLayout>
    );
};

export default Pricing;
