"use client";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ImgLeftSection from "./components/ImgLeftSection";
import Products from "./components/Products";
import OurGoal from "./components/OurGoal";
import Help from "./components/Help";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
const HomePage = () => {
  return (
    <>
      {/* <Banner /> */}
      <div className='container mx-auto space-y-3 '>
        <Header />
        <Divider title={"ABOUT US"} />
        <ImgLeftSection />
        <Divider title={"SOLUTIONS & PRODUCT OFFERINGS"} />
        <Products />
        <OurGoal />
        <Help />
      </div>
    </>
  );
};

export default HomePage;
