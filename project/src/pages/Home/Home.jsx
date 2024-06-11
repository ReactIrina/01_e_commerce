//import React from "react";
import Banner from "./Banner";
import Companies from "./Companies";
import Products from "./Products";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto ">
      <Banner />
      <Companies className="w-full mx-auto" />
      <Products />
    </div>
  );
};

export default Home;
