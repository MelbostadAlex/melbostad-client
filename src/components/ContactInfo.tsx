function ContactInfo() {
    return (
      <div className='flex flex-col w-[100vw] max-h-[100vh]'>
        <div className='flex flex-row w-[60vw] max-h-[100vh] justify-center self-center'>
          <div className='flex flex-col w-[40vw] max-h-[100vh] p-[2vw] self-center'>
            <div className='flex flex-row justify-center align-center'>
              <h1 className='roboto-black text-[28px] md:text-[4vw] lg:text-[4vw]'>Contact me!</h1>
            </div>
  
            <div className='flex flex-row justify-center align-center'>
              <p className='roboto-thin-italic md:text-[1.1vw] lg:text-[1.1vw] text-[12px]'>
                Do you want a custom made website tailored to your needs? Do you need an experienced Full stack developer for your company?
                Or are you in the Gothenburg area and want to grab a coffee? Contact me - I don't bite!
              </p>
            </div>
  
            <div className='flex flex-col justify-center align-center self-center p-8'>
              <div>
                <h2 className='roboto-black text-[1.65vw] py-2'> Title</h2>
                <input
                  placeholder='Enter a great title'
                  type='text'
                  className='w-[32vw] h-[4vh] mb-[2vh] p-6'
                />
              </div>
  
              <div>
                <h2 className='roboto-black text-[1.65vw] py-2'> Email</h2>
                <input
                  placeholder='Enter your email'
                  type='email'
                  className='w-[32vw] h-[4vh] mb-[2vh] p-6'
                />
              </div>
  
              <div>
                <h2 className='roboto-black text-[1.65vw] py-2'>
                  Message
                </h2>
                <textarea
                  placeholder='Write a message to me'
                  className='w-[32vw] h-[14vh] mb-[2vh] p-6 border-none'
                />
              </div>
  
              <button className='text-[16px] py-4 px-4 border-2 bg-black text-white rounded-lg roboto-black'>
              Send message!
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactInfo;
  