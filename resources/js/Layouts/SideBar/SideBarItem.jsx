import React, {useState} from "react";
import {BiChevronDown} from "react-icons/all";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function SideBarItem({ menu, open }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <>
            <li className={`text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer
                                p-2 hover:bg-amber-500 rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}
                                `} onClick={menu.submenu ? () => setSubMenuOpen(!subMenuOpen) : undefined}>
                                <span className="text-2xl block float-left">
                                    {menu.icon}
                                </span>
                <span className={`text-base font-medium flex-1
                                   duration-500 ${!open && "hidden"}`}>
                                    <ResponsiveNavLink href={`${menu.href}`} method={`${menu.logout ? 'post' : 'get'}`}>
                                        {menu.title}
                                    </ResponsiveNavLink>
                                </span>
                {menu.submenu && open && (
                    <BiChevronDown className={`${subMenuOpen && "rotate-180"}`}
                                   onClick={() => setSubMenuOpen(!subMenuOpen)} />
                )}
            </li>

            {menu.submenu && subMenuOpen && open && (
                <ul>
                    {menu.submenuItems.map((submenuItem) => (
                        <li className="text-gray-200 text-sm flex items-center
                                            gap-x-4 cursor-pointer p-2 px-5 hover:bg-amber-500 rounded-md">
                            {submenuItem.title}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
