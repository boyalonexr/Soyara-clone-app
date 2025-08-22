import { FaStar, FaRegStar } from 'react-icons/fa';
import { reviewData } from './featuredProdConts';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      rating >= i ? (
        <FaStar key={i} className="text-yellow-500" />
      ) : (
        <FaRegStar key={i} className="text-yellow-500" />
      )
    );
  }
  return <div className="flex">{stars}</div>;
}

function Reviews() {
  return (
    <>
    <div className='my-25 mx-2 max-w-3xl'>
      <h2 className='text-2xl font-medium text-zinc-600 mb-4'>Customer Reviews</h2> 

      {reviewData.map(data => {
        return (
           <div 
           key={data.id}
           className='flex items-center gap-6 p-4 shadow-[0_0_8px_2px_rgba(0,0,0,0.3)] rounded-lg text-black my-5'>
          <div className='w-[80px]'>
            <img 
              src={data.img}
              alt="Tire product"
              className="w-full h-full object-cover"/>
          </div>

          <div>
            <h3 className="text-xl font-medium text-zinc-500 pb-4">{data.product}</h3>
              <div className='flex gap-4'>
                <StarRating rating={data.rating} />
                <span className="text-sm text-red-500">
                  ({data.review} customer review)</span>
              </div>
            <p className="text-lg font-semibold text-green-600">$360.00</p>
          </div>  
        </div>
        )
      })}
       
    </div>
    </>
  )
}

export default Reviews