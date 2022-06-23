import React, { useState } from 'react'
import projects from './projects'
import { GrPrevious, GrNext } from 'react-icons/gr'

const MyProjects = () => {
  const [slider, setSlider] = useState(0)

  const nextSlide = () => {
    if (slider < projects.length - 1) {
      setSlider(slider + 1)
    } else {
      setSlider(0)
    }
  }

  const prevSlide = () => {
    if (slider > 0) { 
      setSlider(slider - 1)
    } else {
      setSlider(projects.length - 1)
    }
  }

  return (
    <div>
      <div className={`projects-cont-${projects[slider].id} projects-cont`}>
        <div className="projects-slider">
          <button className="dir-btn" onClick={prevSlide}>
            <GrPrevious />
          </button>
          <div className="slider-cont">
            <h1>{projects[slider].title}</h1>
            <p>
              {projects[slider].tech.map(tech => <span className={`tech tech-${projects[slider].id}`} key={tech}>{tech}</span>)}
            </p>
            <div className="slider-img">
              <img src={projects[slider].image} alt={projects[slider].title} />
            </div>
            <p>{projects[slider].description}</p>
            <a className="select-btn" href={projects[slider].liveLink} target="_blank" rel="noopener noreferrer">View project</a>
            <a className="select-btn" href={projects[slider].sourceLink} target="_blank" rel="noopener noreferrer">View code</a>
          </div>
          <button className="dir-btn" onClick={nextSlide}>
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyProjects