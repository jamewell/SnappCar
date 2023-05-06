import React from "react";
import SideBar from "@/Layouts/SideBar/SideBar";

export default function StandardLayout({ header = null, children}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                <aside className="min-h-screen sticky top-0">
                    <SideBar/>
                </aside>

                <main className="w-full">
                    {header && (
                        <header className="bg-white shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                        </header>
                    )}

                    <main>{children}</main>
                </main>
            </div>

        </div>
    )
}
