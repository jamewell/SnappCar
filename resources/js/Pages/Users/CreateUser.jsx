import React from "react";
import {useForm} from "@inertiajs/inertia-react";
import StandardLayout from "@/Layouts/StandardLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import Card from "@/Layouts/Card";

export default function CreateUser({ roles }) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create User</h2>}
        >
            <Card>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel forInput="first_name" value="First name" />

                        <TextInput
                            type="text"
                            name="first_name"
                            value={data.first_name}
                            className="mt-1 block w-full"
                            autoComplete="first_name"
                            isFocused={true}
                            handleChange={e => setData('first_name', e.target.value)}
                            required
                        />

                        <InputError message={errors.first_name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="last_name" value="Last name" />

                        <TextInput
                            type="text"
                            name="last_name"
                            value={data.last_name}
                            className="mt-1 block w-full"
                            autoComplete="last_name"
                            isFocused={true}
                            handleChange={e => setData('last_name', e.target.value)}
                            required
                        />

                        <InputError message={errors.last_name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="email" value="Email" />

                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="email"
                            handleChange={e => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="role" value="Role" />

                        <Select
                            name="role"
                            value={data.role}
                            className="mt-1 block w-full"
                            handleChange={e => setData('role', e.target.value)}
                            required={true}
                            options={roles}
                        />

                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="password" value="Password" />

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={e => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" processing={processing}>
                            Create
                        </PrimaryButton>
                    </div>
                </form>
            </Card>
        </StandardLayout>
    )
}
