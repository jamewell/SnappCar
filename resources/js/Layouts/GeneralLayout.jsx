import React from "react";
import Sidebar from "@/Components/Sidebar";

export default function GeneralLayout({ auth, header, children }) {
    console.log(auth);
    return (
        <div className={"min-h-screen bg-gray-100"}>
            <div className="flex">
                {auth.role === 'admin' &&
                    <aside className={`h-screen sticky top-0`}>
                        <Sidebar></Sidebar>
                    </aside>
                }

                <main className={`w-full`}>
                    {header && (
                        <header className="w-full bg-white shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}
                    {children}
                </main>
            </div>
        </div>
    )
}
