import React, { useState } from "react";
import swal from 'sweetalert';

export default function Discounts() {
    const [discount, setDiscount] = useState("");

    const setDiscounts = (event) => {
        event.preventDefault();
        const reqBody = {
            discount,
        };

        fetch(`http://localhost:4000/v1/offs/all`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token
                    }`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        })
            .then((res) => {
                if (res.ok) {
                    swal({
                        title: 'کمپین با موفقیت ایجاد شد',
                        icon: 'success',
                        buttons: "خیلی هم عالی",
                    });
                }
            });
    };

    return (
        <>
            <div className="text-2xl font-bold mb-6">
                <span>برگزاری کمپین جدید</span>
            </div>
            <form className="space-y-6">
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg font-medium">درصد تخفیف</label>
                        <input
                            type="text"
                            value={discount}
                            placeholder="لطفا درصد تخفیف همگانی را وارد کنید..."
                            onChange={(event) => setDiscount(event.target.value)}
                            className="border border-gray-300 p-2 rounded"
                        />
                        <span className="text-red-600"></span>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            onClick={setDiscounts}
                        >
                            ایجاد کمپین
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
