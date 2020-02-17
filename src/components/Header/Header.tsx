import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <Link to="/">Grapevine</Link>
      <Link to="/about/">About</Link>
    </header>
  )
}
