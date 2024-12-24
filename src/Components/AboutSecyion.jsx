import React from 'react';

const CustomLayout = () => {
  return (
    <div className="w-full bg-white p-8 md:p-16 flex flex-col md:flex-row gap-4">
      {/* Left Column - Images */}
      <div className="w-[589px] flex gap-4">
        {/* Main Large Image */}
        <div className="flex-shrink-0" style={{ width: '263px', height: '442px' }}>
          <img
            src="/chair.jpg"
            alt="Large Image"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Two Stacked Images */}
        <div className="flex flex-col gap-4" style={{ width: '263px', height: '442px' }}>
          <img
            src="/printer.jpg"
            alt="Top Image"
            className="w-full h-1/2 rounded-lg object-cover"
          />
          <img
            src="/group.jpg"
            alt="Bottom Image"
            className="w-full h-1/2 rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Column - Text */}
      {/* Right Column - Text */}
      <div className="md:w-1/2 flex flex-col justify-center font-poppins">
        <h3 className="gradient-text text-sm uppercase font-semibold">About Us</h3>
        <h2 className="text-gray-900 text-2xl md:text-4xl font-bold mt-2">
          One-stop Printer Solutions - Cost-effective & Reliable!!
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          With our exceptionally personalized service, we offer everything from
          printer installations to troubleshooting to maintenance. Count on our
          experts to deliver the right printer solutions with professional expertise.
        </p>

        {/* Stats Section */}
        <div className="flex items-center mt-6 gap-8">
          <div className="text-center">
            <div className="gradient-text text-4xl font-bold">240+</div>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <p className="text-gray-600">
            At USA Printer Solutions, we are backed by thousands of professionals
            worldwide, ensuring top-notch quality service.
          </p>
        </div>

        {/* Button */}
        <button className="mt-6 text-black px-6 py-3 rounded-lg shadow-md hover:bg-orange-600"
        style={{
          background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
      }}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default CustomLayout;
