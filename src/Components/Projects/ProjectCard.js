import React from 'react';

const ProjectCard = ({project}) => {
    return (
       
         <div class="col ">
         <div class="card h-100 ">
           <img src={project.projectImage}class="card-img-top ms-auto" alt="..." style = {{height:"300px"}}/>
           <div class="card-body">
             <h5 class="card-title text-center">{project.projectName}</h5>
             <p class="card-text text-center">{project.location}</p>
           </div>
         </div>
       </div>
    );
};

export default ProjectCard;