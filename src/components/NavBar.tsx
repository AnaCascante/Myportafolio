import { NavLink } from 'react-router-dom';
import { RiHomeHeartFill } from 'react-icons/ri';
import { SiAboutdotme } from 'react-icons/si';
import { GiBookshelf } from 'react-icons/gi';

const NavBar = () => {
  return (
    <nav
      className="flex h-20 items-center border-b-2 border-yellow-50 bg-black px-8 text-yellow-50 md:px-16 lg:px-24"
      role="navigation"
    >
      <div className="flex w-full items-center justify-between">
        {/* Name on the left */}
        <div className="text-2xl font-bold text-yellow-50">Ana Cascante</div>

        {/* Icons on the right */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className="text-2xl text-yellow-50 hover:text-green-400"
          >
            <RiHomeHeartFill />
          </NavLink>
          <NavLink
            to="/about"
            className="text-2xl text-yellow-50 hover:text-green-400"
          >
            <SiAboutdotme />
          </NavLink>
          <NavLink
            to="/bookshelf"
            className="text-2xl text-yellow-50 hover:text-green-400"
          >
            <GiBookshelf />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
