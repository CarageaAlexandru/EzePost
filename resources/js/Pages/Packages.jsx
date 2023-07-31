import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import Pagination from "@/Components/Pagination.jsx";
import Package from "@/Components/Package.jsx";

export default function Packages({auth, packages}) {
    console.log(packages);
    const pages = packages.last_page;
    console.log(pages)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Packages</h2>}
        >
            <Head title="Packages"/>

            <div className="py-10">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 ">
                        {/*     PLACE CONTENT HERE   */}
                        <h1>PACKAGES PAGE </h1>
                        {/*STACKED LIST */}
                        <ul role="list" className="divide-y divide-gray-200">
                            {packages.data.map((pkg) => (
                                <Package key={pkg.id} pkg={pkg}/>
                            ))}
                        </ul>

                        {/*   DYNAMIC PAGINATION */}
                        <Pagination class="mt-6" links={packages.links}/>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
