import {Head, router} from '@inertiajs/react';
import AuthenticatedAdmin from "@/Layouts/AdminLayout.jsx";
import React, {useRef} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";


export default function Receipt({auth, files, receipt}) {

    console.log(files)

// Function to generate the PDF
    const generatePDF = () => {
        const pdf = new jsPDF("p", "mm", "a4"); // A4 size

        const addImageToPDF = (pdfContent) => {
            html2canvas(pdfContent).then((canvas) => {
                const imgData = canvas.toDataURL("image/jpeg", 1.0);

                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                const aspectRatio = canvasWidth / canvasHeight;

                const pdfWidth = 210; // A4 width
                const pdfHeight = pdfWidth / aspectRatio;

                pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
                pdf.save(`proof_of_delivery-${receipt.id}.pdf`);
            });
        };

        const pdfContainer = document.getElementById("pdf-container");
        addImageToPDF(pdfContainer);
    };


    return (
        <AuthenticatedAdmin auth={auth}>
            <Head title="Admin Dashboard"
                  header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}/>

            <div className="py-12" id="pdf-container">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-bold mb-4">Proof of Delivery</h1>
                                <a
                                    className="max-w-sm text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200
                                         dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center
                                         w-full text-center cursor-pointer"
                                    onClick={generatePDF}
                                >
                                    Generate PDF
                                </a>
                            </div>
                            {/* File Details */}
                            <div className="mb-12 mt-12">
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-base text-left text-gray-700 dark:text-gray-600">
                                        <thead
                                            className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col"
                                                className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                                Filename
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                                File Size
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                                Time Sent
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                                Time Received
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {files.map((file) => (
                                            <tr key={file.id}
                                                className="border-b border-gray-300 dark:border-gray-600">
                                                <td className="px-4 py-2">{file.file_name}</td>
                                                <td className="px-4 py-2">{file.file_size_transfer}</td>
                                                <td className="px-4 py-2">{file.ltime_send_start}</td>
                                                <td className="px-4 py-2">{file.ltime_recv_end}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            {/* Sender and Receiver Details */}


                            <div className="relative overflow-x-auto">
                                <table
                                    className="w-full text-base text-left text-gray-700 dark:text-gray-500 font-bold">
                                    <thead
                                        className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                                    <tr>
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                            Receiver
                                        </th>
                                        <th className="px-6 py-4">Sender</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_username}</td>
                                        <td className="px-4 py-2">{files[0].sender_username}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_displayname}</td>
                                        <td className="px-4 py-2">{files[0].sender_displayname}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_pub_port}</td>
                                        <td className="px-4 py-2">{files[0].sender_pub_port}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_prv_ip}</td>
                                        <td className="px-4 py-2">{files[0].sender_prv_ip}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_pub_ip}</td>
                                        <td className="px-4 py-2">{files[0].sender_pub_ip}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_prv_port}</td>
                                        <td className="px-4 py-2">{files[0].sender_prv_port}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_OS}</td>
                                        <td className="px-4 py-2">{files[0].sender_OS}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_OS_version}</td>
                                        <td className="px-4 py-2">{files[0].sender_OS_version}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_device_name}</td>
                                        <td className="px-4 py-2">{files[0].sender_device_name}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300 dark:border-gray-600">
                                        <td className="px-4 py-2">{files[0].receiver_device_username}</td>
                                        <td className="px-4 py-2">{files[0].sender_device_username}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </AuthenticatedAdmin>
    );
}
