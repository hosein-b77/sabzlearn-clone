import React, { useEffect, useState } from "react";
import Input from "./../../Components/Input";
import { useForm } from "./../../hooks/useForm";
import { minValidator, requiredValidator } from "../../validators/rules";
import swal from "sweetalert";
import DataTable from '../../Components/AdminPanel/DataTable';


export default function Offs() {
    const [courses, setCourses] = useState([]);
    const [offs, setOffs] = useState([]);
    const [offCourse, setOffCourse] = useState("-1");
    const [formState, onInputHandler] = useForm(
        {
            code: {
                value: "",
                isValid: false,
            },
            percent: {
                value: "",
                isValid: false,
            },
            max: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    useEffect(() => {
        getAllOffs();

        fetch(`http://localhost:4000/v1/courses`)
            .then((res) => res.json())
            .then((allCourses) => setCourses(allCourses));
    }, []);

    function getAllOffs() {
        fetch(`http://localhost:4000/v1/offs`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token
                    }`,
            },
        })
            .then((res) => res.json())
            .then((allOffs) => {
                setOffs(allOffs);
            });
    }

    const createOff = (event) => {
        event.preventDefault();

        const newOffInfos = {
            code: formState.inputs.code.value,
            percent: formState.inputs.percent.value,
            course: offCourse,
            max: formState.inputs.max.value,
        };

        fetch(`http://localhost:4000/v1/offs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token
                    }`,
            },
            body: JSON.stringify(newOffInfos),
        }).then((res) => {
            console.log(res);
            if (res.ok) {
                swal({
                    title: "کد تخفیف با موفقیت ایجاد شد",
                    icon: "success",
                    buttons: "اوکی",
                }).then(() => {
                    getAllOffs();
                });
            }
        });
    };

    const removeOff = (offID) => {
        swal({
            title: "آیا از حذف کد تخفیف اطمینان دارید؟",
            icon: "warning",
            buttons: ["نه", "آره"],
        }).then((result) => {
            if (result) {
                fetch(`http://localhost:4000/v1/offs/${offID}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token
                            }`,
                    },
                }).then((res) => {
                    if (res.ok) {
                        swal({
                            title: "کد تخفیف مورد نظر با موفقیت حذف شد",
                            icon: "success",
                            buttons: "اوکی",
                        }).then(() => {
                            getAllOffs();
                        });
                    }
                });
            }
        });
    };

    return (
        <>
            <div className="container mx-auto p-4" id="home-content">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-right text-gray-800">افزودن کد تخفیف جدید</h2>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">کد تخفیف</label>
                                    <Input
                                        element="input"
                                        onInputHandler={onInputHandler}
                                        type="text"
                                        id="code"
                                        validations={[minValidator(5)]}
                                        placeholder="لطفا کد تخفیف را وارد نمایید"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                    <span className="text-red-500 text-sm mt-1"></span>
                                </div>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">درصد تخفیف</label>
                                    <Input
                                        element="input"
                                        onInputHandler={onInputHandler}
                                        type="text"
                                        id="percent"
                                        validations={[requiredValidator()]}
                                        placeholder="لطفا درصد تخفیف را وارد نمایید"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                    <span className="text-red-500 text-sm mt-1"></span>
                                </div>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">حداکثر استفاده</label>
                                    <Input
                                        element="input"
                                        onInputHandler={onInputHandler}
                                        type="text"
                                        id="max"
                                        validations={[requiredValidator()]}
                                        placeholder="حداکثر استفاده از کد تخفیف"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                    <span className="text-red-500 text-sm mt-1"></span>
                                </div>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">دوره</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                        onChange={(event) => setOffCourse(event.target.value)}
                                    >
                                        <option value="-1">دوره مدنظر را انتخاب کنید</option>
                                        {courses.map((course) => (
                                            <option key={course._id} value={course._id}>
                                                {course.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="text-red-500 text-sm mt-1"></span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                onClick={createOff}
                            >
                                افزودن
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <DataTable title="تخفیف ها" headers={['کد', 'درصد', 'حداکثر استفاده', 'دفعات استفاده', 'سازنده', 'حذف']}>
                {offs.map((off, index) => (
                    <tr key={off._id} className='text-center'>
                        <td className="py-2 px-4 border-b">{index + 1}</td>
                        <td className="py-2 px-4 border-b">{off.code}</td>
                        <td className="py-2 px-4 border-b">{off.percent}</td>
                        <td className="py-2 px-4 border-b">{off.max}</td>
                        <td className="py-2 px-4 border-b">{off.uses}</td>
                        <td className="py-2 px-4 border-b">{off.creator}</td>

                        <td className="py-2 px-4 border-b">
                            <button
                                type="button"
                                className="bg-red-500 text-white py-1 px-2 rounded"
                                onClick={() => removeOff(off._id)}
                            >
                                حذف
                            </button>
                        </td>
                    </tr>
                ))}
            </DataTable>
           
        </>
    );
}
