import { useEffect, useState } from 'react'
import facebookIcon from '../assets/facebook-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import githubIcon from '../assets/github-icon.svg'
import hashnodeIcon from '../assets/hashnode-icon.svg'

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer id="footer">
      <div className="container">
      
        
        <div className="social">
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a> */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/vivianclarissahchinoda/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer

