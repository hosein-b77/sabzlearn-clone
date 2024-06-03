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
      <DataTable title="کاربران" data={usersList} deleteUser={deleteUser} banUser={banUser} />
    </>
  )
}