import './ProjectList.css';
import { Link } from 'react-router-dom';

import React from 'react'

export default function ProjectList({projects}) {
  return (
    <div className='project-list'>
      {projects.length===0 && <p className='error'>No projects yet</p>}
        {projects.map(project=>(
<Link to={`/projects/${project.id} `} key={project.id}>
<p>Created by {project.createdBy.displayName}</p>
    <h4>{project.name}</h4>

    <p>{project.details}</p>
    
</Link>

        ))}
    </div>
  )
}
