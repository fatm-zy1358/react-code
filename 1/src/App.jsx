import ProductCard from "./ProductCard";
import React from 'react';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: "گوشی موبایل",
      price: 120000000,
      description: "گوشی هوشمند با دوربین عالی",
      image: "📱"
    },
    {
      id: 2,
      name: "لپ تاپ",
      price: 65000000,
      description: "مناسب برای برنامه‌نویسی و کارهای سنگین",
      image: "💻"
    },
    {
      id: 3,
      name: "هدفون",
      price: 8000000,
      description: "کیفیت صدای بالا و نویزگیر",
      image: "🎧"
    },
    {
      id: 4,
      name: "موس گیمینگ",
      price: 3500000,
      description: "دارای دقت بالا و RGB",
      image: "🖱️"
    },
    {
      id: 5,
      name: "کیبورد مکانیکی",
      price: 5000000,
      description: "سوئیچ کایل نویز کم",
      image: "⌨️"
    },
    {
      id: 6,
      name: "مانیتور",
      price: 24000000,
      description: "4K با نرخ تازه‌سازی 144Hz",
      image: "🖥️"
    }
  ];

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان";
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-4 md:p-8 font-vazir">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          فروشگاه آنلاین تکنولوژی
        </h1>
        <p className="text-gray-400 text-lg">بهترین محصولات تکنولوژی با بهترین قیمت</p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700 hover:border-cyan-500/50"
            >
              <div className="p-8 text-center">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h2>
                
                <p className="text-gray-400 mb-6 px-4">
                  {product.description}
                </p>
                
                <div className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-xl">
                  <p className="text-gray-300 text-sm mb-1">قیمت:</p>
                  <p className="text-2xl font-bold text-green-400">
                    {formatPrice(product.price)}
                  </p>
                </div>
                
                <button className="mt-6 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">درباره ما</a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">تماس با ما</a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">قوانین</a>
        </div>
    </div>
  );
}

export default App;