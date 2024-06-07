import React, { useEffect, useState } from "react";
import { useForm } from "./../../hooks/useForm";
import Input from "./../../Components/Input";
import { minValidator } from "../../validators/rules";
import swal from 'sweetalert'

export default function Sessions() {
    const [courses, setCourses] = useState([]);
    const [sessionCourse, setSessionCourse] = useState('-1');
    const [sessionVideo, setSessionVideo] = useState({})
    const [free, setFree] = useState('1')
    const [formState, onInputHandler] = useForm(
        {
            title: {
                value: "",
                isValid: false,
            },
            time: {
                value: "",
                isValid: false,
            },
        },
        false
    );

    useEffect(() => {
        fetch("http://localhost:4000/v1/courses")
            .then((res) => res.json())
            .then((allCourses) => {
                console.log(allCourses);
                setCourses(allCourses);
            });
    }, []);

    const createSession = (event) => {
        event.preventDefault()

        const localStorageData = JSON.parse(localStorage.getItem('user'))

        let formData = new FormData()
        formData.append('title', formState.inputs.title.value)
        formData.append('time', formState.inputs.time.value)
        formData.append('video', sessionVideo)
        formData.append('free', free)

        fetch(`http://localhost:4000/v1/courses/${sessionCourse}/sessions`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorageData.token}`
            },
            body: formData
        }).then(res => {
            if (res.ok) {
                swal({
                    title: "جلسه مورد نظر با موفقیت اضافه شد",
                    icon: 'success',
                    buttons: 'اوکی'
                }).then(() => {
                    console.log('Get All Sessions');
                })
            }
        }).catch(err => console.log(err))

    }
    return (
        <>
            <div className="container mx-auto p-4" id="home-content">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                        <span className="text-20 font-bold text-gray-800">افزودن جلسه جدید</span>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="mb-4">
                                    <label className="block text-14 font-medium text-gray-700">عنوان جلسه</label>
                                    <Input
                                        element="input"
                                        onInputHandler={onInputHandler}
                                        type="text"
                                        id="title"
                                        validations={[minValidator(5)]}
                                        placeholder="لطفا نام جلسه را وارد کنید..."
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-14"
                                    />
                                    <span className="text-red-600 text-12 mt-1"></span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className="block text-14 font-medium text-gray-700">مدت زمان جلسه</label>
                                    <Input
                                        element="input"
                                        onInputHandler={onInputHandler}
                                        type="text"
                                        id="time"
                                        validations={[minValidator(5)]}
                                        placeholder= 'فقط دقیقه وارد شود(بدون ثانیه)'
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-14"
                                    />
                                    <span className="text-red-600 text-12 mt-1"></span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className="block text-14 font-medium text-gray-700">دوره</label>
                                    <select
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-14"
                                        onChange={event => setSessionCourse(event.target.value)}
                                    >
                                        <option value="-1">دوره مدنظر را انتخاب کنید</option>
                                        {courses.map((course) => (
                                            <option value={course._id} key={course._id}>{course.name}</option>
                                        ))}
                                    </select>
                                    <span className="text-red-600 text-12 mt-1"></span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <label className="block text-14 font-medium text-gray-700">عنوان جلسه</label>
                                    <input
                                        type="file"
                                        onChange={event => setSessionVideo(event.target.files[0])}
                                        className="mt-1 block w-full text-14 text-gray-500 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    <span className="text-red-600 text-12 mt-1"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <div>
                                <input type="radio" id="free" name="payment" value="1" onChange={(e) => setFree(e.target.value)} />
                                <label for="free">رایگان</label>
                            </div>
                            <div>
                                <input type="radio" id="pay" name="payment" value="0" onChange={(e) => setFree(e.target.value)} />
                                <label for="pay">غیر رایگان</label>
                            </div>


                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-14"
                                onClick={createSession}
                            >
                                افزودن
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    );
}
