import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

export default function Root() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
