import React from "react";

export default function UserTableHeader({headers}) {

    return (
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                        <input
                            id="checkbox-all"
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
                </th>
                { headers && headers.map((item, index) =>
                    <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                        {item}
                    </th>
                )}
                <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                >
                    Edit
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                >
                    Delete
                </th>
            </tr>
        </thead>
    )
}
