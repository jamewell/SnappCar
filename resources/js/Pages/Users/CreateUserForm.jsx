import React, {useState} from "react";
import GeneralLayout from "@/Layouts/GeneralLayout";
import {Head, useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";
import Card from "@/Components/UI/Card";
import CardBody from "@/Components/UI/CardBody";
export default function CreateUserForm({auth, roles}) {
    const { data, setData, errors, post, processing, reset, transform } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    })

    function submit(e) {
        e.preventDefault()
        post('create-user')
    }

    return (
        <GeneralLayout
            auth={auth}
            header={<h2 className="font-semi-bold text-xl text-gray-800 leading-tight">Create User</h2>}
        >
            <Head title={'Create user'} />

            <Card>
                <CardBody>

                    <form onSubmit={submit}>
                        <Input
                            label="First name"
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            value={data.firstName}
                            onChange={e => setData('firstName', e.target.value)}
                            error={errors.firstName}
                        />
                        <Input
                            label="Last name"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            value={data.lastName}
                            onChange={e => setData('lastName', e.target.value)}
                            error={errors.lastName}
                        />
                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            error={errors.email}
                        />
                        <Input
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            error={errors.password}
                        />
                        <Input
                            label="Password confirmation"
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            placeholder="Password confirmation"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            error={errors.password_confirmation}
                        />
                        <Select
                            label="Role"
                            id="role"
                            name="role"
                            data={roles}
                            value={data.role}
                            onChange={e => setData('role', e.target.value)}
                            required={true}
                            placeholder="Select a role"
                            error={errors.role}
                        />

                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        >
                            Submit
                        </button>
                    </form>
                </CardBody>
            </Card>

        </GeneralLayout>
    )
}
