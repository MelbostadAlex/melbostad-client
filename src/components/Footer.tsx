function Footer() {
  return (
    <footer className='flex flex-col w-[100vw] max-h-[50vh]'>
      <hr className='my-8 bg-gray-200 border-[1px] dark:bg-gray-700 m-[12vw]'></hr>
      <div className='flex flex-row justify-around mt-[4vh]'>
        <div className='flex flex-col justify-center align-center'>
        <div className='py-[1vh]'>
            <p className='roboto-black'> Home </p>
          </div>
          <div className='py-[1vh]'>
            <p className="roboto-thin-italic"> Skills </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Test </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Footer </p>
          </div>
        </div>

        <div className='flex flex-col justify-center align-center'>
        <div className='py-[1vh]'>
            <p className='roboto-black'> Shop </p>
          </div>
          <div className='py-[1vh]'>
            <p className="roboto-thin-italic"> Skills </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Test </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Footer </p>
          </div>
        </div>

        <div className='flex flex-col justify-center align-center'>
        <div className='py-[1vh]'>
            <p className='roboto-black'> Contact </p>
          </div>
          <div className='py-[1vh]'>
            <p className="roboto-thin-italic"> Skills </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Test </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Footer </p>
          </div>
        </div>

        <div className='flex flex-col justify-center align-center'>
          <div className='py-[1vh]'>
            <p className='roboto-black'> FAQ </p>
          </div>
          <div className='py-[1vh]'>
            <p className="roboto-thin-italic"> Skills </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Test </p>
          </div>
          <div className='py-[1vh]'>
          <p className="roboto-thin-italic"> Footer </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row align-center justify-center pt-[12vh] pb-[2vh] roboto-regular">
        <h2> @ 2024 - Mr Melbostad Ltd,  All rights reserved</h2>
      </div>
    </footer>
  );
}

export default Footer;
