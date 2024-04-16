import React from 'react'
import CourseBoxesItem from './CourseBoxesItem'
export default function MainInfoSection() {
    return (
        <main className="main">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-start-1 col-end-8">
                        <div className="course">
                            {/* <!-- Start Course Boxes --> */}
                            <div className="course-boxes">
                                <div className="grid grid-cols-3">
                                    <CourseBoxesItem title='وضعیت دوره:' txt='به اتمام رسیده' icon='course-boxes__box-right-icon fas fa-graduation-cap'/>
                                    <CourseBoxesItem title='مدت زمان دوره:' txt='19 ساعت' icon='course-boxes__box-right-icon fas fa-clock'/>
                                    <CourseBoxesItem title='آخرین بروزرسانی:' txt='1401/03/02' icon='course-boxes__box-right-icon fas fa-calendar-alt'/>
                                    <CourseBoxesItem title='روش پشتیبانی' txt='آنلاین' icon='course-boxes__box-right-icon fas fa-user-alt'/>
                                    <CourseBoxesItem title='پیش نیاز:' txt='HTML CSS' icon='course-boxes__box-right-icon fas fa-info-circle'/>
                                    <CourseBoxesItem title='نوع مشاهده:' txt='ضبط شده / آنلاین' icon='course-boxes__box-right-icon fas fa-play'/>
                                </div>
                            </div>
                            {/* <!-- Finish Course Boxes -->

                          <!-- Start Course Progress --> */}
                            <div className="course-progress">
                                <div className="course-progress__header">
                                    <i className="fas fa-chart-line course-progress__icon"></i>
                                    <span className="course-progress__title">
                                        درصد پیشرفت دوره: 100%
                                    </span>
                                </div>
                                {/* <div className="progress course-progress__bar">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-[75%]" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> */}
                                
                            </div>
                            {/* <!-- Finish Course Progress -->

                          <!-- Start Introduction --> */}

                            <div className="introduction">
                                <div className="introduction__item">
                                    <span className="introduction__title title">
                                        آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار
                                    </span>
                                    <img src="/images/info/1.gif" alt="course info image" className="introduction__img img-fluid" />
                                    <p className="introduction__text">
                                        کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید!
                                    </p>
                                    <p className="introduction__text">
                                        در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار نداشته باشید
                                    </p>
                                </div>
                                <div className="introduction__item">
                                    <span className="introduction__title title">
                                        هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)
                                    </span>
                                    <img src="/images/info/2.jpg" alt="course info image" className="introduction__img img-fluid" />
                                    <p className="introduction__text">
                                        وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم، از کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در حالی که من اولین بارم بود اسم Formik را می شنیدم و تا اون موقع از این کتابخانه ها استفاده نکرده بودم.
                                    </p>
                                    <p className="introduction__text">
                                        همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از مهم ترین مباحثی هستند که هر برنامه نویس وب برای ورود به بازار کار و کسب درآمد بهتر، راحت و بیشتر باید با آن ها کار کرده باشد                  </p>
                                    <p className="introduction__text">
                                        همان طور که از اسم این دوره مشخص است، هدف از این دوره آموزش 20 مورد از کاربردی ترین و پر استفاده ترین کتابخانه های جاوا اسکریپت است تا شما بتوانید بعد از این دوره با قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی وب را ادامه دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و در نهایت وارد بازار کار شده و کسب درآمد کنید.
                                    </p>
                                    <p className="introduction__text">
                                        شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی کار نکرده باشید، باید بلد باشید که چطور باید یک کتابخانه جدید را یاد بگیرید. فرض کنید یک یک کتابخانه جدید ساخته شد. آیا شما باید منتظر دوره آموزشی باشید؟! قطعا نه.
                                    </p>
                                    <p className="introduction__text">
                                        در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا بعد از گذراندن دوره، دیگر وابسته هیچ دوره یا شخص خاصی نباشید و اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
                                    </p>
                                </div>
                                <div className="introduction__btns">
                                    <a href="#" className="introduction__btns-item">دانلود همگانی ویدیوها</a>
                                    <a href="#" className="introduction__btns-item">دانلود همگانی پیوست‌ها</a>
                                </div>

                                <div className="introduction__topic">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    معرفی دوره
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body introduction__accordion-body">
                                                    <div className="introduction__accordion-right">
                                                        <span className="introduction__accordion-count">1</span>
                                                        <i className="fab fa-youtube introduction__accordion-icon"></i>
                                                        <a href="#" className="introduction__accordion-link">
                                                            معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                                                        </a>
                                                    </div>
                                                    <div className="introduction__accordion-left">
                                                        <span className="introduction__accordion-time">
                                                            18:34
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion" id="accordionExample2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                    معرفی دوره
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body introduction__accordion-body">
                                                    <div className="introduction__accordion-right">
                                                        <span className="introduction__accordion-count">1</span>
                                                        <i className="fab fa-youtube introduction__accordion-icon"></i>
                                                        <a href="#" className="introduction__accordion-link">
                                                            معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                                                        </a>
                                                    </div>
                                                    <div className="introduction__accordion-left">
                                                        <span className="introduction__accordion-time">
                                                            18:34
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion" id="accordionExample3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                    معرفی دوره
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
                                                <div className="accordion-body introduction__accordion-body">
                                                    <div className="introduction__accordion-right">
                                                        <span className="introduction__accordion-count">1</span>
                                                        <i className="fab fa-youtube introduction__accordion-icon"></i>
                                                        <a href="#" className="introduction__accordion-link">
                                                            معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                                                        </a>
                                                    </div>
                                                    <div className="introduction__accordion-left">
                                                        <span className="introduction__accordion-time">
                                                            18:34
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Finish Introduction -->

                          <!-- Start Teacher Details --> */}

                            <div className="techer-details">
                                <div className="techer-details__header">
                                    <div className="techer-details__header-right">
                                        <img src="/images/info/teacher.jfif" alt="Teacher Profile" className="techer-details__header-img" />
                                        <div className="techer-details__header-titles">
                                            <a href="#" className="techer-details__header-link">محمدامین سعیدی راد</a>
                                            <span className="techer-details__header-skill">
                                                Front End & Back End Developer
                                            </span>
                                        </div>
                                    </div>
                                    <div className="techer-details__header-left">
                                        <i className="fas fa-chalkboard-teacher techer-details__header-icon"></i>
                                        <span className="techer-details__header-name">مدرس</span>
                                    </div>
                                </div>
                                <p className="techer-details__footer">
                                    اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال با زبان جاوا اندروید کار میکردم .بعد تصمیم گرفتم در زمینه وب فعالیت داشته باشم.و..
                                </p>
                            </div>

                            {/* <!-- Finish Teacher Details --> */}

                        </div>
                    </div>

                    <div className="col-start-9 col-end-12">
                        <div className="courses-info">
                            <div className="course-info">
                                <div className="course-info__register">
                                    <span className="course-info__register-title">
                                        <i className="fas fa-graduation-cap course-info__register-icon"></i>
                                        دانشجوی دوره هستید
                                    </span>
                                </div>
                            </div>
                            <div className="course-info">
                                <div className="course-info__total">
                                    <div className="course-info__top">
                                        <div className="course-info__total-sale">
                                            <i className="fas fa-user-graduate course-info__total-sale-icon"></i>
                                            <span className="course-info__total-sale-text">
                                                تعداد دانشجو :
                                            </span>
                                            <span className="course-info__total-sale-number">
                                                178
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-info__bottom">
                                        <div className="course-info__total-comment">
                                            <i className="far fa-comments course-info__total-comment-icon"></i>
                                            <span className="course-info__total-comment-text">
                                                67 دیدگاه
                                            </span>
                                        </div>
                                        <div className="course-info__total-view">
                                            <i className="far fa-eye course-info__total-view-icon"></i>
                                            <span className="course-info__total-view-text">
                                                14,234 بازدید
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-info">
                                <div className="course-info__header-short-url">
                                    <i className="fas fa-link course-info__short-url-icon"></i>
                                    <span className="course-info__short-url-text">
                                        لینک کوتاه
                                    </span>
                                </div>
                                <span className="course-info__short-url">
                                    https://sabzlearn.ir/?p=117472
                                </span>
                            </div>
                            <div className="course-info">
                                <span className="course-info__topic-title">
                                    سرفصل های دوره
                                </span>
                                <span className="course-info__topic-text">
                                    برای مشاهده و یا دانلود دوره روی کلمه
                                    <a href="#" className='text-blue font-bold'>
                                        لینک
                                    </a>
                                    کلیک کنید
                                </span>
                            </div>
                            <div className="course-info">
                                <span className="course-info__courses-title">دوره های مرتبط</span>
                                <ul className="course-info__courses-list">
                                    <li className="course-info__courses-list-item">
                                        <a href="#" className="course-info__courses-link">
                                            <img src="/images/courses/js_project.png" alt="Course Cover" className="course-info__courses-img" />
                                            <span className="course-info__courses-text">
                                                پروژه های تخصصی با جاوا اسکریپت
                                            </span>
                                        </a>
                                    </li>
                                    <li className="course-info__courses-list-item">
                                        <a href="#" className="course-info__courses-link">
                                            <img src="/images/courses/fareelancer.png" alt="Course Cover" className="course-info__courses-img" />
                                            <span className="course-info__courses-text">
                                                تعیین قیمت پروژه های فریلنسری
                                            </span>
                                        </a>
                                    </li>
                                    <li className="course-info__courses-list-item">
                                        <a href="#" className="course-info__courses-link">
                                            <img src="/images/courses/nodejs.png" alt="Course Cover" className="course-info__courses-img" />
                                            <span className="course-info__courses-text">
                                                دوره Api نویسی
                                            </span>
                                        </a>
                                    </li>
                                    <li className="course-info__courses-list-item">
                                        <a href="#" className="course-info__courses-link">
                                            <img src="/images/courses/jango.png" alt="Course Cover" className="course-info__courses-img" />
                                            <span className="course-info__courses-text">
                                                متخصص جنگو
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}