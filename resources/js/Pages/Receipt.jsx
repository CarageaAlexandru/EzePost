import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';


export default function Receipt({auth, packages}) {
    console.log(auth, "AUTH PAVKAWE")
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Generate Receipt</h2>}
        >
            <Head title="Generate Receipt"/>

            <div className="py-10">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        {/*     PLACE CONTENT HERE   */}
                        <h1>Page</h1>
                        {packages.map((packageData) => (
                            <div key={packageData.id}>
                                <h1>Receipt</h1>
                                <button>Generate PDF</button>
                                <div>
                                    <h2>File Information</h2>
                                    <p>Filename: {packageData.file_name}</p>
                                    <p>File Size: {packageData.file_size_original}</p>
                                    <p>Time Sent: {packageData.time_send_start}</p>
                                    <p>Time Received: {packageData.time_recv_end}</p>
                                    <p>Time Opened: {packageData.time_post_opened}</p>
                                </div>
                                <div>
                                    <h2>Receiver Information</h2>
                                    <p>mpID: {packageData.mpID}</p>
                                    <p>Display Name: {packageData.receiver_displayname}</p>
                                    <p>IP: {packageData.receiver_pub_ip}</p>
                                    <p>Private Port: {packageData.receiver_prv_port}</p>
                                    <p>Public IP: {packageData.receiver_pub_ip}</p>
                                    <p>OS: {packageData.receiver_OS}</p>
                                    <p>OS Version: {packageData.receiver_OS_version}</p>
                                    <p>Device Name: {packageData.receiver_device_name}</p>
                                    <p>Device Username: {packageData.receiver_device_username}</p>
                                </div>
                                <div>
                                    <h2>Sender Information</h2>
                                    <p>mpID: {packageData.mpID}</p>
                                    <p>Display Name: {packageData.sender_displayname}</p>
                                    <p>IP: {packageData.sender_pub_ip}</p>
                                    <p>Private Port: {packageData.sender_prv_port}</p>
                                    <p>Public IP: {packageData.sender_pub_ip}</p>
                                    <p>OS: {packageData.sender_OS}</p>
                                    <p>OS Version: {packageData.sender_OS_version}</p>
                                    <p>Device Name: {packageData.sender_device_name}</p>
                                    <p>Device Username: {packageData.sender_device_username}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
