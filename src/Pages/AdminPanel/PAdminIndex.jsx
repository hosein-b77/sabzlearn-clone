import React, { useEffect, useState } from 'react'
import AdminIndexPageCard from '../../Components/AdminPanel/AdminIndexPageCard'
export default function PAdminIndex() {
    const [adminName, setAdmin] = useState('')
    const [infos, setInfos] = useState([])
    const [lastUsers, setLastUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/v1/infos/p-admin', {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data.adminName)
                setInfos(data.infos)
                setLastUsers(data.lastUsers
                )
            })
    }, [])
    return (
        <div className='container pt-5'>
            <h2>خوش آمدید, <span className='text-emerald-700 font-bold'>{adminName}</span> </h2>
            <div className="flex justify-center gap-x-5 p-4">
                {
                    infos.length > 0 && infos.map(info =>
                    (
                        <>
                            <AdminIndexPageCard title={info.title} amount={info.count} percentage="" description="" />
                        </>
                    )
                    )
                }
            </div>
        </div>
    )
}
