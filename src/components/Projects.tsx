import { FaGithub } from 'react-icons/fa';
import { SiRender } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description of project 1.',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.example.com',
    link: 'https://www.example.com',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description of project 2.',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.example.com',
    link: 'https://www.example.com',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a description of project 3.',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.example.com',
    link: 'https://www.example.com',
  },
];

const Projects = () => {
  return (
    <div className="bg-black py-20 text-yellow-50" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="mb-16 text-center text-4xl font-bold">My Projects</h2>
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="transform rounded-lg bg-gray-800 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex justify-center space-x-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-4 text-yellow-50 transition-transform duration-300 hover:scale-150"
                >
                  <SiRender size="2em" />
                </a>

                <a
                  href={project.github}
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
