import {useForm} from "@inertiajs/inertia-react";
import {useState} from "react";
import axios from "axios";
import StandardLayout from "@/Layouts/StandardLayout";
import Card from "@/Layouts/Card";



export default function AddVehicle({transmissions}) {
    const { data, setData, post, processing, errors } = useForm({
        license_plate: '',
        make: '',
        model: '',
        type: '',
        year: '',
        fuelType: '',
        transmission: '',
        seats: '',
        color: '',
    });
    const [license_plate, setLicensePlate] = useState('');

    const handleLicensePlateChange = async (e) => {
        const newLicensePlate = e.target.value;
        setLicensePlate(newLicensePlate);

        try {
            const response = await axios.get(`/api/vehicles/license-plate?license_plate=${newLicensePlate}`);
            const vehicle = response.data;

            setData({
                license_plate: vehicle.license_plate,
                make: vehicle.make,
                model: vehicle.model,
                type: vehicle.type,
                year: vehicle.year,
                fuelType: vehicle.fuelType,
                transmission: vehicle.transmission,
                seats: vehicle.seats,
                color: vehicle.color,
            })
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('vehicle.store'));
    }

    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Scooter</h2>}
        >
            <Card>

                <form
                    className="max-w-xl mx-auto"
                    onSubmit={handleSubmit}
                >
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
                                value={data.make}
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
                                value={data.model}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-700">
                                Type
                            </label>
                            <input
                                id="type"
                                name="type"
                                type="text"
                                readOnly
                                value={data.type}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="fuelType" className="block mb-2 text-sm font-medium text-gray-700">
                                Fuel type
                            </label>
                            <input
                                id="fuelType"
                                name="fuelType"
                                type="text"
                                readOnly
                                value={data.fuelType}
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
                                value={data.year}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="seats" className="block mb-2 text-sm font-medium text-gray-700">
                                Seats
                            </label>
                            <input
                                id="seats"
                                name="seats"
                                type="number"
                                readOnly
                                value={data.seats}
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
                                value={data.color}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="transmission" className="block mb-2 text-sm font-medium text-gray-700">
                                Transmission
                            </label>
                            <select
                                id="transmission"
                                name="transmission"
                                required={true}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select transmission</option>
                                {transmissions.map((transmission) => (
                                    <option key={transmission.id} value={transmission.id}>
                                        {transmission.value}
                                    </option>
                                ))}
                            </select>
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
