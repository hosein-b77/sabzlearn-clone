import React from 'react'
import SectionHeader from './SectionHeader'
import AboutUsBox from './AboutUsBox'
export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="container">
                <SectionHeader title="ما چه کمکی بهتون میکنیم؟" desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست" />
                <div className="wrapper grid grid-cols-2 gap-x-10 mt-10">
                    <AboutUsBox title="دوره های اختصاصی" txt="با پشتیبانی و کیفیت بالا ارائه میده !" icon="far fa-copyright about-us__icon" />
                    <AboutUsBox title="اجازه تدریس" txt="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !" icon="fas fa-leaf about-us__icon" />
                    <AboutUsBox title="دوره پولی و رایگان" txt="براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده" icon="fas fa-gem about-us__icon" />
                    <AboutUsBox title="اهمیت به کاربر" txt="اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست" icon="fas fa-crown about-us__icon" />
                </div>
            </div>
        </div>
    )
}
