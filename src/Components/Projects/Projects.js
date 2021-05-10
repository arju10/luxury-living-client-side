import React from 'react';
import project1 from '../../Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png';
import project2 from '../../Image_Icon/Image/Mask Group.png';
import project3 from '../../Image_Icon/Image/Mask Group-1.png';
import ProjectCard from './ProjectCard';
const Projects = () => {
    const projectsData  = [
        {
            projectName : "Villa on washington Avenue",
            location : "Dhaka, Bangladesh",
            projectImage : project1
        },
        {
            projectName : "luxury villa in Rego Park",
            location : "Dhaka, Bangladesh",
            projectImage : project2
        },
        {
            projectName : "Gorgeous house",
            location : "Dhaka, Bangladesh",
            projectImage : project3
        }
    ]
    return (
        <div className = "container">
            <div className = "text-center mt-5">
            <h4>Projects</h4>
            <h2>Discover the latest interior Design <br/>availabe today</h2>
            </div>
           <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    projectsData.map(project=><ProjectCard project = {project}></ProjectCard>)
                }
            </div>
            
        </div>
    );
};

export default Projects;