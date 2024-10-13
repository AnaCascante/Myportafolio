import { FaGithub } from 'react-icons/fa';
import { SiRender } from 'react-icons/si';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of project 1.',
    image: 'https://via.placeholder.com/150',
    Github: 'https://www.example.com',
    link: 'https://www.example.com',
  },
  {
    title: 'Project 2',
    description: 'This is a description of project 2.',
    image: 'https://via.placeholder.com/150',
    Github: 'https://www.example.com',
    link: 'https://www.example.com',
  },
  {
    title: 'Project 3',
    description: 'This is a description of project 3.',
    image: 'https://via.placeholder.com/150',
    Github: 'https://www.example.com',
    link: 'https://www.example.com',
  },
];

const Projects = () => {
  return (
    <div className="bg-black py-20 text-yellow-50" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="mb-12 text-center text-4xl font-bold">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex justify-center space-x-10">
                <a
                  href="https://www.linkedin.com/in/ana-cascante-de-quadras-4301521a/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-4 text-yellow-50 transition-transform duration-300 hover:scale-150"
                >
                  <SiRender size="2em" />
                </a>

                <a
                  href="https://github.com/AnaCascante"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-4 text-yellow-50 transition-transform duration-300 hover:scale-150"
                >
                  <FaGithub size="2em" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
