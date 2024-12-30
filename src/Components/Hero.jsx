import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-8 font-poppins text-[#37B7C3]">Services</h2>
      <main className="bg-[#EEEEEE] text-gray-800 font-poppins h-[530px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 p-10">
          <section className="md:w-1/2">
            <h1 className="text-4xl font-extrabold mb-4">
              Your Printer Problems, Solved
            </h1>
            <h2 className="text-2xl font-semibold mb-6">
              Expert Solutions Available Around the Clock
            </h2>
            <ul className="space-y-4 ">
              <li className="flex items-center gap-3">
                <PrintIcon className="text-[#37B7C3]" />
                <p>Quick Setup for New Printers</p>
              </li>
              <li className="flex items-center gap-3">
                <PrintIcon className="text-[#37B7C3]" />
                <p>Seamless Wi-Fi Printer Connectivity</p>
              </li>
              <li className="flex items-center gap-3">
                <PrintIcon className="text-[#37B7C3]" />
                <p>Driver Installation and Updates</p>
              </li>
              <li className="flex items-center gap-3">
                <PrintIcon className="text-[#37B7C3]" />
                <p>Troubleshooting Offline Issues</p>
              </li>
            </ul>
            <p className="mt-8 text-lg">
              Reach out to our around-the-clock Customer Support for Immediate Help
            </p>
          </section>
          <section className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/hero.avif"
              alt="Printer Assistance"
              className="max-w-full rounded-lg shadow-xl object-cover max-h-[400px]"
            />
          </section>
        </div>

        <div className="flex justify-center space-x-4 bg-white py-5 shadow-inner">
          <Link
            to="/setup-new-printer"
            className="text-black py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300"
            style={{
              background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
            }}
          >
            Setup New Printer
          </Link>
          <Link
            to="/fix-printer-issues"
            className="text-black py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300"
            style={{
              background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
            }}
          >
            Fix Printer Issues
          </Link>
          <Link
            to="/update-printer-drivers"
            className="text-black py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300" style={{
              background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
            }}
          >
            Update Printer Drivers
          </Link>
        </div>
      </main>
    </>
  );
}

export default Hero;