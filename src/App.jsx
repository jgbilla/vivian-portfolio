import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    setTheme(currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}

export default App

