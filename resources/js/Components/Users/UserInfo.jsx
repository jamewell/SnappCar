import FormInput from "@/Components/FormInput";
import {useForm, usePage} from "@inertiajs/inertia-react";


export default function UserInfo() {
    const { user, profile } = usePage().props;
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
    });

    function updateProfile(e) {
        e.preventDefault();
        post(route('users.update', user));
    }

    return (
        <div
            className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        >
            <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>
            <form action={updateProfile}>
                <div className="grid grid-cols-6 gap-6">
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="First Name"
                        name="first-name"
                        type="text"
                        placeholder={"Bonnie"}
                        value={data.first_name}
                        error={errors && errors.first_name}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Last Name"
                        name="last-name"
                        type="text"
                        placeholder={"Green"}
                        value={data.last_name}
                        error={errors &&  errors.last_name}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Email"
                        name="email"
                        type="email"
                        placeholder={"john@doe.com"}
                        value={data.email}
                        error={errors &&  errors.email}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder={"(+31) 61234 5678"}
                        value={data.phone}
                        error={errors &&  errors.phone}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Birthday"
                        name="date_of_birth"
                        type="date"
                        placeholder={"12-12-1990"}
                        value={data.date_of_birth}
                        error={errors &&  errors.date_of_birth}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Address"
                        name="address"
                        type="text"
                        placeholder={"Street 1"}
                        value={data.address}
                        error={errors &&  errors.address}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="House number"
                        name="house_number"
                        type="text"
                        placeholder={"1C"}
                        value={data.house_number}
                        error={errors &&  errors.house_number}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="City"
                        name="city"
                        type="text"
                        placeholder={"Rotterdam"}
                        value={data.city}
                        error={errors &&  errors.city}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Country"
                        name="country"
                        type="text"
                        placeholder={"Netherlands"}
                        value={data.country}
                        error={errors &&  errors.country}
                        required={true}
                    />
                    <FormInput
                        divClassName={"col-span-6 sm:col-span-3"}
                        inputClassName={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}
                        labelClassName={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        label="Zip/postal code"
                        name="postal_code"
                        type="text"
                        placeholder={"1234 AB"}
                        value={data.postal_code}
                        error={errors &&  errors.postal_code}
                        required={true}
                    />

                    <div className="col-span-6 sm:col-full">
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            type="submit"
                        >
                            Save all
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
