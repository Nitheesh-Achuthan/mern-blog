import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute'
import CreatePost from './Pages/CreatePost'
import UpdatePost from './Pages/UpdatePost'
import PostPage from './Pages/PostPage'
import ScrollToTop from './Components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path="/create-post" element={<CreatePost/>} />
      <Route path="/update-post/:postId" element={<UpdatePost/>} />
      </Route>
      <Route path="/projects" element={<Projects/>} />
      <Route path="/post/:postSlug" element={<PostPage/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}
