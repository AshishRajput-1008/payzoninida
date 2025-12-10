"use client";
import React, { useState } from 'react';
import { ArrowRight, Leaf, Blocks, Gem, Sprout, Cpu, Sparkles, ChevronRight, Shirt } from 'lucide-react';
import Link from 'next/link';

const FMCGPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fmcgCategories = [
    {
      id: 1,
      name: "Organic Farming",
      description: "Sustainable agricultural practices producing chemical-free, healthy organic products for conscious consumers.",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      href: "/sector/organic-farming",
      stats: "100% Natural"
    },
    {
      id: 2,
      name: "Toys Industries",
      description: "Creative and safe toys designed to inspire imagination, learning, and joy for children of all ages.",
      icon: Blocks,
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      href: "/sector/toys-industries",
      stats: "Safe & Fun"
    },
    {
      id: 3,
      name: "Artificial Jewellery",
      description: "Elegant and affordable fashion jewelry pieces that add style and sophistication to every occasion.",
      icon: Gem,
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      href: "/sector/artificial-jewellery",
      stats: "Trendy Designs"
    },
    {
      id: 4,
      name: "Spices & Vegetables",
      description: "Fresh, premium quality spices and vegetables sourced directly from farms to ensure authentic flavors.",
      icon: Sprout,
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      href: "/sector/spices-vegetables",
      stats: "Farm Fresh"
    },
    {
      id: 5,
      name: "Electronics",
      description: "Innovative electronic products and solutions designed for modern living with cutting-edge technology.",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      href: "/sector/electronics",
      stats: "Latest Tech"
    },
    {
      id: 6,
      name: "Clothing",
      description: "Stylish and comfortable apparel for every occasion, combining quality fabrics with contemporary designs.",
      icon: Shirt,
      color: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50",
      href: "/sector/clothing",
      stats: "Quality Fashion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mt-[193px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white text-sm font-semibold">Fast Moving Consumer Goods</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              FMCG <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Sector</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our diverse range of fast-moving consumer goods, delivering quality products that meet everyday needs across multiple industries.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-200">Quality Assured</div>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of FMCG products, each category carefully curated to deliver excellence and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fmcgCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-white overflow-hidden`}>
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating Orb */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-bold rounded-full shadow-md`}>
                      {category.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {category.description}
                    </p>

                    {/* CTA Button */}
                    <a
                      href={category.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${category.color} text-white font-bold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}
                    >
                      <span>Explore More</span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === category.id ? 'translate-x-1' : ''}`} />
                    </a>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <IconComponent className="w-full h-full text-gray-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hands with PayzonIndia and explore opportunities in our thriving FMCG sector. Let's grow together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/investor"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span>Investor Program</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FMCGPage;