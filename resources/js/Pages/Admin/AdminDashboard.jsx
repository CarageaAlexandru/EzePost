import {Head} from '@inertiajs/react';
import AuthenticatedAdmin from "@/Layouts/AdminLayout.jsx";
import React, {useState} from "react";

export default function AdminDashboard({auth, allCustomers, customers}) {
    const [activeStatus, setActiveStatus] = useState(1);

    const DynamicCustomers = () => {
        let customersToRender = [];

        switch (activeStatus) {
            case 1: // All Customers
                customersToRender = [...customers.individualCustomers, ...customers.organizationCustomers];
                break;
            case 2: // Active Customers
                customersToRender = [...customers.individualCustomers, ...customers.organizationCustomers].filter(customer => customer.status === "active");
                break;
            case 3: // Individual Customers
                customersToRender = [...customers.individualCustomers];
                break;
            case 4: // Organization Customers
                customersToRender = [...customers.organizationCustomers];
                break;
            default:
                break;
        }

        return (
            <>
                <h1 className="bg-red-600">REMEMBER TO FETCH CLIENTS FROM DB</h1>
                <ul role="list" className="divide-y divide-gray-100">
                    {customersToRender.map((customer) => (
                        <li key={customer.username} className="flex justify-between gap-x-6 py-5">
                            <div className="flex gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{customer.displayname}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{customer.vepost_address || customer.post_address}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{customer.status}</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">{customer.type}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    return (
        <AuthenticatedAdmin auth={auth}>
            <Head title="Admin Dashboard"
                  header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            />
            <div className="py-10">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 bg-yellow-50">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <div className="px-5">
                            <ul className="flex border-b">
                                <li onClick={() => setActiveStatus(1)}
                                    className={activeStatus === 1 ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}>
                                    <span>All Customers</span>
                                    <span
                                        className="inline-flex items-center justify-center p-3 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {allCustomers.totalCustomers}
                                    </span>
                                </li>
                                <li onClick={() => setActiveStatus(2)}
                                    className={activeStatus === 2 ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}>
                                    <span>Active Customers</span>
                                    <span
                                        className="inline-flex items-center justify-center p-3 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {allCustomers.activeCustomers}
                                    </span>
                                </li>
                                <li onClick={() => setActiveStatus(3)}
                                    className={activeStatus === 3 ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}>
                                    <span>Individual Customers</span>
                                    <span
                                        className="inline-flex items-center justify-center p-3 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {allCustomers.individualCustomers}
                                    </span>
                                </li>
                                <li onClick={() => setActiveStatus(4)}
                                    className={activeStatus === 4 ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}>
                                    <span>Organization Customers</span>
                                    <span
                                        className="inline-flex items-center justify-center p-3 h-6 w-6 rounded-full bg-red-500 text-white text-xs ml-2">
                                                {allCustomers.organizationCustomers}
                                    </span>
                                </li>
                            </ul>
                            <DynamicCustomers/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedAdmin>
    );
}
