import "../styles/Home.css";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Ramakant</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <a
            href="mailto: jangirravin0@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/ramakantjangir21"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ramakant-jangir-a48555217/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, JavaScript, TypeScript, NPM, BootStrap,
              MaterialUI, SASS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, MongoDB, .NET</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, JavaScript, TypeScript, Kotlin</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default Home;
