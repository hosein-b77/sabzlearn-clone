import React from "react";
import { NavLink, useParams } from 'react-router-dom'

export default function Sidebar() {
    const route = useParams()
    const activeStyle = "bg-slate-700 block pr-4 py-3 border-l-[6px] border-[#1e83f0] !text-white rounded-r-md"
    return (
        <div className="fixed top-0 bottom-0 right-0 w-72 bg-gray-800 pt-8">
            {/* logo */}
            <div className="border-b border-slate-500 pb-5">
                <img src="/images/logo/Logo.png" alt="sabzlearn-logo" width={80} />
            </div>
            <ul className="child:child:text-slate-400 space-y-7 mt-10 pr-3  child:py-2 ">
                <li><NavLink to={"/p-admin"} className={`${route['*'] === "" ? activeStyle : ""}`}>صفحه اصلی</NavLink></li>
                <li><NavLink to={"courses"} className={({ isActive }) => isActive && activeStyle}>دوره ها</NavLink></li>
                <li><NavLink to={"menus"} className={({ isActive }) => isActive && activeStyle}>منو ها</NavLink></li>
                <li><NavLink to={"articles"} className={({ isActive }) => isActive && activeStyle}>مقاله ها</NavLink></li>
                <li><NavLink to={"users"} className={({ isActive }) => isActive && activeStyle}>کاربران</NavLink></li>
                <li><NavLink to={""}>کد های تخفیف</NavLink></li>
                <li><NavLink to={""}>دسته بندی ها</NavLink></li>

            </ul>
        </div>
    );
}
