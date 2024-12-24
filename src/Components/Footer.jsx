import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-8 text-[16px]"
    style={{
        background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">printerlivesolution.com</p>
            <p className="text-sm">
              An independent third-party printer support company.
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2">
              We offer support and repair services for a wide range of printers,
              but we do not sell or promote any specific brand.
            </p>
            <p className="mb-2">
              By using our services, you acknowledge and agree that
              printerlivesolution.com is not liable for any warranties or guarantees
              offered by the original manufacturers.
            </p>
            <p className="mb-2">
              Any use of third-party trademarks or logos is intended to describe
              the compatibility of our services and does not imply any
              relationship or endorsement by the trademark holders.
            </p>
            <p>
              For official support and warranties, please contact the respective
              manufacturer directly.
            </p>
          </div>
        </div>
        <div className="border-t border-white mt-6 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} printerlivesolution.com. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
