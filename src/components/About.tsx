import HeroImage from '../assets/HeroImage.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-black py-20 text-center text-yellow-50" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="mb-12 text-center text-4xl font-bold">About Me</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <img
            src={HeroImage}
            alt="my picture"
            className="h-90 mb-8 w-72 rotate-90 rounded object-cover py-10 md:mb-0"
          />
          <div className="flex-1">
            <p className="mb-8 text-lg">
              With over 20 years of experience as a physical therapist
              specializing in mental health, and a background in teaching, I
              bring a unique perspective to front-end development. My
              multicultural, multilingual experience, combined with my
              understanding of the connection between body and mind, enhances my
              creativity and problem-solving in interaction design. I'm excited
              to apply these skills in my new journey as a front-end developer.
              Outside of work, I enjoy climbing, DIY projects, reading, puzzles,
              and spending time with my child and exploring new adventures
              together.
            </p>
            <div className="flex justify-center space-x-10">
              <a
                href="https://www.linkedin.com/in/ana-cascante-de-quadras-4301521a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-4 text-yellow-50 transition-transform duration-300 hover:scale-150"
              >
                <FaLinkedin size="2em" />
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
        </div>
      </div>
    </div>
  );
};

export default About;
