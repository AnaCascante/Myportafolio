import { Link } from 'react-scroll';
import { RiHomeHeartFill } from 'react-icons/ri';
import { SiAboutdotme } from 'react-icons/si';
import { GiBookshelf } from 'react-icons/gi';

const NavBar = () => {
  return (
    <nav
      className="flex h-24 items-center border-b-4 border-indigo-500 bg-black px-8 text-yellow-50 md:px-16 lg:px-24"
      role="navigation"
    >
      <div className="flex w-full items-center justify-between">
        {/* Name on the left */}
        <div className="text-2xl font-bold text-yellow-50">Ana Cascante</div>

        {/* Icons on the right */}
        <div className="flex space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-2xl text-yellow-50 transition-transform duration-300 hover:scale-150"
          >
            <RiHomeHeartFill />
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-2xl text-yellow-50 transition-transform duration-300 hover:scale-150"
          >
            <SiAboutdotme />
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-2xl text-yellow-50 transition-transform duration-300 hover:scale-150"
          >
            <GiBookshelf />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
