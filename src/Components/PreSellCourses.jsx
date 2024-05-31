import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import CourseBox from './CourseBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

export default function PreSellCourses() {
    const [preSells, setPreSells] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/v1/courses/presell")
            .then(res => res.json())
            .then(data => setPreSells(data));
    }, []);

    return (
        <div className="presell">
            <div className="container">
                <SectionHeader
                    title="دوره های در حال پیش فروش"
                    desc="متن تستی برای توضیحات دوره های پیش فروش"
                />

                <div className="courses-content">
                    <div className="container">
                        <div className="row px-4">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false
                                }}
                                modules={[Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                {preSells.map((course) => (
                                    <SwiperSlide key={course._id}>
                                        <CourseBox {...course} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
