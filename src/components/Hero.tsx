import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <div className="bg-black pb-16 pt-40 text-center text-yellow-50">
      <img
        src={HeroImage}
        alt="my picture"
        className="mx-auto mb-12 w-48 rotate-90 transform rounded-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <h1 className="mb-8 text-4xl font-bold">
        I'm {''}
        <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
          Ana Cascante
        </span>
        , Front End Developer
      </h1>
      <p className="mb-8 text-lg text-gray-400">
        I love building things for the web{' '}
      </p>
      <div className="mt-12 space-x-4">
        <button className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-6 py-3 text-yellow-50 transition-transform duration-300 hover:scale-150">
          Curious?
        </button>
        <button className="hover:scale- inline transform rounded-full bg-gradient-to-r from-pink-500 from-10% via-orange-500 via-30% to-yellow-500 to-90% px-6 py-3 text-yellow-50 transition-transform duration-300 hover:scale-150">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
