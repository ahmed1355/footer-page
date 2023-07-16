import React from "react";
import Title from "./title";
import Faq from "./Faq";
import Footer from "./footer";

export default function page() {
  return (
    <>
      <Title />
      <div className="mx-5">
        <p className="font-semibold mt-2">Privacy policy</p>
        <p className="text-xs">Need help with something? Here are our FAQs</p>
      </div>
      <Faq />
      <Footer />
    </>
  );
}
