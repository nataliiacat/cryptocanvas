import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <div className="title flex"><a className="title" href="/">Crypto </a><a href="/" className="title end">Canvas</a></div>
          </div>
          <div className="navbar">
            <ul className="flex">
              <li>
                <a className="subtitle" href="/">Home</a>
              </li>
              <li>
                <a className="subtitle" href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
