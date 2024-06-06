import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'
import swal from 'sweetalert'
import { useForm } from "./../../hooks/useForm";
import Input from "./../../Components/Input";
import { minValidator } from "./../../validators/rules";
import Editor from '../../Components/Editor';
export default function Articles() {
  const [allArticles, setAllArticles] = useState([])

  const [categories, setCategories] = useState([]);
  const [articleCategory, setArticleCategory] = useState("-1");
  const [articleCover, setArticleCover] = useState({});
  const [articleBody, setArticleBody] = useState('')
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllArticles()
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
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
  const createArticle=(e)=>{
    e.preventDefault()
    const localStorageDate = JSON.parse(localStorage.getItem('user'))
    let formData = new FormData()
    formData.append('title', formState.inputs.title.value)
    formData.append('shortName', formState.inputs.shortName.value)
    formData.append('description', formState.inputs.description.value)
    formData.append('categoryID', articleCategory)
    formData.append('cover', articleCover)
    formData.append('body', articleBody)

    fetch(`http://localhost:4000/v1/articles`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorageDate.token}`
      },
      body: formData
    }).then(res => {
      if (res.ok) {
        swal({
          title: 'مقاله جدید با موفقیت ایجاد شد',
          icon: 'success',
          buttons: 'اوکی'
        }).then(() => {
          getAllArticles()
        })
      }
    })
  }
  return (
    <>

      <div className="mt-44 mb-5" id="home-content">
        <div className="container mx-auto">
          <div className="home-title text-right mb-8">
            <span className="text-2xl font-bold">افزودن مقاله جدید</span>
          </div>
          <form className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="title">عنوان</label>
                <Input
                  element="input"
                  type="text"
                  id="title"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(8)]}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <span className="text-red-500 text-xs"></span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="shortName">لینک</label>
                <Input
                  element="input"
                  type="text"
                  id="shortName"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-red-500 text-xs"></span>
              </div>
            </div>
            <div className="col-span-12">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="description">چکیده</label>
                <Input
                  element="textarea"
                  type="text"
                  id="description"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-48"
                />
                <span className="text-red-500 text-xs"></span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="cover">کاور</label>
                <input onChange={(event) => {
                  setArticleCover(event.target.files[0]);
                }} type="file" id="cover" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <span className="text-red-500 text-xs"></span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="category">دسته بندی</label>
                <select className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  onChange={(event) => setArticleCategory(event.target.value)}
                >
                  <option value="-1">دسته بندی مقاله را انتخاب کنید،</option>
                  {categories.map((category) => (
                    <option value={category._id}>{category.title}</option>
                  ))}
                </select>
                <span className="text-red-500 text-xs"></span>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex justify-center">
                <input onClick={createArticle} type="submit" value="افزودن" className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </form>
          <div className='col-span-12'>
            <span>محتوا</span>
            <Editor
              value={articleBody}
              setValue={setArticleBody}
            />
          </div>

        </div>
      </div>

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
