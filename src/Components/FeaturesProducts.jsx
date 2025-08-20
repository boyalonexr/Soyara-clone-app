import { useState, useEffect, useRef } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaSearchPlus,
  FaStar,
  FaRegStar,
  FaRegHeart,
} from "react-icons/fa";
import FeaturedProducts from "./featuredProdConts";

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

function FeaturesProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const containerRef = useRef(null);

  // Update itemsPerPage based on window width
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
      setCurrentIndex(0); // reset index on resize to avoid overflow
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, FeaturedProducts.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerPage, maxIndex));
  };

  // Card width + gap needs to be consistent
  // Let's define card width 280px + gap 24px = 304px
  // We'll calculate the translateX offset accordingly
  const cardWidth = 280;
  const gap = 24;
  const translateX = -(currentIndex * (cardWidth + gap));

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-gray-500 font-medium text-2xl">Featured Products</h2>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full text-white ${
              currentIndex === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <FaAngleLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full text-white ${
              currentIndex >= maxIndex
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <FaAngleRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel viewport with overflow hidden */}
      <div className="overflow-hidden px-4">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)`, gap: `${gap}px` }}
        >
          {FeaturedProducts.map((product) => (
            <div
              key={product.id}
              style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
              className="flex flex-col p-4 rounded-lg bg-white shadow-md"
            >
              {/* Sale & Icons */}
              <div className="flex justify-between mb-2">
                <div className="bg-red-600 h-8 px-4 flex items-center rounded-full">
                  <p className="text-white text-sm">Sale!</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <FaSearchPlus className="text-xl text-red-600 cursor-pointer" />
                  <div className="flex items-center gap-1 cursor-pointer">
                    <FaRegHeart className="text-xl text-gray-700" />
                    <span className="text-sm text-red-600 select-none">Wishlist</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="h-48 w-full overflow-hidden flex justify-center items-center mb-4">
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
                <span className="text-gray-800 font-medium">${product.price}</span>
                <StarRating rating={product.rating} />
              </div>

              <button className="mt-4 bg-red-600 hover:bg-red-700 w-full text-white py-2 rounded-full transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturesProducts;
