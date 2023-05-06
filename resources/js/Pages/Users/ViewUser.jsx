import {usePage} from "@inertiajs/inertia-react";
import StandardLayout from "@/Layouts/StandardLayout";
import Card from "@/Layouts/Card";


export default function ViewUser() {
    const { user, profile } = usePage().props;

    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View User</h2>}
        >
            <div className="flex items-center justify-start w-full max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
                <img
                    src="https://preview.cruip.com/mosaic/images/user-64-01.jpg"
                    alt="user"
                    className="w-32 h-32 rounded-full mr-6"
                />
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {profile.first_name} {profile.last_name}
                        </h2>
                        <p className="text-gray-700 text-base">
                            {user.email}
                        </p>
                        <p className="text-gray-700 text-base">
                            {profile.phone}
                        </p>
                        <p className="text-gray-700 text-base">
                            {profile.date_of_birth}
                        </p>
                        <p className="text-gray-700 text-base">
                            {profile.address} {profile.house_number}
                        </p>
                        <p className="text-gray-700 text-base">
                            {profile.postal_code} {profile.city}
                        </p>
                    </div>
                </div>
            </div>
        </StandardLayout>
    )
}
