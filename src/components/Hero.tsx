import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <div id="hero" className="bg-black pb-16 pt-40 text-center text-yellow-50">
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
      <p className="mb-8 text-2xl font-semibold text-gray-400">
        Crafting modern, responsive, and user-friendly web experiences
      </p>
      <div className="flex justify-center space-x-10">
        <a
          href="https://www.linkedin.com/in/ana-cascante-de-quadras-4301521a/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-4 text-xl font-bold text-yellow-50 transition-transform duration-300 hover:scale-150"
        >
          Connect with me!
        </a>

        <a
          href="https://www.canva.com/design/DAGIZrLBAV8/jcvItSPstlJa_F_akftVYg/view?utm_content=DAGIZrLBAV8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target="_blank"
          rel="noreferrer"
          className="inline-flex transform items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 px-6 py-3 text-xl font-bold text-yellow-50 transition-transform duration-300 hover:scale-150"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
