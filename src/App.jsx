import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import AboutUsSection from "./Components/AboutSecyion";
import Banner from "./Components/Banner";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./blogs/BlogPage"
import BlogDetailPage from "./blogs/BlogDetailPage"


export default function App() {
  return (
    <>
        <Navbar/>
        <Slider/>
        <AboutUsSection/>
        <Hero/>
        <Banner/>
        <Routes>
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
        </Routes>
        <Footer/>
      
   
      
        
           
       
      
    </>
  )
}
