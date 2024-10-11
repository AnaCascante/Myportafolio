import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center border-t-2 border-white bg-black p-6 text-yellow-50">
      {/* Centered text */}
      <div className="text-center text-sm md:text-base">
        &copy; 2024 All rights reserved by <strong>Ana Cascante</strong>
      </div>
      <div className="group absolute right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full bg-yellow-50 p-2 text-2xl text-black hover:bg-yellow-500"
        >
          <FaArrowUp />
        </button>
        {/* Hover message */}
        <span className="absolute right-0 top-[-2rem] hidden whitespace-nowrap rounded bg-black p-1 text-white group-hover:block">
          Back to top
        </span>
      </div>
    </footer>
  );
}
