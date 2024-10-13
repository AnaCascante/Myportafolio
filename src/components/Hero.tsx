import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <div>
      <img src={HeroImage} alt="my picture" className="mx-auto rotate-90" />
      <h1 className="text-center text-4xl font-bold text-yellow-50">
        I'm {''}
        <span>Ana Cascante</span>
        Front End Developer
      </h1>
      <p className="text-center text-2xl text-yellow-50">
        I love building things for the web{' '}
      </p>
      <div>
        <button className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-yellow-50 transition-transform duration-300 hover:scale-150">
          Curious?
        </button>
        <button className="hover:scale- inline transform rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 py-2 text-yellow-50 transition-transform duration-300 hover:scale-150">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
