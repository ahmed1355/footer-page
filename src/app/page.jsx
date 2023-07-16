import React from "react";
import Title from "./title";
import Faq from "./Faq";
import Footer from "./footer";

export default function page() {
  return (
    <>
      <Title />
      <div className="mx-5 md:ml-12 md:mb-4">
        <p className="font-semibold mt-2 md:text-[35px] md:font-medium">
          Privacy policy
        </p>
        <p className="text-xs md:text-[16px] font-light ">
          Need help with something? Here are our{" "}
          <span className="md:hidden inline">FAQs</span>
          <span className="hidden md:inline">frequently asked questions</span>
        </p>
      </div>
      <Faq />
      <Footer />
    </>
  );
}
