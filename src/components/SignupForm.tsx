function SignupForm() {
  return (
    <div className='flex flex-col w-[100vw] max-h-[100vh]'>
      <div className='flex flex-row w-[60vw] max-h-[100vh] justify-center self-center'>
        <div className='flex flex-col w-[40vw] max-h-[100vh] p-[4vw] self-center'>
          <div className='flex flex-row justify-center align-center'>
            <h1 className='roboto-black text-[4vw]'>Create an account</h1>
          </div>

          <div className='flex flex-row justify-center align-center'>
            <p className='roboto-thin-italic text-[1.4vw]'>
              Get started with your MrMelbostad account today. Get your digital
              receits and newsletter updates directly to your email!
            </p>
          </div>

          <div className='flex flex-col justify-center align-center self-center p-8'>
            <div>
              <h2 className='roboto-black text-[1.65vw] py-2'> Email</h2>
              <input
                placeholder='E-email'
                type='email'
                className='w-[24vw] h-[4vh] mb-[2vh] p-6'
              />
            </div>

            <div>
              <h2 className='roboto-black text-[1.65vw] py-2'> Password</h2>
              <input
                placeholder='Password'
                type='password'
                className='w-[24vw] h-[4vh] mb-[2vh] p-6'
              />
            </div>

            <div>
              <h2 className='roboto-black text-[1.65vw] py-2'>
                Enter password again
              </h2>
              <input
                placeholder='Enter the password again'
                type='password'
                className='w-[24vw] h-[4vh] mb-[2vh] p-6 border-none'
              />
            </div>

            <label className='inline-flex items-center cursor-pointer py-4'>
              <input type='checkbox' value='' className='sr-only peer' />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className='ms-3 text-lg roboto-regular text-black'>
                Remember me
              </span>
            </label>

            <button className='py-4 px-8 border-2 bg-black text-white rounded-lg roboto-black'>
            Sign Up
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
