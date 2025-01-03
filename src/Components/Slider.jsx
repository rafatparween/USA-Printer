import React from "react";

const Slider = () => {
  return (
    <div className="relative flex flex-wrap justify-between items-center px-6 lg:px-20 py-12 shadow-lg rounded-lg" style={{
        background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
    }}>
      <div className="lg:w-1/2 text-center lg:text-left animate-fadeIn">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
          <span className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
            USA PRINTER SOLUTIONS
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Tailored And One-stop Technology Solutions,{" "}
          <span className="font-bold text-red-600">Just For You!!</span>
        </p>
        <p className="mt-2 text-gray-500">
          Whether it is laptops, smartphones or printers, receive exceptional
          maintenance, troubleshooting, and configuration that ensures your
          device runs smoothly.
        </p>
        <button className="mt-6 flex items-center gap-2 text-red-600 font-medium hover:underline transition-transform transform hover:scale-105">
          <span>Explore More</span>
          <span className="text-xl">&#8594;</span>
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-center animate-slideInRight">
        <img
          src="/girl.png"
          alt="Customer Support"
          className="max-w-sm lg:max-w-md rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const InfoCards = () => {
  const cards = [
    {
      title: "Trusted By Millions",
      description:
        "We assure consistently dependable technology solutions backed by qualified professionals.",
      icon: "🤝",
    },
    {
      title: "Skilled Professionals",
      description:
        "Our comprehensive network of expert professionals is ready to help whenever you need them.",
      icon: "⚙️",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 lg:px-20 py-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 animate-fadeInUp"
        >
          <div className="text-4xl text-red-600 mb-4">{card.icon}</div>
          <h3 className="font-bold text-lg text-gray-800">{card.title}</h3>
          <p className="text-gray-500 mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;