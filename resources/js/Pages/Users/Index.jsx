import React from "react";
import {Head} from "@inertiajs/inertia-react"
import GeneralLayout from "@/Layouts/GeneralLayout";
import UserTable from "@/Pages/Users/Table/UserTable";

export default function Index({headers, users, auth}) {

    return (
        <>

            <GeneralLayout
                auth={auth}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User Overview</h2>}
            >
                <Head title={`User overview`}/>

                <UserTable header={headers} content={users} />

            </GeneralLayout>
        </>
    )
}
