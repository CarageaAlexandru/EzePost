import {Head} from '@inertiajs/react';
import NavBar from "@/Components/NavBar.jsx";

export default function Welcome({auth}) {
    console.log(auth, "WELCOME")
    return (
        <>
            <Head title="Welcome"/>
            <div className="min-h-screen bg-gray-100">
                <NavBar auth={auth}/>
            </div>
        </>
    );
}
