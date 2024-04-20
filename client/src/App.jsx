import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './Layout/MainLayout'
import Myblogs from './pages/Myblogs'
import Explore from './pages/Explore'
import Categories from './pages/Categories'
import CreateBlog from './pages/CreateBlog'
import Blog from './pages/Blog'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/myblogs' element={<Myblogs />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/newblog' element={<CreateBlog />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Route>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </main>
  )
}

export default App
