import {Head, router} from '@inertiajs/react';
import AuthenticatedAdmin from "@/Layouts/AdminLayout.jsx";
import React, {useState} from "react";
import axios from 'axios'; // You need to import axios to use it
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Package from "@/Components/Package.jsx";
import Pagination from "@/Components/Pagination.jsx";

export default function Receipts({auth, packages}) {
    const [loading, setLoading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    console.log(loading)
    const handleCheckboxChange = (e, pkg) => {
        if (e.target.checked) {
            if (selectedFiles.length === 5) {
                toast.error('You can only select 5 files at a time.');
                return;
            }
            setSelectedFiles([...selectedFiles, pkg.id]);
        } else {
            setSelectedFiles(selectedFiles.filter((id) => id !== pkg.id));
        }
    }
    const handleGenerateReceipt = () => {
        if (selectedFiles.length === 0) {
            toast.error("You must select at least one file.");
            return;
        }

        setLoading(true);

        router.post('/admin/receipt', {fileIds: selectedFiles}, {
            preserveState: true,
            onSuccess: () => {
                setLoading(false);
            },
            onError: (errors) => {
                console.error("Error generating receipt:", errors);
                toast.error('Error generating receipt. Please try again.');
                setLoading(false);
            }
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
                        <h1>Here we will display the receipts.</h1>
                        <a
                            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200
            dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full
            text-center cursor-pointer"
                            onClick={handleGenerateReceipt}
                            disabled={loading || selectedFiles.length === 0}
                        >
                            {loading ? 'Loading...' : 'Generate Receipt'}
                        </a>
                        <ul role="list" className="divide-y divide-gray-200">
                            {packages.map((pkg) => (
                                <li key={pkg.id}>
                                    <input
                                        type="checkbox"
                                        value={pkg.id}
                                        onChange={(e) => handleCheckboxChange(e, pkg)}
                                    />
                                    <Package key={pkg.id} pkg={pkg}/>
                                </li>
                            ))}
                        </ul>

                        {/*   DYNAMIC PAGINATION - Implement later for admin as well*/}
                        {/*<Pagination class="mt-6" links={packages.links}/>*/}
                    </div>
                </div>
            </div>
            <ToastContainer/>

        </AuthenticatedAdmin>
    );
}
