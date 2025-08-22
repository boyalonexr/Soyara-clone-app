import shopCart1 from '../assets/shop-imgs/shop-cart1.jpg'
import shopCart2 from '../assets/shop-imgs/shop-cart2.jpg'
import shopCart3 from '../assets/shop-imgs/shop-cart3.jpg'
import shopCart4 from '../assets/shop-imgs/shop-cart4.jpg'
import shopCart5 from '../assets/shop-imgs/shop-cart5.jpg'
import shopCart6 from '../assets/featured-imgs/repair-part3.png'
import BenzImg from '../assets/body-imgs/mini-benz-img.jpg';
import EngineImg from '../assets/body-imgs/mini-engine-img.jpg';
import TireImg from '../assets/body-imgs/mini-tire-img.jpg';


export const FeaturedProducts = [
  {
    id: 1,
    name: "V8 Turbo Engine",
    image: shopCart5,
    rating: 4.5,
    price: 3200.00
  },
  {
    id: 2,
    name: "Performance Air Intake",
    image: shopCart2,
    rating: 2.0,
    price: 299.99
  },
  {
    id: 3,
    name: "Racing Exhaust System",
    image: shopCart3,
    rating: 3.5,
    price: 899.99
  },
  {
    id: 4,
    name: "ECU Performance Chip",
    image: shopCart4,
    rating: 1.0,
    price: 199.99
  },
  {
    id: 5,
    name: "High-Performance Radiator",
    image: shopCart1,
    rating: 3.0,
    price: 349.99
  },
  {
    id: 6,
    name: "Twin Turbo Kit",
    image: shopCart6,
    rating: 5.0,
    price: 4500.00
  },
];

export const engineData = [
  {
    img: BenzImg,
    title: "interior parts",
    subtitle: "low prices guarantee",
    animation: "left",
    id: 1,
  },
  {
    img: TireImg,
    title: "wheel rim",
    subtitle: "power tools of next level",
    animation: "left",
    id: 2,
  },
  {
    img: EngineImg,
    title: "body parts",
    subtitle: "for any vehicle",
    animation: "right",
    id: 3,
  },
];

export const reviewData = [
  { id: 1, product: 'Air Intake Pump', rating: 4, price: 360.00, img: shopCart3, review: 97 },
  { id: 2, product: "Twin Turbo Kit", rating: 5, price: 4500.00, img: shopCart4, review: 78 },
  { id: 3, product: 'power', rating: 1, price: 678.78, img: shopCart5, review: 24 },
  { id: 4, product: 'Fuel Filter', rating: 4, price: 563.00, img: shopCart2, review: 64 },
  { id: 5, product: 'car vacuum cleaner 120W', rating: 3, price: 120, img: shopCart2, review: 69 },
  { id: 6, product: "V8 Turbo Engine", rating: 5, price: 2356.00, img: shopCart5, review: 112 },
  { id: 7, product: 'Air Fillter', rating: 5, price: 65.00, img: shopCart6, review: 79 },
  { id: 8, product: 'AC Delco 45H2130 Coil Springs', rating: 1, price: 102.00, img: shopCart1, review: 3 },
  { id: 9, product: 'Car Sports seat', rating: 2, price: 897.00, img: shopCart4, review: 13 },

];

