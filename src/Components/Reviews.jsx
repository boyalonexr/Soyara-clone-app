import { FaStar, FaRegStar } from 'react-icons/fa';
import { reviewData } from './featuredProdConts';
import { articlesData } from './featuredProdConts';
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
  return <div className="text-sm flex">{stars}</div>;
}

function Reviews() {
  const [ activeArticle, setActiveArticle] = useState(null)

  return (
    <>
    <section className="mt-24 mx-4">
      <h2 className="text-2xl font-medium text-zinc-600 mb-6">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewData.map((data) => (
          <div
            key={data.id}
            className="flex items-start gap-4 p-4 shadow-md rounded-lg bg-white"
          >
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={data.img}
                alt="Tire product"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-md md:text-lg font-medium text-zinc-700 capitalize mb-2">
                {data.product}
              </h3>
              <div className="flex items-center gap-4">
                <StarRating rating={data.rating} />
                <span className="text-sm text-red-500">
                  ({data.review} customer review)
                </span>
              </div>
              <p className="text-lg font-semibold text-green-600">${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


     <section className='p-6 my-4'>
      <h2 className='text-2xl font-medium text-zinc-600 mb-7 lg:ml-15'>Latest Article</h2>

     {articlesData.map(article => (
        <article key={article.id}
        onClick={()=> setActiveArticle(prev => (prev === article.id ? null : article.id))} 
        className={`grid grid-cols-1 md:grid-cols-2 mb-10 shadow-sm rounded-lg lg:w-[90%] mx-auto
        transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer
        ${activeArticle === article.id ? 'transition-transform duration-500 ease-in-out hover:scale-105' : '' }
        `}>
          <div
            style={{ backgroundImage: `url(${article.image})` }}
            className='flex flex-col justify-end bg-cover bg-center h-75 md:h-60 lg:h-70 lg:w-[95%] rounded-t-lg md:rounded-l-lg p-4 md:rounded-t-none'
          >
            <span className='bg-red-500 py-1 px-2 rounded-full text-white self-start'>
              {article.date}
            </span>
          </div>

          <div className='py-10 px-6 text-zinc-600 bg-white rounded-b-lg md:rounded-b-0 md:rounded-t-lg flex flex-col justify-center'>
            <div className='flex items-center pb-3 lg:pb-6'>
              <img className='w-[50px] lg:w-[60px]' src={article.avatar} alt="Admin avatar" />
              <span className='text-red-500 font-medium md:font-bold lg:text-xl lg:px-2'>- {article.author}</span>
              <span className='px-2'>|</span>
              <p className='lg:text-xl'>{article.category}</p>
            </div>

            <h3 className={`text-xl lg:text-2xl hover:text-red-500 font-bold
              ${activeArticle === article.id ? 'text-red-500' : 'text-zinc-600'}
              `}>
              {article.title.length > 70 ? article.title.slice(0, 70) + '...' : article.title}
              <span className='underline font-normal text-md text-gray-400 hover:text-red-500'><i>Read More</i></span>
            </h3>
          </div>
        </article>
      ))}


    </section> 
    </>
  )
}

export default Reviews