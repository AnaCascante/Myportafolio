import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiAdobexd,
  SiVite,
  SiNpm,
  SiEslint,
  SiPrettier,
  SiJson,
} from 'react-icons/si';

const Technologies = () => {
  return (
    <div id="technologies" className="my-0 bg-black px-4 py-12 text-white">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Tech Stack & Tools
      </h2>
      <p className="mb-8 text-center">
        Here are some of the technologies I have worked with:
      </p>
      <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4 lg:grid-cols-6">
        <div className="flex flex-col items-center">
          <FaHtml5 size="3em" color="#E34F26" />
          <span className="mt-2">HTML5</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt size="3em" color="#1572B6" />
          <span className="mt-2">CSS3</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJs size="3em" color="#F7DF1E" />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript size="3em" color="#3178C6" />
          <span className="mt-2">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size="3em" color="#38B2AC" />
          <span className="mt-2">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size="3em" color="#61DAFB" />
          <span className="mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <FaWordpress size="3em" color="#21759B" />
          <span className="mt-2">WordPress</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white p-2">
            <FaGithub size="3em" color="black" />
          </div>
          <span className="mt-2 text-white">GitHub</span>
        </div>

        <div className="flex flex-col items-center">
          <FaGitAlt size="3em" color="#F05032" />
          <span className="mt-2">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <SiFigma size="3em" color="#F24E1E" />
          <span className="mt-2">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <SiAdobexd size="3em" color="#FF61F6" />
          <span className="mt-2">Adobe XD</span>
        </div>
        <div className="flex flex-col items-center">
          <SiVite size="3em" color="#646CFF" />
          <span className="mt-2">Vite</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNpm size="3em" color="#CB3837" />
          <span className="mt-2">NPM</span>
        </div>
        <div className="flex flex-col items-center">
          <SiEslint size="3em" color="#4B32C3" />
          <span className="mt-2">ESLint</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPrettier size="3em" color="#F7B93E" />
          <span className="mt-2">Prettier</span>
        </div>
        <div className="flex flex-col items-center">
          <SiJson size="3em" color="#FFFFFF" />
          <span className="mt-2">JSON</span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
