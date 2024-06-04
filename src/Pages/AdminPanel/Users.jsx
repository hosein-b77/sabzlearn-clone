import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'
import swal from 'sweetalert';
export default function Users() {
  const [usersList, setUsersList] = useState([])
  useEffect(() => {
    getUsers()
  }, [])

  function getUsers() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch('http://localhost:4000/v1/users', {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      }
    })
      .then(res => res.json())
      .then(data => { console.log(data); setUsersList(data) })
  }
  const banUser = (userID) => {
    swal({
      title: "ایا از بن کاربر مطمعن هستید؟",
      icon: 'warning',
      buttons: ['خیر', 'بلی']
    }).then(result => {
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          }
        })
          .then(res => {
            if (res.ok) {
              swal({
                title: "با موفقیت بن گردید",
                icon: 'success',
                buttons: 'ok'
              })
            }
          })

      }
    })

  }
  const deleteUser = (commentID) => {
    swal({
      title: "ایا از حذف کاربر مطمعن هستید؟",
      icon: 'warning',
      buttons: ['خیر', 'بلی']
    }).then(result => {
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/users/${commentID}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          }
        })
          .then(res => {
            if (res.ok) {
              swal({
                title: "با موفقیت حدف گردید",
                icon: 'success',
                buttons: 'ok'
              }).then(() => {
                getUsers()
              })
            }
          })

      }
    })

  }
  return (
    <>
      <DataTable title="کاربران" headers={['نام و نام خانوادگی', 'شماره', 'ایمیل', 'ویرایش', 'حذف', 'بن']}>
        {
          usersList.length > 0 && (
            usersList.filter(user => user.role !== 'ADMIN').map((user, index) => {
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
                    <button onClick={() => deleteUser(user._id)} className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => banUser(user._id)} className="bg-red-500 text-white py-1 px-2 rounded">بن</button>
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