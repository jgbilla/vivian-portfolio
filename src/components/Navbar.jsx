import { useState } from 'react'
import logo from '../assets/logo.png'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <h1 id="logo">
          {/* <a href="https://github.com/CommunityPro/portfolio-html">
            <img src={logo} alt="Your Logo" />
          </a> */}
        </h1>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a className="nav-link" href="#projects" onClick={closeMenu}>
              PROJECTS
            </a>
          </li>
          <li>
            <a className="nav-link" href="#" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
          <li>
            <a className="nav-link" href="#" onClick={closeMenu}>
              BLOG
            </a>
          </li>
          <li>
            <a
              className="nav-link btn btn-primary"
              href="https://github.com/CommunityPro/portfolio-html"
              onClick={closeMenu}
            >
              RESUME <i className="fas fa-arrow-right"></i>
            </a>
          </li>

          <div className="theme-switch">
            <input
              type="checkbox"
              id="switch"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label className="toggle-icons" htmlFor="switch">
              <img className="moon" src={moon} alt="Dark mode" />
              <img className="sun" src={sun} alt="Light mode" />
            </label>
          </div>
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

