import React from 'react';
import {FaDownload} from "react-icons/fa6";
import {CiReceipt} from "react-icons/ci";

export default function Package({pkg}) {
    return (
        <div className="flex justify-between items-start py-5">
            <div className="flex-1 flex flex-col gap-y-2">
                <span
                    className="text-base font-semibold leading-6 text-gray-900">{pkg.file_name}</span>
                <span
                    className="text-sm leading-5 text-gray-500">FROM: {pkg.sender_displayname}({pkg.sender_vepost_addr})
                </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <span className="text-sm text-gray-700">
                    File Size: {pkg.file_size_original}
                </span>
            </div>
            <div className="flex-1 flex flex-col items-end">
                <span className="text-sm font-semibold text-gray-800">
                    {pkg.time_send_start}
                </span>
                <div className="flex gap-x-6 mt-2">
                    <a href={'home'} className="text-2xl text-purple-600">
                        <FaDownload/>
                    </a>
                    <a href={'home'} className="text-2xl text-red-500 mr-5">
                        <CiReceipt/>
                    </a>
                </div>
            </div>
        </div>
    );
}

