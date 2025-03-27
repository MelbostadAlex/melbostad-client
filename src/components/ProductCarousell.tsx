import g5 from '../assets/images/840_g5.jpg';
import g3 from '../assets/images/840_g3.jpg';
import g1 from '../assets/images/840_g1.jpg';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'HP Elitebook 840 G5',
    description: 'Good computer',
    imageUrl: g5,
    price: 100,
    rating: 5,
  },

  {
    id: 2,
    title: 'HP Elitebook 840 G3',
    description: 'Less good computer',
    imageUrl: g3,
    price: 80,
    rating: 4,
  },

  {
    id: 3,
    title: 'HP Elitebook 840 G1',
    description: 'Even less good computer',
    imageUrl: g1,
    price: 60,
    rating: 3,
  },

  {
    id: 3,
    title: 'HP Elitebook 840 G1',
    description: 'Even less good computer',
    imageUrl: g1,
    price: 60,
    rating: 3,
  },

  {
    id: 3,
    title: 'HP Elitebook 840 G1',
    description: 'Even less good computer',
    imageUrl: g1,
    price: 60,
    rating: 3,
  },
  {
    id: 3,
    title: 'HP Elitebook 840 G1',
    description: 'Even less good computer',
    imageUrl: g1,
    price: 60,
    rating: 3,
  },

  {
    id: 3,
    title: 'HP Elitebook 840 G1',
    description: 'Even less good computer',
    imageUrl: g1,
    price: 60,
    rating: 3,
  },
];

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
              Corporate waste is very bad for the environment. I buy computers
              from companies and refurb them into new ones.
            </p>

            <p className='flex flex-row roboto-regular justify-center items-center self-center text-black mb-[5vw]'>
              Please support our planet and me by buying a refurbed computer
              instead of a new one.
            </p>
          </div>

          <div className='mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-36 lg:grid-cols-4 mb-[24vh]'>
            {products.map((product) => (
              <div key={product.title} className='group h-64 w-64 rounded-xl'>
                <div className='relative h-full w-full'>
                  <div className='h-full w-full rounded-xl'>
                    {product.imageUrl && (
                      <img
                        src={product.imageUrl}
                        alt='Logo'
                        className='w-[256px] h-[256px]'></img>
                    )}

                    <div className=''>
                      <div className='flex min-h-full flex-col items-left justify-center'>
                        <h2 className='text-xl font-bold'>{product.title}</h2>
                      </div>

                      <div className='flex min-h-full flex-row items-left justify-between'>
                        <h2 className='text-[18px] roboto-regular font-bold mb-4'>
                          {product.price} SEK
                        </h2>

                        <div className='flex flex-row items-top mt-1'>
                          <svg
                            className={
                              product.rating >= 1
                                ? 'w-4 h-4 text-yellow-300 me-1'
                                : 'w-4 h-4 text-gray-300 me-1 dark:text-gray-500'
                            }
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 22 20'>
                            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                          </svg>
                          <svg
                            className={
                              product.rating >= 2
                                ? 'w-4 h-4 text-yellow-300 me-1'
                                : 'w-4 h-4 text-gray-300 me-1 dark:text-gray-500'
                            }
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 22 20'>
                            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                          </svg>
                          <svg
                            className={
                              product.rating >= 3
                                ? 'w-4 h-4 text-yellow-300 me-1'
                                : 'w-4 h-4 text-gray-300 me-1 dark:text-gray-500'
                            }
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 22 20'>
                            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                          </svg>
                          <svg
                            className={
                              product.rating >= 4
                                ? 'w-4 h-4 text-yellow-300 me-1'
                                : 'w-4 h-4 text-gray-300 me-1 dark:text-gray-500'
                            }
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 22 20'>
                            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                          </svg>
                          <svg
                            className={
                              product.rating >= 5
                                ? 'w-4 h-4 text-yellow-300 me-1'
                                : 'w-4 h-4 text-gray-300 me-1 dark:text-gray-500'
                            }
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 22 20'>
                            <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                          </svg>
                          <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>
                            {product.rating}
                          </p>
                          <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>
                            out of
                          </p>
                          <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>
                            5
                          </p>
                        </div>
                      </div>
                      <Link to={`/products/${product.id}/show`}>
                        <button className='text-[12px] py-4 px-4 border-2 bg-black text-white rounded-lg roboto-black'>
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousell;
