import React from 'react'
import Project from './Project'
import './projects.css'
import ProjectImage1 from '../../assets/Projects_Portfolio.png'
import ProjectImage2 from '../../assets/Projects_DEVN.png'
import ProjectImage3 from '../../assets/Projects_SFSB.png'
import { BsGithub } from 'react-icons/bs'
import { FaGamepad } from 'react-icons/fa'
import ProjectsCTA from './ProjectsCTA'

const Projects = (props) => {
  return (
    <section id='projects'  className={props.isVariant ? 'section-variant' : ''}>
      <h5>Check Out My</h5>
      <h2>Projects</h2>
      <div className='container projects-container'>
        <Project 
          image={ProjectImage1} 
          projectName='Personal Portfolio (this website!)' 
          description='A React portfolio, made from scratch. Hosted by GitHub Pages'
          skills={['HTML', 'CSS', 'React', 'Frontend']}  
          url='https://github.com/DillonHandyside/DillonHandyside.github.io'
          urlIcon={<BsGithub />}
          urlTitle='Repo'/>
        <Project 
          image={ProjectImage2} 
          projectName='DEVN - Dialogue Editor for Visual Novels' 
          description='Node-based graph editor tool for creating Visual Novel projects in Unity'
          skills={['C#', 'Unity', 'SOLID', 'OOP', 'UML', 'Architecture', 'Tools Programming']} 
          url='https://github.com/DillonHandyside/DEVN-DialogueEditorForVisualNovels'
          urlIcon={<BsGithub />}
          urlTitle='Repo'/>
        <Project 
          image={ProjectImage3} 
          projectName='Super Fast Slime Boi' 
          description='A difficult 2D platformer with a place-your-own checkpoint system'
          skills={['C#', 'Unity', 'Teamwork', 'Game Jam']}  
          url='https://chrispydesign.itch.io/super-fast-slime-boi'
          urlIcon={<FaGamepad />}
          urlTitle='itch.io'/>
      </div>
      <ProjectsCTA />
    </section>
  )
}

export default Projects