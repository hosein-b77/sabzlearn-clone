import React, { useEffect, useState } from 'react'
import DataTable from '../../Components/AdminPanel/DataTable'
import swal from 'sweetalert'
import Input from '../../Components/Input'
import { useForm } from '../../hooks/useForm'
import {
    requiredValidator,
    minValidator,
    maxValidator,
} from "./../../validators/rules";
export default function Category() {
    const [allCategory, setAllCategory] = useState([])
    const [formState, onInputHandler] = useForm(
        {
            title: {
                value: "",
                isValid: false,
            },
            shortname: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    useEffect(() => {
        getAllCategory()
    }, [])
    function getAllCategory() {
        fetch('http://localhost:4000/v1/category')
            .then(res => res.json())
            .then(data => { console.log(data); setAllCategory(data) })
    }
    const deleteCategory = (catID) => {
        swal({
            title: "ایا از حذف این دسته بندی مطمعن هستید؟",
            icon: 'warning',
            buttons: ['خیر', 'بلی']
        }).then(result => {
            if (result) {
                const localStorageData = JSON.parse(localStorage.getItem("user"));
                fetch(`http://localhost:4000/v1/category/${catID}`, {
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
                                getAllCategory()
                            })
                        }
                    })

            }
        })
    }
    const createNewCategory = (event) => {
        const localStorageData = JSON.parse(localStorage.getItem("user"))

        const newCategoryInfo = {
            title: formState.inputs.title.value,
            name: formState.inputs.shortname.value,
        };

        fetch("http://localhost:4000/v1/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorageData.token}`,
            },
            body: JSON.stringify(newCategoryInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                swal({
                    title: "دسته بندی مورد نظر با موفقیت اضافه شد",
                    icon: "success",
                    buttons: "اوکی",
                    className: 'text-center'
                }).then(() => {
                    getAllCategory();
                });
            });
    };

    return (
        <>
            <div>
                <h2 className='container font-iranSans-bold mt-40 mb-10'>افزودن دسته بندی جدید</h2>
                <div className='container flex items-center gap-x-20 mb-10'>
                    <Input
                        className="p-2 rounded-lg"
                        element="input"
                        onInputHandler={onInputHandler}
                        type="text"
                        id="title"
                        placeholder="لطفا عنوان را وارد کنید..."
                        validations={[minValidator(5), maxValidator(20)]}
                    />
                    <Input
                        className="p-2 rounded-lg"
                        element="input"
                        onInputHandler={onInputHandler}
                        type="text"
                        id="shortname"
                        placeholder="لطفا اسم کوتاه را وارد کنید..."
                        validations={[minValidator(5), maxValidator(20)]}
                    />
                    <button className='bg-blue-500 px-8 py-2 rounded-xl text-white' onClick={createNewCategory}>ثبت</button>
                </div>


            </div>
            <DataTable title="دسته بندی" headers={['دسته بندی', 'ویرایش', 'حذف']}>
                {
                    allCategory.length > 0 && (
                        allCategory.map((category, index) => {
                            return (
                                <tr key={category._id} className='text-center'>
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{category.title}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-blue-500 text-white py-1 px-2 rounded">ویرایش</button>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button onClick={() => deleteCategory(category._id)} className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
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

