import ArticleInfo from './Pages/ArticleInfo'
import CourseInfo from './Pages/CourseInfo'
import Category from './Pages/Category'
import IndexPage from './Pages/IndexPage'
import Courses from './Pages/Courses'
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const routes = [
   { path: "/", element: <IndexPage /> },
   { path: "/article-info/:articeName", element: <ArticleInfo /> },
   { path: "/course-info/:courseName", element: <CourseInfo /> },
   { path: "/category-info/:categoryName", element: <Category /> },
   { path: "/courses/:page", element: <Courses /> },
   { path: '/login', element: <Login /> },
   { path: '/register', element: <Register /> },
]
export default routes

