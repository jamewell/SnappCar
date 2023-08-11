import React from 'react';
import {useForm, usePage} from "@inertiajs/inertia-react";
import StandardLayout from "@/Layouts/StandardLayout";
import Card from "@/Layouts/Card";
import FormInput from "@/Components/FormInput";
import PrimaryButton from "@/Components/PrimaryButton";
import FormSelect from "@/Components/FormSelect";

export default function EditUser() {
    const { user, profile, roles } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        first_name: profile.first_name,
        last_name: profile.last_name,
        date_of_birth: profile.date_of_birth,
        short_bio: profile.short_bio,
        phone: profile.phone,
        address: profile.address,
        house_number: profile.house_number,
        postal_code: profile.postal_code,
        city: profile.city,
        country: profile.country,
        email: user.email,
        role: user.role,
        password: '',
        password_confirmation: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('users.update', user));
    }

    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit User</h2>}
        >
            <form onSubmit={submit}>
                <Card>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Profile Details</div>
                    </div>
                    <div className="px-6 py-2">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="First name"
                                name="first_name"
                                type="text"
                                value={data.first_name}
                                handleChange={e => setData('first_name', e.target.value)}
                                error={errors.first_name}
                                required={true}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Last name"
                                name="last_name"
                                type="text"
                                value={data.last_name}
                                handleChange={e => setData('last_name', e.target.value)}
                                error={errors.last_name}
                                required={true}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Date of birth"
                                name="date_of_birth"
                                type="date"
                                value={data.date_of_birth}
                                handleChange={e => setData('date_of_birth', e.target.value)}
                                error={errors.date_of_birth}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Short bio"
                                name="short_bio"
                                type="text"
                                value={data.short_bio}
                                handleChange={e => setData('short_bio', e.target.value)}
                                error={errors.short_bio}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Phone"
                                name="phone"
                                type="text"
                                value={data.phone}
                                handleChange={e => setData('phone', e.target.value)}
                                error={errors.phone}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Address"
                                name="address"
                                type="text"
                                value={data.address}
                                handleChange={e => setData('address', e.target.value)}
                                error={errors.address}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="House number"
                                name="house_number"
                                type="text"
                                value={data.house_number}
                                handleChange={e => setData('house_number', e.target.value)}
                                error={errors.house_number}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Postal code"
                                name="postal_code"
                                type="text"
                                value={data.postal_code}
                                handleChange={e => setData('postal_code', e.target.value)}
                                error={errors.postal_code}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="City"
                                name="city"
                                type="text"
                                value={data.city}
                                handleChange={e => setData('city', e.target.value)}
                                error={errors.city}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Country"
                                name="country"
                                type="text"
                                value={data.country}
                                handleChange={e => setData('country', e.target.value)}
                                error={errors.country}
                                required={false}
                            />
                        </div>
                    </div>
                </Card>

                <Card className={"py-3"}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">User Details</div>
                    </div>
                    <div className="px-6 py-2">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Email"
                                name="email"
                                type="email"
                                value={data.email}
                                handleChange={e => setData('email', e.target.value)}
                                error={errors.email}
                                required={true}
                            />

                            <FormSelect
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                selectClassName={"mt-1 block w-full"}
                                label="Role"
                                name="role"
                                type="text"
                                value={data.role}
                                options={roles}
                                handleChange={e => setData('role', e.target.value)}
                                error={errors.role}
                                required={true}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Password"
                                name="password"
                                type="password"
                                handleChange={e => setData('password', e.target.value)}
                                error={errors.password}
                                required={false}
                            />

                            <FormInput
                                divClassName={"w-full md:w-1/2 px-3 mb-6 md:mb-1"}
                                inputClassName={"mt-1 block w-full"}
                                label="Password confirmation"
                                name="password_confirmation"
                                type="password"
                                handleChange={e => setData('password_confirmation', e.target.value)}
                                error={errors.password_confirmation}
                                required={false}
                            />

                        </div>
                    </div>
                </Card>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-3">
                    <div className="flex justify-end">
                        <PrimaryButton
                            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                            type="submit"
                            processing={processing}
                        >
                            Save
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </StandardLayout>
    )
}
