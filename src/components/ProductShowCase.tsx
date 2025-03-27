const ProductCarousell = () => {
  return (
    <section className='mx-auto'>
      <div className='mx-auto flex justify-center object-center px-4 lg:max-w-7xl'>
        <div className='flex justify-center object-center flex-col gap-12 sm:gap-16'>
          <div>
            <h1 className='hidden lg:flex md:flex flex-col roboto-black text-[64px] justify-center items-center text-black mt-[4vw] mb-[2vw]'>
              Shop
            </h1>

            <p className='flex flex-row roboto-regular justify-center items-center self-center text-black'>
              Corporate waste is very bad for the envrionment. I buy computers
              from companies and refurb them into new ones.
            </p>

            <p className='flex flex-row roboto-regular justify-center items-center self-center text-black mb-[5vw]'>
              Please support our planet and me by buying a refurbed computer
              instead of a new one.
            </p>

            <h1 className='hidden lg:flex md:flex flex-col roboto-black text-[48px] justify-center items-left text-black mt-[4vw]'>
              Products
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousell;
