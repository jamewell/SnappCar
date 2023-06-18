import StandardLayout from "@/Layouts/StandardLayout";
import {AiTwotoneEdit, TiDelete} from "react-icons/all";


export default function ViewVehicles({vehicles}) {
    return (
        <StandardLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vehicles</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">ID</th>
                                                    <th scope="col" className="px-6 py-3">Owner</th>
                                                    <th scope="col" className="px-6 py-3">License plate</th>
                                                    <th scope="col" className="px-6 py-3">Make</th>
                                                    <th scope="col" className="px-6 py-3">Model</th>
                                                    <th scope="col" className="px-6 py-3">Year</th>
                                                    <th scope="col" className="px-6 py-3">Color</th>
                                                    <th scope="col" className="px-6 py-3">Actions</th>
                                                </tr>
                                            </thead>

                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {vehicles.map((vehicle) => (
                                                    <tr key={vehicle.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.id}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.owner}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.license_plate}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.make}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.model}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.year}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{vehicle.color}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center space-x-4 text-sm">
                                                                <a href={`/vehicles/${vehicle.id}/edit`} className="text-yellow-400 hover:text-yellow-600">
                                                                    <AiTwotoneEdit  className={'color-yellow-300'}/>
                                                                </a>
                                                                <a href={`/vehicles/${vehicle.id}/delete`} className="text-red-400 hover:text-red-600">
                                                                    <TiDelete className={'color-red-300'}/>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StandardLayout>
    )
}
