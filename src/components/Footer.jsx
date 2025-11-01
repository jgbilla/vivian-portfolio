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
        <a href="mailto:communitypro47@gmail.com">communitypro47@gmail.com</a>
        
        <div className="social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={hashnodeIcon} alt="Hashnode" />
          </a>
        </div>
        
        <div className="attribution">
          <a
            href="https://github.com/CommunityPro/portfolio-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg"
              alt="attribution"
              width="150px"
            />
          </a>
        </div>
        <p>Copyright &copy; Communitypro {currentYear}, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

