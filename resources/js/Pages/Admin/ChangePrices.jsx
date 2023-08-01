import {Head} from '@inertiajs/react';
import AuthenticatedAdmin from "@/Layouts/AdminLayout.jsx";
import React, {useState} from "react";
import axios from 'axios'; // You need to import axios to use it
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePrices({auth, initialPlans}) {
    const [errors, setErrors] = useState({});
    const [currentPlan, setCurrentPlan] = useState(null);
    const [plans, setPlans] = useState(initialPlans); // Added state for plans to be able to update the UI when a plan is updated
    console.log(plans, "plans")
    console.log(currentPlan, "Currentplans")

    const handleOptionChange = (index, value) => {
        let optionsArray = JSON.parse(currentPlan.options);
        optionsArray[index] = value;
        setCurrentPlan({
            ...currentPlan,
            options: JSON.stringify(optionsArray),
        });
    }

    const addOption = () => {
        let optionsArray = JSON.parse(currentPlan.options);
        optionsArray.push('');
        setCurrentPlan({
            ...currentPlan,
            options: JSON.stringify(optionsArray),
        });
    }

    const removeOption = (index) => {
        let optionsArray = JSON.parse(currentPlan.options);
        optionsArray = optionsArray.filter((_, i) => i !== index);
        setCurrentPlan({
            ...currentPlan,
            options: JSON.stringify(optionsArray),
        });
    }


    const openModal = (plan) => {
        setCurrentPlan(plan);
        // Reset the errors
        setErrors({});
    }

    const closeModal = () => {
        setCurrentPlan(null);
        // Reset the errors
        setErrors({});
    }

    const handleInputChange = (event) => {
        setCurrentPlan({
            ...currentPlan,
            [event.target.name]: event.target.value,
        });
    }
    console.log(errors, "errors")

    const handleSave = () => {
        const myPromise = new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put(`/admin/plan/${currentPlan.id}`, currentPlan);
                if (response.data.status === 'success') {
                    // Update the plan in the plans array
                    const updatedPlans = plans.map((plan) =>
                        plan.id === currentPlan.id ? currentPlan : plan
                    );
                    // Update the state with the new plans array
                    setPlans(updatedPlans);
                    closeModal();
                    resolve(response);
                }
            } catch (error) {
                
                if (error.response && error.response.status === 422) {
                    setErrors(error.response.data.errors);
                    reject(error);
                } else {
                    console.error("Error updating plan:", error);
                    reject(error);
                }
            }
        });

        toast.promise(myPromise, {
            pending: 'Saving...',
            success: {render: ({data}) => `${data.data.message}`},
            error: 'An error occurred, please try again.',
        });
    }


    return (
        <AuthenticatedAdmin auth={auth}>
            <Head title="Admin Dashboard"
                  header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {/*PRICING CARD*/}
                            <div className="grid grid-cols-3 gap-4">
                                {plans.map((plan, index) => (
                                    <div key={index}
                                         className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-white">{plan.name}</h5>
                                        <h4 className="mb-4 text-xl font-medium text-gray-500 dark:text-white">{plan.type}</h4>
                                        <div className="flex items-baseline text-gray-900 dark:text-white">
                                            <span className="text-3xl font-semibold">$</span>
                                            <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                            <span
                                                className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                        </div>
                                        <p className="mt-4 text-gray-500 dark:text-gray-400">{plan.description}</p>
                                        <ul role="list" className="space-y-5 my-7">
                                            {JSON.parse(plan.options).map((option, index) => (
                                                <li key={index} className="flex space-x-3 items-center">
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-200">{option}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button type="button" onClick={() => openModal(plan)}
                                                className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Edit
                                            plan
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Modal code starts here */}
                            {currentPlan &&
                                <div
                                    className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full p-6 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                                    <div className="relative w-full max-w-4xl bg-white rounded-lg shadow">
                                        <div className="p-6 border-b border-gray-200">
                                            <h3 className="text-xl font-semibold text-gray-800">Edit Plan</h3>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="flex space-x-4">
                                                <label className="flex-grow">
                                                    <span className="text-gray-700">Type</span>
                                                    <input type="text" name="type" value={currentPlan.type || ''}
                                                           onChange={handleInputChange}
                                                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                    {errors.type &&
                                                        <p className="text-red-500 text-xs mt-2">{errors.type[0]}</p>}
                                                </label>
                                                <label className="flex-grow">
                                                    <span className="text-gray-700">Name</span>
                                                    <input type="text" name="name" value={currentPlan.name || ''}
                                                           onChange={handleInputChange}
                                                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                    {errors.name &&
                                                        <p className="text-red-500 text-xs mt-2">{errors.name[0]}</p>}
                                                </label>
                                                <label className="flex-grow">
                                                    <span className="text-gray-700">Code</span>
                                                    <input type="text" name="code" value={currentPlan.code || ''}
                                                           onChange={handleInputChange}
                                                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                    {errors.code &&
                                                        <p className="text-red-500 text-xs mt-2">{errors.code[0]}</p>}
                                                </label>
                                            </div>

                                            <div className="flex space-x-4">
                                                <label className="flex-shrink-1">
                                                    <span className="text-gray-700">Price</span>
                                                    <input type="number" name="price" value={currentPlan.price || 0}
                                                           onChange={handleInputChange}
                                                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                    {errors.price &&
                                                        <p className="text-red-500 text-xs mt-2">{errors.price[0]}</p>}
                                                </label>
                                                <label className="flex-grow">
                                                    <span className="text-gray-700">Slug</span>
                                                    <input type="text" name="slug" value={currentPlan.slug || ''}
                                                           onChange={handleInputChange}
                                                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                    {errors.slug &&
                                                        <p className="text-red-500 text-xs mt-2">{errors.slug[0]}</p>}
                                                </label>
                                                <label className="flex-grow">
                                                    <span className="text-gray-700">Stripe Plan</span>
                                                    <input type="text" name="stripe_plan"
                                                           value={currentPlan.stripe_plan || ''}
                                                           onChange={handleInputChange}
                                                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                    {errors.stripe_plan &&
                                                        <p className="text-red-500 text-xs mt-2">{errors.stripe_plan[0]}</p>}
                                                </label>
                                            </div>
                                            <label className="flex-grow">
                                                <span className="text-gray-700">Description</span>
                                                <input type="text" name="description"
                                                       value={currentPlan.description || ''}
                                                       onChange={handleInputChange}
                                                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                                                {errors.description &&
                                                    <p className="text-red-500 text-xs mt-2">{errors.description[0]}</p>}
                                            </label>

                                            {JSON.parse(currentPlan.options).map((option, index) => (
                                                <div key={index} className="flex">
                                                    <input
                                                        type="text"
                                                        value={option}
                                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                                    />
                                                    <button
                                                        className="px-3 ml-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-blue-700"
                                                        onClick={() => removeOption(index)}>Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                                onClick={addOption}>Add Option
                                            </button>


                                            {/* You can add more fields here... */}
                                        </div>
                                        <div className="p-6 border-t border-gray-200 flex justify-end">
                                            <button onClick={closeModal} type="button"
                                                    className="mr-2 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel
                                            </button>
                                            <button onClick={handleSave} type="button"
                                                    className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Save
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            }
                            {/* Modal code ends here */}
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedAdmin>
    );
}
