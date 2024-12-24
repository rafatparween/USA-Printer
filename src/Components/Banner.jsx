import React from 'react';
import PrintIcon from '@mui/icons-material/Print';

const Banner = () => {
  return (
    <div className="p-8 rounded-lg mt-6"
      style={{
        background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
      }}>
      <section className="flex flex-col lg:flex-row justify-around items-center bg-white shadow-lg rounded-lg p-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center space-y-2">
          <PrintIcon className="text-black" fontSize="large" />
          <p className="text-xl font-semibold text-black">High Printer Speed</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <PrintIcon className="text-black" fontSize="large" />
          <p className="text-xl font-semibold text-black">Exceptional Printer Quality</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <PrintIcon className="text-black" fontSize="large" />
          <p className="text-xl font-semibold text-black">Reliable Performance</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;