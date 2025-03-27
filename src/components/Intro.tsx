import intro from '../assets/images/intro.jpg'
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div>
      <img src={intro} className="lg:w-[100vw] lg:h-[100vh] md:w-[100vw] md:h-[100vh] w-[100vw] h-[100vh]" alt="Logo" />
      <div className='absolute top-[50%] left-[50%] intro-text'>
        <h1 className='roboto-black lg:text-[20px] md:text-[20px] text-[10px] text-white'>Hi, I'm Alexander Melbostad!</h1>
        <h1 className='roboto-black lg:text-[60px] md:text-[60px] text-[40px] text-white'>DEVELOPER <span className='text-yellow-300'>| ENTREPRENEUR </span> </h1>
        <p className="roboto-italic text-white left-[60%]">I'm a passionate software developer from Gothenburg, Sweden and I live for coding and entrepreneurship.</p>
        <p className="roboto-italic text-white items-center"> I love new ideas and buildiing businesses that brings value to other people! Want to collaborate? Contact me!</p>

        <Link to={'/contact'}>
          <button className='my-8 py-4 px-8 bg-black text-white rounded-lg roboto-black lg:text-[24px] md:text-[24px] text-[18px]'>
              Contact me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
