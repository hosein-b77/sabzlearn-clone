import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'
import swal from 'sweetalert'
export default function Articles() {
  const [allArticles, setAllArticles] = useState([])
  useEffect(() => {
    getAllArticles()
  }, [])
  function getAllArticles() {
    fetch('http://localhost:4000/v1/articles')
      .then(res => res.json())
      .then(data => {
        console.log('all articles: ', data)
        setAllArticles(data)
      })
  }
  const removeArticle = (id) => {
    swal({
      title: "ایا از حذف این مقاله مطمعن هستید؟",
      icon: 'warning',
      buttons: ['خیر', 'بلی']
    }).then(result => {
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/articles/${id}`, {
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
                buttons: 'ok',
                className: "text-center"
              }).then(() => {
                getAllArticles()
              })
            }
          })

      }
    })
  }
  return (
    <>
      <DataTable title="مقالات" headers={['عنوان', 'لینک', 'وضعیت', 'نویسنده', 'ویرایش', 'حذف']}>
        {
          allArticles.length > 0 && (
            allArticles.map((article, index) => {
              return (
                <tr key={article._id} className='text-center'>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{article.title}</td>
                  <td className="py-2 px-4 border-b">{article.shortName}</td>
                  <td className="py-2 px-4 border-b">{article.publish === 0 ? 'منتشر نشده' : 'منتشر شده'}</td>
                  <td className="py-2 px-4 border-b">{article.creator.name}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded">ویرایش</button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => removeArticle(article._id)} className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
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
