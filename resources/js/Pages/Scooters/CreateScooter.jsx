import {useState} from "react";
import StandardLayout from "../../Layouts/StandardLayout";
import Card from "@/Layouts/Card";
import {useForm} from "@inertiajs/inertia-react";
import axios from "axios";

export default function CreateScooter() {
    const { data, setData, post, processing, errors } = useForm({});
    const [license_plate, setLicensePlate] = useState('');

    const handleLicensePlateChange = async (e) => {
        const newLicensePlate = e.target.value;
        setLicensePlate(newLicensePlate);

        try {
            const response = await axios.get(`/api/vehicles/license-plate?license_plate=${newLicensePlate}`);
            const vehicle = response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Scooter</h2>}
        >
            <Card>

                <form className="max-w-xl mx-auto">
                    {/* First section */}
                    <div className="mb-4">
                        <label htmlFor="license_plate" className="block mb-2 text-lg font-medium text-center">
                            License plate
                        </label>
                        <input
                            id="license_plate"
                            name="license_plate"
                            type="text"
                            required
                            onChange={handleLicensePlateChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Second section */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="make" className="block mb-2 text-sm font-medium text-gray-700">
                                Make
                            </label>
                            <input
                                id="make"
                                name="make"
                                type="text"
                                readOnly
                                value="Tesla"
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-700">
                                Model
                            </label>
                            <input
                                id="model"
                                name="model"
                                type="text"
                                readOnly
                                value="Model S"
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-700">
                                Year
                            </label>
                            <input
                                id="year"
                                name="year"
                                type="text"
                                readOnly
                                value="2022"
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-700">
                                Color
                            </label>
                            <input
                                id="color"
                                name="color"
                                type="text"
                                readOnly
                                value="Red"
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Third section */}
                    <div className="text-center">
                        <button type="submit" className="px-8 py-2 bg-blue-500 text-white rounded-lg">
                            Save
                        </button>
                    </div>
                </form>
            </Card>
        </StandardLayout>
    )
}
