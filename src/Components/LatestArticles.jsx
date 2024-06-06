import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import ArticleBox from './ArticleBox'
import AuthContext from '../context/authContext'
import { useContext } from 'react'
export default function LatestArticles() {
    const authContext = useContext(AuthContext)
    const [articles, setAllArticles] = useState([])
    // console.log(authContext.token)
    useEffect(() => {
        let token = authContext.token
        fetch(`http://localhost:4000/v1/articles`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => { console.log(data); setAllArticles(data) })
            .catch(err => console.log(err))
    }, [])
    return (
        <section className="articles">
            <div className="container">
                <SectionHeader title="جدیدترین مقاله ها" desc="پیش به سوی ارتقای دانش" btnTitle="تمامی مقاله ها" />


                <div className="articles__content mt-20 grid grid-cols-3 gap-x-10">
                    {
                        articles.length > 0 && (articles.filter(course => course.publish === 1).slice(0, 3).map(article => {
                            return (
                                // <ArticleBox key={article._id} img={article.cover} title={article.title} txt={article.description} link={`/article-info/${article.shortName}`}  />
                                <ArticleBox key={article._id} img={`http://localhost:4000/courses/covers/${article.cover}`} title={article.title} desc={article.description} link={`/article-info/${article.shortName}`} />
                            )
                        })

                        )
                    }

                </div>

            </div>
        </section>
    )
}
