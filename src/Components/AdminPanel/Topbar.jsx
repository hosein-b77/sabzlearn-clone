import React, { useEffect, useState } from "react";

export default function Topbar() {
    const [adminInfo, setAdminInfo] = useState({})
    const [adminNotifications, setAdminnotifications] = useState([])

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/auth/me`, {
            headers: {
                Authorization: `Bearer ${localStorageData.token}`,
            },
        }).then((res) => res.json())
            .then(data => {
                console.log(data);
                setAdminInfo(data)
                setAdminnotifications(data.notifications)
            })
    }, []);
    return (

        <div className="fixed left-0 right-72 top-0 h-32 bg-slate-100 flex items-center justify-between px-5">
            <div className="topbar-right flex items-center gap-x-8">
                <input className="p-2 bg-cyan-400 text-slate-500 rounded-lg placeholder:text-white" type="text" placeholder="جستجو ..." />

                {
                    (adminNotifications.length === 0) ? <i className="fa-regular fa-bell"></i> :
                        <i className="fa-solid fa-bell notification"></i>
                }
            </div>
            <div className="topbar-left flex items-center gap-x-16">
                <div className="name flex items-center gap-x-3">
                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                    <h2 className="font-bold">{adminInfo.name}</h2>
                </div>
                <div className="rounded-full w-20 h-20  overflow-hidden">
                    <img className="object-cover w-full h-full" src={adminInfo.profile} alt="profile-image" />
                </div>
            </div>
        </div>
    );
}
