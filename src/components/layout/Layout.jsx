import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Outlet/>
    <footer
      className="text-center py-5 mt-5"
      style={{ backgroundColor: "#f8f9fa", borderTop: "1px solid #e9ecef" }}
    >
      <div className="container">
        <p className="mb-0" style={{ fontSize: "15px" }}>
          جميع الحقوق محفوظة © ألفياء 2024
        </p>
        <a
          href="https://alephyaa.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark text-decoration-none"
        >
          https://alephyaa.net
        </a>
      </div>
    </footer>
    </>
  )
}
