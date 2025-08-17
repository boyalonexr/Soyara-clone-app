const Body = () => {
  const brands = ['Chevrolet', 'Jeep', 'Lexus', 'Volkswagen'];
  const types = ['1 Wheel Drive', 'Coupe', 'Hatchback', 'Hybrid', 'Sedan', 'SUV', 'Wagon'];
  const colors = ['Red', 'Black', 'Silver', 'White'];

  return (
    <main>
      <div className="relative h-screen bg-img">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-3/4 text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Find parts for your vehicle</h1>
            <p className="text-xl mb-5">Over hundreds of brands and thousands of parts</p>
          

          {/* Dropdown inputs */}
          <div className="flex flex-col mt-5 gap-4 w-full px-4">
            {/* Brand */}
            <div className="w-full relative border border-black">
              <select
                className="w-full p-3 text-zinc-400 rounded bg-white appearance-none pr-10"
              >
                <option value="">Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand.toLocaleLowerCase()}>{brand}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
                ▼
              </div>
            </div>

            {/* Type */}
            <div className="w-full">
              <select
                className="w-full p-3 text-black rounded bg-white overflow-y-auto max-h-40"
              >
                <option value="">Select Type</option>
                <option>1 Wheel Drive</option>
                <option>Coupe</option>
                <option>Hatchback</option>
                <option>Hybrid</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Wagon</option>
              </select>
            </div>

            {/* Color */}
            <div className="w-full">
              <select
                className="w-full p-3 text-black rounded bg-white overflow-y-auto max-h-40"
              >
                <option value="">Select Color</option>
                <option>Red</option>
                <option>Black</option>
                <option>Silver</option>
                <option>White</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
