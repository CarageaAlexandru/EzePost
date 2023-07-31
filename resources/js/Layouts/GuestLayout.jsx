// GuestLayout.jsx
import NavBar from '@/Components/NavBar';

export default function Guest({children, auth}) {
    console.log(auth, "GUEST LAYOUT")
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar auth={auth}/>
            <div className="flex-1">
                <main className="p-8 mt-10">{children}</main>
            </div>
            
        </div>
    );
}
