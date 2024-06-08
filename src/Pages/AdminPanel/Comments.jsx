import React, { useEffect, useState } from 'react';
import DataTable from '../../Components/AdminPanel/DataTable';
import swal from 'sweetalert';

export default function Comments() {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        getAllComments();
    }, []);

    const getAllComments = () => {
        fetch('http://localhost:4000/v1/comments')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setAllComments(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Failed to fetch comments. Please try again later.',
                });
            });
    };

    const seeMsg = (body) => {
        swal({
            title: 'پیغام کاربر',
            icon: 'success',
            text: body,
            buttons: 'مشاهده گردید',
        });
    };

    const answerToComment = (id) => {
        const localStorageData = JSON.parse(localStorage.getItem('user'));
        if (!localStorageData || !localStorageData.token) {
            swal({
                title: 'Error',
                icon: 'error',
                text: 'You need to be logged in to answer comments.',
            });
            return;
        }

        swal({
            title: 'جواب به کامنت',
            buttons: 'ثبت',
            content: 'input',
        }).then(answer => {
            if (!answer) return;

            fetch(`http://localhost:4000/v1/comments/answer/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorageData.token}`,
                },
                body: JSON.stringify({ body:answer }),
            }).then(res => {
                if (res.ok) {
                    swal({
                        icon: 'success',
                        text: 'با موفقیت ثبت شد',
                    });
                } else {
                    swal({
                        title: 'Error',
                        icon: 'error',
                        text: 'Failed to submit answer. Please try again later.',
                    });
                }
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Failed to submit answer. Please try again later.',
                });
            });
        });
    };

    return (
        <>
            <DataTable title="کامنت ها" headers={['کاربر', 'دوره', 'مشاهده', 'پاسخ', 'ویرایش', 'حذف', 'بن']}>
                {
                    allComments.length > 0 ? (
                        allComments.map((comment, index) => (
                            <tr key={comment._id} className='text-center'>
                                <td className={`py-2 px-4 border-b ${comment.answer?'bg-green-500':'bg-red-500'} `}>{index + 1}</td>
                                <td className="py-2 px-4 border-b">{comment.creator.name}</td>
                                <td className="py-2 px-4 border-b">{comment.course}</td>
                                <td className="py-2 px-4 border-b">
                                    <button onClick={() => seeMsg(comment.body)} className="bg-blue-500 text-white py-1 px-2 rounded">مشاهده</button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button onClick={() => answerToComment(comment._id)} className="bg-blue-500 text-white py-1 px-2 rounded">پاسخ</button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white py-1 px-2 rounded">ویرایش</button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-red-500 text-white py-1 px-2 rounded">حذف</button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-red-500 text-white py-1 px-2 rounded">بن</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="py-2 px-4 border-b">No comments found</td>
                        </tr>
                    )
                }
            </DataTable>
        </>
    );
}
