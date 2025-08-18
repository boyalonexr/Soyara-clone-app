import { useState } from "react";

const Body = () => {
  const [ active, setActive ] = useState(false)
  const brands = ['Chevrolet', 'Jeep', 'Lexus', 'Volkswagen'];
  const types = ['1 Wheel Drive', 'Coupe', 'Hatchback', 'Hybrid', 'Sedan', 'SUV', 'Wagon'];
  const colors = ['Red', 'Black', 'Silver', 'White'];

  const toggleActive = (type)=> {
    setActive(prev => (prev === type ? false: type))
  }

  return (
    <main>
      <div className="relative h-[85vh] bg-img">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* Content */}
        <div className="relative max-w-3/4 mx-auto z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Find parts for your vehicle</h1>
            <p className="text-xl mb-5">Over hundreds of brands and thousands of parts</p>
          

          {/* Dropdown inputs */}
          <div className="flex flex-col md:flex-row mt-5 gap-4 w-full px-4">
            {/* Brand */}
            <div 
            onClick={()=> toggleActive('brand')} className="w-full relative">
              <select
                className="w-full p-3 text-zinc-400 rounded bg-white appearance-none pr-10"
              >
                <option value="" disabled selected>Brand</option>
                {brands.map((brand) => (
                  <option 
                  key={brand} 
                  className="hover:bg-red-500 text-sm"
                  value={brand.toLocaleLowerCase()}
                  >{brand}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
                {active === 'brand'  ? '▲' : '▼'}
              </div>
            </div>

            {/* Type */}
            <div
            onClick={()=> toggleActive('type')}
            className="w-full relative">
              <select
                className="w-full p-3 text-zinc-400 rounded bg-white appearance-none "
              >
                <option value="" disabled selected>Type</option>
                {types.map((type)=> (
                  <option 
                  key={type}
                  value={type.toLowerCase()}
                  >{type}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
               {active === 'type' ? '▲' : '▼'}
              </div>
            </div>

            {/* Color */}
            <div 
            onClick={()=> toggleActive('color')}
            className="w-full relative">
              <select
                className="w-full p-3 text-zinc-400 rounded bg-white appearance-none pr-10"
              >
                <option value="" disabled selected>Color</option>
               {colors.map((color)=> (
                <option 
                key={color}
                value={color.toLowerCase()}
                >{color}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
                {active === 'color' ? '▲' : '▼'}
              </div>
            </div>
            
            <button className="w-1/2 mx-auto mt-6 md:mt-0 text-lg capitalize bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">search</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
