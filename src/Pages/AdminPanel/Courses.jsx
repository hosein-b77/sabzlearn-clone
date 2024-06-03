import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'

export default function Courses() {
  const [allCourses, setAllCourses] = useState([])
  useEffect(() => {
    getUsers()
  }, [])
  function getUsers() {
    fetch('http://localhost:4000/v1/courses')
      .then(res => res.json())
      .then(data => { console.log(data); setAllCourses(data) })
  }
  return (
    <>
      <DataTable title="کاربران" headers={['عنوان', 'مبلغ', 'وضعیت', 'لینک', 'مدرس', 'دسته بندی', 'ویرایش', 'حذف']}>
        {
          allCourses.length > 0 && (
            allCourses.map((course, index) => {
              return (
                <tr key={course._id} className='text-center'>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{course.name}</td>
                  <td className="py-2 px-4 border-b">{course.price === 0 ? 'رایگان' : course.price.toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{course.isComplete === 0 ? 'در حال برگزاری' : 'به اتمام رسیده'}</td>
                  <td className="py-2 px-4 border-b">{course.shortName}</td>
                  <td className="py-2 px-4 border-b">{course.creator}</td>
                  <td className="py-2 px-4 border-b">{course.categoryID.title}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded">ویرایش</button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
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
