import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

// Layouts
import MainLayout from './layouts/MainLayout'
import NewsLayout from './layouts/NewsLayout'
import CatalogLayout from './layouts/CatalogLayout'
import FormLayout from './layouts/FormLayout'

// Pages
import Contact from './pages/Contact'
import CarDetail from './pages/CarDetail'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Ad from './pages/Ad'
import AddCar from './pages/AddCar'
import AddComment from './pages/AddComment'
import Comments from './pages/Comments'
import CarComments from './pages/CarComments' // Yangi sahifa

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<CatalogLayout />}>
          <Route index element={<Catalog />} />
          <Route path='/catalog/:model' element={<Catalog />} />
          <Route path='/catalog/:model/:marka' element={<Catalog />} />
          <Route path='/catalog/:model/car/:id' element={<CarDetail />} />
        </Route>
        <Route path='/comments' element={<Comments />} />
        <Route path='/comments/:model/:marka' element={<CarComments />} />
        <Route path='/news' element={<NewsLayout />}>
          <Route index element={<News />} />
          <Route path='/news/:title' element={<NewsDetail />} />
        </Route>
        <Route path='/elon' element={<FormLayout />}>
          <Route index element={<AddCar />} />
          <Route path='/elon/sharx' element={<AddComment />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/ad' element={<Ad />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
