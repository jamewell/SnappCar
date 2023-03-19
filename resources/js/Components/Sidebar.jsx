import React, {useState} from 'react';
import { Link } from '@inertiajs/inertia-react';
import {
    BsArrowLeft,
    BiChevronDown,
    HiUsers,
    RiEBike2Fill,
    MdDashboard,
    BiSearchAlt2,
    BsFillGearFill,
    BiLogOutCircle,
} from "react-icons/all";


export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
        {title: "Dashboard", icon: <MdDashboard/>, href: "dashboard"},
        {title: "Pages", icon: <MdDashboard/>},
        {title: "Media", icon: <MdDashboard/>, spacing: true},
        {
            title: "Users",
            icon: <HiUsers/>,
            submenu: true,
            submenuItems: [
                {title: "View users", href: "/admin/users"},
                {title: "Add user"},
                {title: "Vendors"},
            ]
        },
        {title: "Profile", icon: <MdDashboard/>, spacing: true},
        {title: "Setting", icon: <BsFillGearFill/>},
        {title: "Logout", icon: <BiLogOutCircle/>},
    ]
    return (
        <div className={`${open ? "w-72" : "w-28"}
            duration-300 h-screen p-5 pt-8 bg-slate-800 relative`}
        >
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
                        <li key={index} className={`text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer
                            p-2 hover:bg-amber-500 rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}
                            `} onClick={menu.submenu ? () => setSubMenuOpen(!subMenuOpen) : undefined}>
                            <span className="text-2xl block float-left">
                                {menu.icon}
                            </span>
                            <span className={`text-base font-medium flex-1
                               duration-500 ${!open && "hidden"}`}>
                                <Link href={`${menu.href}`}>
                                    {menu.title}
                                </Link>
                            </span>
                            {menu.submenu && open && (
                                <BiChevronDown className={`${subMenuOpen && "rotate-180"}`}
                                   onClick={() => setSubMenuOpen(!subMenuOpen)} />
                            )}
                        </li>

                        {menu.submenu && subMenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, subIndex) => (
                                    <li key={subIndex} className="text-gray-200 text-sm flex items-center
                                    gap-x-4 cursor-pointer p-2 px-5 hover:bg-amber-500 rounded-md">
                                        <Link href={`${submenuItem.href}`}>
                                            {submenuItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </div>
    )
}
