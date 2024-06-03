import React from 'react';

const DataTable = ({ title, data, deleteUser }) => {
    
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold text-blue-600 mb-4">لیست {title}</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">R</th>
                        <th className="py-2 px-4 border-b">نام و خانوادگی</th>
                        <th className="py-2 px-4 border-b">شماره</th>
                        <th className="py-2 px-4 border-b">ایمیل</th>
                        <th className="py-2 px-4 border-b">ویرایش</th>
                        <th className="py-2 px-4 border-b">حذف</th>
                        <th className="py-2 px-4 border-b">بن</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 && (
                            data.filter(user => user.role !== 'ADMIN').map((user, index) => {
                                return (
                                    <tr key={user._id} className='text-center'>
                                        <td className="py-2 px-4 border-b">{index + 1}</td>
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.phone === "" ? 'ثبت نشده' : user.phone}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-blue-500 text-white py-1 px-2 rounded">ویرایش</button>
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <button onClick={()=>deleteUser(user._id)} className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-red-500 text-white py-1 px-2 rounded">بن</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
