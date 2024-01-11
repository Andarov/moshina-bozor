import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

// Layouts
import MainLayout from './layouts/MainLayout'
import Catalog from './pages/Catalog'

// Pages
import Contact from './pages/Contact'
import Home from './pages/Home'
import News from './pages/News'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App