// import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
// import AboutUsSection from "./Components/AboutSecyion";
// import Banner from "./Components/Banner";
// import Hero from "./Components/Hero";
// import Footer from "./Components/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BlogPage from "./blogs/BlogPage"
// import BlogDetailPage from "./blogs/BlogDetailPage"


// export default function App() {
//   return (
//     <>
//         <Navbar/>
//         <Slider/>
//         <AboutUsSection/>
//         <Hero/>
//         {/* <BlogPage/> */}
//         <Routes>
//           <Route path="/blogs" element={<BlogPage />} />
//           <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
//         </Routes>
//         <Banner/>
//         <Footer/>
      
   
      
        
           
       
      
//     </>
//   )
// }


import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import AboutUsSection from "./Components/AboutSecyion";
import Banner from "./Components/Banner";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./blogs/BlogPage";
import BlogDetailPage from "./blogs/BlogDetailPage";

export default function App() {
  return (
      <>
        <Navbar />
        <div id="home">
          <Slider />
        </div>
        <div id="about">
          <AboutUsSection />
        </div>
        <div id="services">
          <Hero />
        </div>
        <div id="blogs">
          <BlogPage/>
          {/* <BlogDetailPage/> */}
          <Routes>
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
          </Routes>
        </div>
        <div id="why-choose-us">
          <Banner/>
        </div>
        <Footer />
      </>
  
  );
}

