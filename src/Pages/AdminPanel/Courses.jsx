import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'
import swal from 'sweetalert'
import { useForm } from "./../../hooks/useForm";
import Input from "./../../Components/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "./../../validators/rules";



export default function Courses() {
  const [allCourses, setAllCourses] = useState([])
  const [courseCategory, setCourseCategory] = useState("-1");
  const [categories, setCategories] = useState([]);
  const [courseStatus, setCourseStatus] = useState("start");
  const [courseCover, setCourseCover] = useState({});

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      support: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllCourses()
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, [])

  function getAllCourses() {
    fetch('http://localhost:4000/v1/courses')
      .then(res => res.json())
      .then(data => { console.log(data); setAllCourses(data) })
  }

  const deleteCategory = (courseID) => {
    swal({
      title: "ایا از حذف این دوره مطمعن هستید؟",
      icon: 'warning',
      buttons: ['خیر', 'بلی']
    }).then(result => {
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/courses/${courseID}`, {
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
                getAllCourses()
              })
            }
          })

      }
    })
  }

  const selectCategory = (event) => {
    setCourseCategory(event.target.value);
  };

  const addNewCourse = (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem('user'))
    let formData = new FormData()
    formData.append('name', formState.inputs.name.value)
    formData.append('description', formState.inputs.description.value)
    formData.append('shortName', formState.inputs.shortName.value)
    formData.append('categoryID', courseCategory)
    formData.append('price', formState.inputs.price.value)
    formData.append('support', formState.inputs.support.value)
    formData.append('status', courseStatus)
    formData.append('cover', courseCover)

    if (courseCategory === "-1") {
      swal({
        icon: 'error',
        buttons: "ok",
        title: 'لطفا دسته بندی را انتخاب کنید'
      })
    } else {
      fetch(`http://localhost:4000/v1/courses`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorageData.token}`
        },
        body: formData
      }).then(res => {
        console.log(res);
        if (res.ok) {
          swal({
            title: 'دوره جدید با موفقیت اضافه شد',
            icon: 'success',
            buttons: 'اوکی'
          }).then(() => {
            getAllCourses()
          })
        }
      })
    }
  };
  return (
    <>
      <div class="container-fluid" id="home-content">
        <div class="container">
          <div class="home-title">
            <span>افزودن دوره جدید</span>
          </div>
          <form class="form">
            <div class="col-6">
              <div class="name input">
                <label class="input-title">نام دوره</label>
                <Input
                  id="name"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  placeholder="لطفا نام دوره را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title">توضیحات دوره</label>
                <Input
                  id="description"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  placeholder="لطفا توضیحات دوره را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="number input">
                <label class="input-title">Url دوره</label>
                <Input
                  id="shortName"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  isValid="false"
                  placeholder="لطفا Url دوره را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title">قیمت دوره</label>
                <Input
                  id="price"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  isValid="false"
                  placeholder="لطفا قیمت دوره را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title">نحوه پشتیبانی دوره</label>
                <Input
                  id="support"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  isValid="false"
                  placeholder="لطفا نحوه پشتیبانی دوره را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="number input">
                <label class="input-title">دسته‌بندی دوره</label>
                <select onChange={selectCategory}>
                  <option value="-1">لطفا دسته‌بندی را انتخاب کنید</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>{category.title}</option>
                  ))}
                </select>
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="file">
                <label class="input-title">عکس دوره</label>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    setCourseCover(event.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div class="col-12">
              <div class="bottom-form">
                <div class="condition">
                  <label class="input-title">وضعیت دوره</label>
                  <div class="radios">
                    <div class="available">
                      <label>
                        <span>در حال برگزاری</span>
                        <input
                          type="radio"
                          value="start"
                          name="condition"
                          checked
                          onInput={(event) =>
                            setCourseStatus(event.target.value)
                          }
                        />
                      </label>
                    </div>
                    <div class="unavailable">
                      <label>
                        <span>پیش فروش</span>
                        <input
                          type="radio"
                          value="presell"
                          name="condition"
                          onInput={(event) =>
                            setCourseStatus(event.target.value)
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="submit-btn">
                  <input className='cursor-pointer p-3 bg-blue-400 text-white' type="submit" value="افزودن" onClick={addNewCourse} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable title="دوره" headers={['عنوان', 'مبلغ', 'وضعیت', 'لینک', 'مدرس', 'دسته بندی', 'ویرایش', 'حذف']}>
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
                    <button onClick={() => deleteCategory(course._id)} className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
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
