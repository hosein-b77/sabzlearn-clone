import ArticleInfo from './Pages/ArticleInfo'
import CourseInfo from './Pages/CourseInfo'
import Category from './Pages/Category'
import IndexPage from './Pages/IndexPage'
import Courses from './Pages/Courses'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Contact from "./Pages/Contact"
import AdminPanel from "./Pages/AdminPanel/index"
import Users from './Pages/AdminPanel/Users'
import AdminCourses from './Pages/AdminPanel/Courses'
import Menus from './Pages/AdminPanel/Menus'
import AdminArticles from './Pages/AdminPanel/Articles'
import AdminCategory from './Pages/AdminPanel/Category'
import AdminContacts from './Pages/AdminPanel/AdminContacts'
import Sessions from './Pages/AdminPanel/Sessions'
import Comments from './Pages/AdminPanel/Comments'
import Offs from './Pages/AdminPanel/Offs'
import PAdminIndex from './Pages/AdminPanel/PAdminIndex'
import PAdminPrivate from './Components/PAdminPrivate/PAdminPrivate'
const routes = [
   { path: "/", element: <IndexPage /> },
   { path: "/article-info/:articeName", element: <ArticleInfo /> },
   { path: "/course-info/:courseName", element: <CourseInfo /> },
   { path: "/category-info/:categoryName/:page", element: <Category /> },
   { path: "/courses/:page", element: <Courses /> },
   { path: '/login', element: <Login /> },
   { path: '/register', element: <Register /> },
   { path: '/contact', element: <Contact /> },
   {
      path: '/p-admin/*', element: <PAdminPrivate><AdminPanel /></PAdminPrivate>,

      children: [
         { path: '', element: <PAdminIndex /> },
         { path: 'users', element: <Users /> },
         { path: 'courses', element: <AdminCourses /> },
         { path: 'menus', element: <Menus /> },
         { path: 'articles', element: <AdminArticles /> },
         { path: 'category', element: <AdminCategory /> },
         { path: 'contacts', element: <AdminContacts /> },
         { path: 'sessions', element: <Sessions /> },
         { path: 'comments', element: <Comments /> },
         { path: 'offs', element: <Offs /> },
      ]
   },
]
export default routes

