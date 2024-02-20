import React from "react";
import Header from "../../Components/Header";
import FreeCard from "./FreeCard";
import Filter from "./Filter";
import FreshCard from "./freshCard";
import FreshCarousel from "../../Components/FreshCarousel";
import Store from "./Store";
import Product from "./Product";
import GroupCard from "./GroupCard";
import TestimonialCarousel from "./testimonialCarousel";

function Home() {
  return (
    <>
      <Header />
      <FreeCard />
      <Filter />
      <FreshCard />
      <FreshCarousel />
      <Store />
      <Product />
      <GroupCard />
      <TestimonialCarousel />
    </>
  );
}

export default Home;
