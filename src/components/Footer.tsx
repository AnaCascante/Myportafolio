import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-center justify-center border-t-4 border-indigo-500 bg-black p-6 text-yellow-50">
      {/* Centered text */}
      <div className="text-center text-sm md:text-base">
        &copy; 2024 All rights reserved by <strong>Ana Cascante</strong>
      </div>
      <div className="group absolute right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full bg-yellow-50 from-pink-500 from-10% via-orange-500 via-30% to-yellow-500 to-90% p-2 text-2xl text-black hover:bg-gradient-to-r"
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
