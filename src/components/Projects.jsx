import React from 'react'

function Projects() {
  const articles = [
    {
      id: 1,
      title: 'Featured by the Council for the Arts at MIT for the Laya and Jerome B. Wiesner Student Art Awards 2025',
      link: 'https://arts.mit.edu/wiesner-student-art-awards-2025/',
      image: '/src/assets/camit.png'
    },
    {
      id: 2,
      title: 'Featured for co-founding the MIT African Students Association Impact Fund',
      link: 'https://news.mit.edu/2025/mit-students-turn-vision-reality-0519',
      image: '/src/assets/ASA_header_logo.png'
    },
    {
        id: 3,
        title: 'Featured for my social impact internship with the MIT PKG Center for Social Impact',
        link: 'https://pkgcenter.mit.edu/2024/03/19/social-impact-internships-vivian-chinoda-25/',
        image: '/src/assets/pkg.png'
      },
 
  ]

  return (
    <section id="news" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>News Features</h2>
        <p>Recent articles and features highlighting my work</p>
      </div>

      <article className="project">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="card"
            style={{ 
              background: `url(${article.image}) center center/cover`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="project-info">
              <div className="project-bio">
                <h3>{article.title}</h3>
              </div>
              <div className="project-link">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>

      <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        See More <i className="fas fa-arrow-right"></i>
      </a>
    </section>
  )
}

export default Projects

