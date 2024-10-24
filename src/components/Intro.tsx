import intro from '../assets/images/intro.jpg'

function Intro() {
  return (
    <div>
      <img src={intro} className="lg:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[100vh] w-[100vw] h-[100vh]" alt="Logo" />
      <div className='absolute top-[50%] left-[50%] intro-text'>
        <h1 className='roboto-black lg:text-[128px] md:text-[128px] text-[80px] text-white'>Hi, I'm Alex!</h1>
        <p className="my-4 roboto-italic text-white left-[60%]">I'm a passionate software developer from Gothenburg, Sweden and</p>
        <p className="roboto-italic text-white items-center">I live for coding and entrepreneurship. Want to collaborate? Contact me!</p>

        <button className='my-8 py-4 px-8 bg-black text-white rounded-lg roboto-black lg:text-[24px] md:text-[24px] text-[18px]'>
            Contact me
        </button>
      </div>
    </div>
  );
}

export default Intro;
