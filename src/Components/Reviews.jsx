import { FaStar, FaRegStar } from 'react-icons/fa';
import { reviewData } from './featuredProdConts';
import { articlesData } from './featuredProdConts';

import carInterior from '../assets/car-interior.jpg'
import carTab from '../assets/tab.png'
import { useState } from 'react';


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
  const [ activeArticle, setActiveArticle] = useState(false)

  return (
    <>
    <section className='mt-25 mx-2 flex flex-col flex-wrap '>
      <h2 className='text-2xl font-medium text-zinc-600 mb-4'>Customer Reviews</h2> 

      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>

      {reviewData.map(data => {
        return (
           <div 
           key={data.id}
           className='flex flex-wrap items-center gap-3 md:gap-6 px-2 md:px-4 py-4 lg:p-3 shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] rounded-lg text-black my-5 md:mx-5 lg:mx-1 '>
          <div className='w-[70px]'>
            <img 
              src={data.img}
              alt="Tire product"
              className="w-full h-full object-cover"/>
          </div>

          <div>
            <h3 className="text-xl lg:text-lg font-medium text-zinc-500 pb-4 capitalize">{data.product}</h3>
              <div className='flex flex-wrap gap-3'>
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
    </section>

     <section className='p-6 my-4'>
      <h2 className='text-2xl font-medium text-zinc-600 mb-7'>Latest Article</h2>

     {articlesData.map(article => (
        <article key={article.id} 
        className='mb-10 shadow-sm rounded-lg'>
          <div
            style={{ backgroundImage: `url(${article.image})` }}
            className='flex flex-col justify-end bg-cover bg-center h-75 rounded-t-lg p-4'
          >
            <span className='bg-red-500 py-1 px-2 rounded-full text-white self-start'>
              {article.date}
            </span>
          </div>

          <div className='py-10 px-6 text-zinc-600 bg-white rounded-b-lg flex flex-col justify-center'>
            <div className='flex items-center pb-3'>
              <img className='w-[50px]' src={article.avatar} alt="Admin avatar" />
              <span className='text-red-500 font-medium px-2'>- {article.author}</span>
              <span className='px-2'>|</span>
              <p>{article.category}</p>
            </div>

            <h3 className='text-xl font-bold'>
              {article.title.length > 70 ? article.title.slice(0, 70) + '...' : article.title}
            </h3>
          </div>
        </article>
      ))}


    </section> 
    </>
  )
}

export default Reviews