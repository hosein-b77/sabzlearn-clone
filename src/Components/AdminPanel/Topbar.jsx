import React, { useEffect, useState, useCallback } from "react";

export default function Topbar() {
    const [adminInfo, setAdminInfo] = useState({});
    const [adminNotifications, setAdminNotifications] = useState([]);
    const [showNotifList, setShowNotifList] = useState(false);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const localStorageData = JSON.parse(localStorage.getItem("user"));
                const response = await fetch(`http://localhost:4000/v1/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${localStorageData.token}`,
                    },
                });
                const data = await response.json();
                console.log(data);
                setAdminInfo(data);
                setAdminNotifications(data.notifications);
            } catch (error) {
                console.error("Error fetching admin data:", error);
            }
        };

        fetchAdminData();
    }, []);

    const removeNotif = useCallback((id) => {
        try {
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            fetch(`http://localhost:4000/v1/notifications/see/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${localStorageData.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdminNotifications(prevNotifications =>
                        prevNotifications.filter(notif => notif._id !== id)
                    );
                });
        } catch (error) {
            console.error("Error removing notification:", error);
        }
    }, []);

    return (
        <div className="fixed left-0 right-72 top-0 h-32 bg-slate-100 flex items-center justify-between px-5">
            <div className="topbar-right flex items-center gap-x-8">
                <input className="p-2 bg-cyan-400 text-slate-500 rounded-lg placeholder:text-white" type="text" placeholder="جستجو ..." />
                <div className="relative">
                    <ul
                        className={`absolute p-3 z-50 w-[400px] h-72 overflow-auto bg-slate-300 rounded-lg transition-opacity duration-300 ease-in-out ${showNotifList ? "opacity-100 visible top-12" : "opacity-0 invisible top-0"}`}
                    >
                        {adminNotifications.length === 0 && <p className="text-center text-yellow-700">نوتیفیکیشنی در حال حاضر برای شما وجود ندارد</p>}
                        {adminNotifications.map((notif, index) => (
                            <li key={notif._id} className="text-[14px] text-gray-800 py-2 flex items-center justify-between">
                                <div className="flex gap-x-2">
                                    <span className="text-red-600">{index}: </span><span>{notif.msg}</span>
                                </div>
                                <div>
                                    <button className="text-sky-500" onClick={() => removeNotif(notif._id)}>مشاهده گردید</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setShowNotifList(prev => !prev)}>
                        {adminNotifications.length === 0 ? (
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        ) : (
                            <svg className='notification size-10' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            <div className="topbar-left flex items-center gap-x-16">
                <div className="name flex items-center gap-x-3">
                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                    <h2 className="font-bold">{adminInfo.name}</h2>
                </div>
                <div className="rounded-full w-20 h-20 overflow-hidden">
                    <img className="object-cover w-full h-full" src={adminInfo.profile} alt="profile-image" />
                </div>
            </div>
        </div>
    );
}
