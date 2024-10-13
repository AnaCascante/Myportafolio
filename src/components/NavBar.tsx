import { Link } from 'react-scroll';
import { RiHomeHeartFill } from 'react-icons/ri';
import { SiAboutdotme } from 'react-icons/si';
import { GiBookshelf } from 'react-icons/gi';

const NavBar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-20 w-full items-center border-b-4 border-indigo-500 bg-black px-4 text-yellow-50 md:px-16 lg:px-24">
      <div className="flex w-full items-center justify-between">
        {/* Name on the left */}
        <div className="text-lg font-bold text-yellow-50 md:text-2xl">
          Ana Cascante
        </div>

        {/* Icons on the right */}
        <div className="flex space-x-4 sm:space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 text-xl text-yellow-50 transition-transform duration-300 hover:scale-150 sm:px-4 sm:py-2 sm:text-2xl"
          >
            <RiHomeHeartFill />
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 text-xl text-yellow-50 transition-transform duration-300 hover:scale-150 sm:px-4 sm:py-2 sm:text-2xl"
          >
            <SiAboutdotme />
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 text-xl text-yellow-50 transition-transform duration-300 hover:scale-150 sm:px-4 sm:py-2 sm:text-2xl"
          >
            <GiBookshelf />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
