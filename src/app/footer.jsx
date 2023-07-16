import React from "react";
import Image from "next/image";
import line from "./assets/Line.png";
import Bline from "./assets/Line-bg.png";

function footer() {
  return (
    <div className="mt-5 ">
      <div
        className="flex mx-5 @apply border-[color:var(--color-grey-100,#F5F5F6)] rounded-[32px] border-[1.5px] border-solid;
  background: var(--color-white, #fff) shadow-[1px_1px_4px_0px_rgba(0,0,0,0.05)] "
      >
        <div className="mr-4">
          <p className=" text-xs">
            Pneuma is in <br /> closed beta mode
          </p>
          <p className="text-xs mt-2">
            Share your <br /> experience,
          </p>
        </div>

        <Image src={line} className="relative left-16 top-2 h-[110px]" />
        <div className="ml-[100px]">
          <p className="text-xs">
            We are a newly
            <br /> started platform <br /> and are actively <br /> looking for
            partners
          </p>
          <div className=" mt-4">
            <p className="text-xs relative right-[225px] whitespace-nowrap text-[#2C6C7B] font-semibold tracking-widest">
              GIVE FEEDBACK
            </p>
            <p className="text-xs relative bottom-[15px] text-[#2C6C7B] font-semibold tracking-widest">
              COLLABORATE
              <br /> WITH US
            </p>
          </div>
          <div className="overflow-x-hidden ">
            <div className="flex relative right-[90px] ">
              <ul className="relative right-[80px] text-xs mt-2">
                <li className="font-semibold mb-1">Company</li>
                <li className="">About</li>
                <li>Careers</li>
                <li className="whitespace-nowrap	">Change Log</li>
              </ul>
              <ul className="relative right-[37px] text-xs  mt-2">
                <li className="font-semibold mb-1">Legal</li>
                <li className="whitespace-nowrap">Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>T & C</li>
              </ul>
              <ul className="text-xs  mt-2 ">
                <li className="font-semibold mb-1">Support</li>
                <li className="">FAQs</li>
                <li className="whitespace-nowrap	">Contact us</li>
                <li className="whitespace-nowrap	">System status</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={Bline}
        className=" bottom-[120px] w-[300px] left-10 bg-black absolute"
      />
    </div>
  );
}

export default footer;
