import React from "react";

export default function Topbar() {
    return (
        <div className="fixed left-0 right-72 top-0 h-32 bg-slate-100 flex items-center justify-between px-5">
            <div className="topbar-right flex items-center gap-x-8">
                <input className="p-2 bg-cyan-400 text-slate-500 rounded-lg placeholder:text-white" type="text" placeholder="جستجو ..." />
                <i className="fa-regular fa-bell"></i>
            </div>
            <div className="topbar-left flex items-center gap-x-16">
                <div className="name flex items-center gap-x-3">
                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                    <h2 className="font-bold">حسین بخشعلی زاده</h2>
                </div>
                <div className="rounded-full w-20 h-20  overflow-hidden">
                    <img className="object-cover w-full h-full" src="/images/profile.png" alt="profile-image" />
                </div>
            </div>
        </div>
    );
}
