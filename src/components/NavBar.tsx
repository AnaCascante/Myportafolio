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
            className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-2xl text-yellow-50 transition-transform duration-300 hover:scale-150"
          >
            <RiHomeHeartFill />
          </NavLink>
          <NavLink
            to="/about"
            className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-2xl text-yellow-50 transition-transform duration-300 hover:scale-150"
          >
            <SiAboutdotme />
          </NavLink>
          <NavLink
            to="/bookshelf"
            className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-2xl text-yellow-50 transition-transform duration-300 hover:scale-150"
          >
            <GiBookshelf />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
