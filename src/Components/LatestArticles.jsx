import React from 'react'
import SectionHeader from './SectionHeader'
import ArticleBox from './ArticleBox'
export default function LatestArticles() {
    return (
        <section className="articles">
            <div className="container">
                <SectionHeader title="جدیدترین مقاله ها" desc="پیش به سوی ارتقای دانش" btnTitle="تمامی مقاله ها" />


                <div className="articles__content mt-20 grid grid-cols-3 gap-x-10">
                    <ArticleBox img="images/blog/1.jpg" title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون" 
                        txt="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."/>
                    <ArticleBox img="images/blog/2.jpg" title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون" 
                        txt="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."/>
                    <ArticleBox img="images/blog/2.jpg" title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون" 
                        txt="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."/>

            

                </div>

            </div>
        </section>
    )
}
