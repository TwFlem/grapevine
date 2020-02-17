import React from "react"
import "../Header/Header"
import "./Layout.css"
import { Header } from "../Header"
import { Footer } from "../Footer"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
