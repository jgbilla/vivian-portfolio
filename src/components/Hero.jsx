import profileImage from '../assets/profile-image.svg'

function Hero() {
  return (
    <header id="hero">
      <section className="header-container">
        <img
          className="profile-image"
          src={profileImage}
          alt="Profile"
        />
        <h1>Hi I'm Franklin</h1>

        <div className="content-text">
          <h2>Building digital</h2>
          <h2>products, brands, and experience.</h2>

          <p>
            A Frontend Developer and Visual Designer with experience in web
            design, brand identity and product design.
          </p>
        </div>
        <a
          href="https://github.com/CommunityPro/portfolio-html"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect With Me
        </a>
      </section>
    </header>
  )
}

export default Hero

