import {useForm} from "@inertiajs/inertia-react";
import {useState} from "react";
import axios from "axios";
import StandardLayout from "@/Layouts/StandardLayout";
import Card from "@/Layouts/Card";
import FormInput from "@/Components/FormInput";
import FormSelect from "@/Components/FormSelect";



export default function AddVehicle({transmissions}) {
    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm({
        license_plate: '',
        make: '',
        model: '',
        type: '',
        year: '',
        fuel_type: '',
        transmission: '',
        seats: '',
        color: '',
    });
    console.log(errors);
    const handleLicensePlateChange = async (e) => {
        const newLicensePlate = e.target.value;
        // setLicensePlate(newLicensePlate);

        try {
            const response = await axios.get(`/api/vehicles/license-plate?license_plate=${newLicensePlate}`);
            const vehicle = response.data;
            console.log(vehicle);

            setData({
                license_plate: vehicle.licensePlate,
                make: vehicle.make,
                model: vehicle.model,
                type: vehicle.type,
                year: vehicle.year,
                fuel_type: vehicle.fuelType,
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
        post(route('vehicles.store'));
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
                            value={data.license_plate}
                            required
                            onChange={(e) => {
                                setData('license_plate', e.target.value);
                                handleLicensePlateChange(e);
                            }}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Second section */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Make"
                            name="make"
                            type="text"
                            readOnly={true}
                            value={data.make}
                            error={errors.make}
                        />
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Model"
                            name="model"
                            type="text"
                            readOnly={true}
                            value={data.model}
                            error={errors.model}
                        />
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Type"
                            name="type"
                            type="text"
                            readOnly={true}
                            value={data.type}
                            error={errors.type}
                        />
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Year"
                            name="year"
                            type="text"
                            readOnly={true}
                            value={data.year}
                            error={errors.year}
                        />
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Fuel type"
                            name="fuelType"
                            type="text"
                            readOnly={true}
                            value={data.fuel_type}
                            error={errors.fuel_type}
                        />
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Seats"
                            name="seats"
                            type="text"
                            readOnly={true}
                            value={data.seats}
                            error={errors.seats}
                        />
                        <FormInput
                            inputClassName={"w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"}
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            label="Color"
                            name="color"
                            type="text"
                            readOnly={true}
                            value={data.color}
                            error={errors.color}
                        />
                        <FormSelect
                            labelClassName={"block mb-2 text-sm font-medium text-gray-700"}
                            selectClassName={"w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"}
                            label="Transmission"
                            name="transmission"
                            options={transmissions}
                            required={true}
                            handleChange={(e) => setData('transmission', e.target.value)}
                            value={data.transmission}
                            error={errors.transmission}
                        />

                    </div>

                    {/* Third section */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-2 bg-blue-500 text-white rounded-lg"
                            disabled={processing}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Card>
        </StandardLayout>
    )
}
