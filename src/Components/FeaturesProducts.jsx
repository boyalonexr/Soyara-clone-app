import { useState, useEffect } from "react";
import { FeaturedProducts } from "./featuredProdConts";
import { motion } from "framer-motion";
import tire from "../assets/tire.png"
import {
  FaAngleLeft,
  FaAngleRight,
  FaSearchPlus,
  FaStar,
  FaRegStar,
  FaRegHeart,
} from "react-icons/fa";

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
  return <div className="flex gap-1">{stars}</div>;
}

function FeaturesProducts({addToCart}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // update slidesPerView on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = FeaturedProducts.length - slidesPerView;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const handleProductClick = (product)=> {
          addToCart(product)
  }


  return (
    <>
    <div className="lg:flex items-center relative lg:px-2">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount:0.5 }}
        className="relative bg-shop bg-cover bg-center mx-4 lg:mx-2 mb-8 lg:mb-0 p-10 rounded-xl"
      >
      <div>
        <div className='absolute rounded-lg inset-0 bg-black/50 z-10 pointer-events-none' />

        <div className='relative capitalize z-10 text-white'>
        <div className='pb-4'>
          <h2 className='text-2xl font-bold'>wheels rim</h2>
          <p className='text-md'>low prices, price match guarantee</p>
        </div>

          <ul className='py-4'>
            <li className='py-2 hover:text-red-600'>headlights & lighting</li>
            <li className='py-2 hover:text-red-600'>brakes & suspension</li>
            <li className='py-2 hover:text-red-600'>interior parts</li>
            <li className='py-2 hover:text-red-600'>engine & drivetrain</li>
            <li className='py-2 hover:text-red-600'>tools & garage</li>
          </ul>

          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white md:w-1/4 lg:w-3/4 p-4 rounded-full">Shop Now</button>
          </div>
    </div>
    </motion.div>


      {/* Header with navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true}}
         className="w-full lg:w-3/4">
       <div
        className="flex items-center justify-between px-4 py-2 lg:py-0"
      >
        <h2 className="text-gray-500 font-medium text-xl">
          Featured Products
        </h2>
        <div className="flex justify-end items-center gap-3">
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full text-white ${
              currentIndex === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <FaAngleLeft size={23} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-full text-white ${
              currentIndex >= maxIndex
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <FaAngleRight size={23} />
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div className="overflow-hidden pb-4 px-4 lg:px-2">
        <motion.div
          className="flex my-4"
          animate={{ x: `-${(100 / slidesPerView) * currentIndex}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {FeaturedProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full mx-auto md:w-1/2 lg:w-1/3 px-2"
            >
              {/* Card */}
              <div className="flex flex-col p-4 rounded-lg bg-white md:gap-1 lg:gap-0 h-full max-w-[400px] md:ml-4 mx-auto shadow-2xl m-2 lg:m-0">
                {/* Sale & Icons */}
                <div className="flex justify-between mb-8">
                  <div className="bg-red-600 h-8 px-4 flex items-center rounded-full">
                    <p className="text-white text-sm">Sale!</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <FaSearchPlus className="text-xl text-red-600 cursor-pointer" />
                    <div className="flex items-center gap-1 cursor-pointer">
                      <FaRegHeart className="text-xl text-gray-700" />
                      <span className="text-sm text-red-600 select-none">
                        Wishlist
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="h-48 md:h-40 w-full overflow-hidden flex justify-center items-center mb-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full"
                  />
                </div>

                {/* Info */}
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.name}
                </h2>

                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    ${product.price}
                  </span>
                  <StarRating rating={product.rating} />
                </div>

                <button 
                onClick={()=> handleProductClick(product)}
                className="mt-8 mb-4 bg-red-600 hover:bg-red-700 w-3/4 md:w-2/4 mx-auto text-white py-2 rounded-full transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      </motion.div>
    </div>

    <div className="md:h-70 h-60 relative flex items-center check my-8 md:my-12">
      <div className="md:w-[60%] w-full px-7 md:px-5">
        <h2 className="text-4xl pb-3 font-bold">Take care of your tire 22% off</h2>
        <p className="md:text-lg">This dicount is not valid in conjunction with the other offers</p>
      </div>     

    <div className="w-[20rem] absolute z-40 lg:z-30 top-2 md:top-0 right-0">
      <img src={tire} alt="tire" />
    </div>
    </div>
        
    </>
  );
}

export default FeaturesProducts;