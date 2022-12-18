import ProjectItem from "../components/ProjectItem";
import projectList from "../helpers/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project,index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
