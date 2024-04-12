import ArticleInfo from './Pages/ArticleInfo'
import CourseInfo from './Pages/CourseInfo'
import Category from './Pages/Category'
import IndexPage from './Pages/IndexPage.jsx'

 const routes =[
    {path:"/",element:<IndexPage/>},
    {path:"/article-info/:articeName",element:<ArticleInfo/>},
    {path:"/course-info/:courseName",element:<CourseInfo/>},
    {path:"/category-info/:categoryName",element:<Category/>}
]
export default routes