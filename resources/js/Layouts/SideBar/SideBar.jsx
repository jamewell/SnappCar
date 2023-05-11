import React, {useState} from "react";
import {
    BiLogInCircle,
    BiSearchAlt2, BsArrowLeft,
    FaUsers,
    MdDashboard,
    RiEBike2Fill,
    RiProfileLine
} from "react-icons/all";
import SideBarItem from "@/Layouts/SideBar/SideBarItem";

export default function () {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title: "Dashboard", icon: <MdDashboard/>, href: "dashboard", spacing: true},
        {
            title: "Users",
            icon: <FaUsers/>,
            submenu: true,
            submenuItems: [
                {title: "Add user", href: '/users/create'},
                {title: "View users", href: '/users/'}
            ]
        },
        {
            title: "Scooters",
            icon: <RiEBike2Fill/>,
            submenu: true,
            submenuItems: [
                {title: "Add scooter", href: '/scooters/create'},
            ]
        },
        {title: "Profile", icon: <RiProfileLine/>, spacing: true },
        {title: "Logout", icon: <BiLogInCircle/>, href: route('logout'), logout: true },
    ]

    return (
        <div className={`${open ? "w-72" : "w-28"} duration-300 h-screen p-5 pt-8 bg-slate-800 relative`} >
            <BsArrowLeft className={`absolute cursor-pointer rounded-full -right-3
            top-9 w-7 border-2 border-slate-800 bg-gray-50 text-2xl text-slate-800
            ${!open && "rotate-180"}`}
                         onClick={() => setOpen(!open)}
            />

            <div className={`inline-flex`}>
                <RiEBike2Fill className={`bg-amber-500 text-3xl
                rounded cursor-pointer block float-left mr-2
                duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1 className={`text-gray-50 origin-left font-medium
                    text-xl duration-300 ${!open && "scale-0"}`}
                >
                    Scooter Rental
                </h1>
            </div>

            <div className={`flex items-center rounded-md bg-gray-400 mt-6
                ${!open ? "px-2.5" : "px-4"} py-2`}>
                <BiSearchAlt2 className={`text-white text-2xl block
                float-left cursor-pointer ${open && "mr-2"}`}/>

                <input type={"search"} className={`text-base bg-transparent w-full text-white
                outline-none border-hidden ${!open && "hidden"}`}/>
            </div>

            <ul className="pt-2">
                {Menus.map((menu, index) => (
                    <>
                        <SideBarItem menu={ menu } open={open} index={index} />
                    </>
                ))}
            </ul>
        </div>
    )
}
