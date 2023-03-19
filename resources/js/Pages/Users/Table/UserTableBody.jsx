import React from "react";

export default function UserTableBody({content}) {

    return (

        <tbody className="divide-y divide-gray-200">
        {content && content.map(user =>
            <tr key={user.id}>
                <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                        <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label
                            htmlFor="checkbox"
                            className="sr-only"
                        >
                            Checkbox
                        </label>
                    </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {user.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {user.role}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                        className="text-green-500 hover:text-green-700"
                        href="Users#"
                    >
                        Edit
                    </a>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a
                        className="text-red-500 hover:text-red-700"
                        href="Users#"
                    >
                        Delete
                    </a>
                </td>
            </tr>
        )}
        </tbody>
    )
}
