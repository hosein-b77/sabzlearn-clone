import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'
import swal from 'sweetalert'
export default function AdminContacts() {
    const [allContacts, setAllContact] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/v1/contact')
            .then(res => res.json())
            .then(data => {
                console.log('all contacts: ', data)
                setAllContact(data)
            })
    }, [])
    const seeMsg = (body) => {
        swal({
            title: 'پیغام کاربر',
            icon: 'success',
            text: body,
            buttons: 'مشاهده گردید',
        
        })
    }
    return (
        <>
            <DataTable title="کاربران" headers={['نام و نام خانوادگی', 'شماره تماس', 'ایمیل', 'مشاهده', 'حذف', 'پاسخ']}>

                {allContacts.length > 0 && (allContacts.map((contact, index) => {
                    return (
                        <tr key={contact._id} className='text-center'>
                            <td className="py-2 px-4 border-b">{index + 1}</td>
                            <td className="py-2 px-4 border-b">{contact.name}</td>
                            <td className="py-2 px-4 border-b">{contact.phone}</td>
                            <td className="py-2 px-4 border-b">{contact.email}</td>
                            <td className="py-2 px-4 border-b">
                                <button onClick={() => seeMsg(contact.body)} className="bg-blue-500 text-white py-1 px-2 rounded">مشاهده</button>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-blue-500 text-white py-1 px-2 rounded">پاسخ</button>
                            </td>
                        </tr>
                    )
                })
                )
                }




            </DataTable>
        </>
    )
}
