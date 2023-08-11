import {usePage} from "@inertiajs/inertia-react";
import StandardLayout from "@/Layouts/StandardLayout";
import {BiCloudUpload} from "react-icons/all";
import UserInfo from "@/Components/Users/UserInfo";


export default function ViewUser() {
    const { user, profile } = usePage().props;

    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View User</h2>}
        >
            <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                <div className="col-span-full xl:col-auto">
                    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                            <img
                                className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                                alt="profile pic"
                                src="https://preview.cruip.com/mosaic/images/user-64-01.jpg"
                            />
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                                    Profile picture
                                </h3>
                                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    JPG, GIF or PNG. Max size of 800K
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        <BiCloudUpload className="mr-2" />
                                        Upload picture
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <UserInfo user={user} profile={profile} />
                    <div
                        className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <h3 className="mb-4 text-xl font-semibold dark:text-white">Password information</h3>
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="current-password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current
                                        password</label>
                                    <input type="text" name="current-password" id="current-password"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="••••••••" required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                                        password</label>
                                    <input data-popover-target="popover-password" data-popover-placement="bottom"
                                           type="password" id="password"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="••••••••" required="">
                                        {/*<div data-popover="" id="popover-password" role="tooltip"*/}
                                        {/*     className="absolute z-10 inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 opacity-0 invisible"*/}
                                        {/*     style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(428.8px, 2453.6px, 0px);"*/}
                                        {/*     data-popper-placement="bottom"*/}
                                        {/*>*/}
                                        {/*    <div className="p-3 space-y-2">*/}
                                        {/*        <h3 className="font-semibold text-gray-900 dark:text-white">Must have at*/}
                                        {/*            least 6 characters</h3>*/}
                                        {/*        <div className="grid grid-cols-4 gap-2">*/}
                                        {/*            <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>*/}
                                        {/*            <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>*/}
                                        {/*            <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>*/}
                                        {/*            <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>*/}
                                        {/*        </div>*/}
                                        {/*        <p>It’s better to have:</p>*/}
                                        {/*        <ul>*/}
                                        {/*            <li className="flex items-center mb-1">*/}
                                        {/*                <svg className="w-4 h-4 mr-2 text-green-400 dark:text-green-500"*/}
                                        {/*                     aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"*/}
                                        {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                                        {/*                    <path fillRule="evenodd"*/}
                                        {/*                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"*/}
                                        {/*                          clipRule="evenodd"></path>*/}
                                        {/*                </svg>*/}
                                        {/*                Upper &amp; lower case letters*/}
                                        {/*            </li>*/}
                                        {/*            <li className="flex items-center mb-1">*/}
                                        {/*                <svg className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"*/}
                                        {/*                     aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"*/}
                                        {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                                        {/*                    <path fillRule="evenodd"*/}
                                        {/*                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                                        {/*                          clipRule="evenodd"></path>*/}
                                        {/*                </svg>*/}
                                        {/*                A symbol (#$&amp;)*/}
                                        {/*            </li>*/}
                                        {/*            <li className="flex items-center">*/}
                                        {/*                <svg className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"*/}
                                        {/*                     aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"*/}
                                        {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                                        {/*                    <path fillRule="evenodd"*/}
                                        {/*                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                                        {/*                          clipRule="evenodd"></path>*/}
                                        {/*                </svg>*/}
                                        {/*                A longer password (min. 12 chars.)*/}
                                        {/*            </li>*/}
                                        {/*        </ul>*/}
                                        {/*    </div>*/}
                                        {/*    <div data-popper-arrow=""*/}
                                        {/*         style="position: absolute; left: 0px; transform: translate3d(139.2px, 0px, 0px);"></div>*/}
                                        {/*</div>*/}
                                    </input>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="confirm-password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                        password</label>
                                    <input type="text" name="confirm-password" id="confirm-password"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="••••••••" required=""/>
                                </div>
                                <div className="col-span-6 sm:col-full">
                                    <button
                                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        type="submit">Save all
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 px-4 xl:grid-cols-2 xl:gap-4"></div>
            {/*<div className="flex items-center justify-start w-full max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">*/}
            {/*    <img*/}
            {/*        src="https://preview.cruip.com/mosaic/images/user-64-01.jpg"*/}
            {/*        alt="user"*/}
            {/*        className="w-32 h-32 rounded-full mr-6"*/}
            {/*    />*/}
            {/*    <div className="flex flex-col justify-between">*/}
            {/*        <div>*/}
            {/*            <h2 className="text-2xl font-bold text-gray-800 mb-2">*/}
            {/*                {profile.first_name} {profile.last_name}*/}
            {/*            </h2>*/}
            {/*            <p className="text-gray-700 text-base">*/}
            {/*                {user.email}*/}
            {/*            </p>*/}
            {/*            <p className="text-gray-700 text-base">*/}
            {/*                {profile.phone}*/}
            {/*            </p>*/}
            {/*            <p className="text-gray-700 text-base">*/}
            {/*                {profile.date_of_birth}*/}
            {/*            </p>*/}
            {/*            <p className="text-gray-700 text-base">*/}
            {/*                {profile.address} {profile.house_number}*/}
            {/*            </p>*/}
            {/*            <p className="text-gray-700 text-base">*/}
            {/*                {profile.postal_code} {profile.city}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </StandardLayout>
    )
}
