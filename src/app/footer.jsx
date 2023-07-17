// import React from "react";
// import Image from "next/image";
// import line from "./assets/Line.png";
// import Bline from "./assets/Line-bg.png";

// function footer() {
//   return (
//     <div className="mt-5 ">
//       <div
//         className="flex mx-5 @apply border-[color:var(--color-grey-100,#F5F5F6)] rounded-[32px] border-[1.5px] border-solid;
//   background: var(--color-white, #fff) shadow-[1px_1px_4px_0px_rgba(0,0,0,0.05)] "
//       >
//         <div className="mr-4">
//           <p className=" text-xs">
//             Pneuma is in <br /> closed beta mode
//           </p>
//           <p className="text-xs mt-2">
//             Share your <br /> experience,
//           </p>
//         </div>

//         <Image src={line} className="relative left-16 top-2 h-[110px]" />
//         <div className="ml-[100px]">
//           <p className="text-xs">
//             We are a newly
//             <br /> started platform <br /> and are actively <br /> looking for
//             partners
//           </p>
//           <div className=" mt-4">
//             <p className="text-xs relative right-[225px] whitespace-nowrap text-[#2C6C7B] font-semibold tracking-widest">
//               GIVE FEEDBACK
//             </p>
//             <p className="text-xs relative bottom-[15px] text-[#2C6C7B] font-semibold tracking-widest">
//               COLLABORATE
//               <br /> WITH US
//             </p>
//           </div>
//           <div className="overscroll-x-contain ">
//             <div className="flex relative right-[90px] ">
//               <ul className="relative right-[80px] text-xs mt-2">
//                 <li className="font-semibold mb-1">Company</li>
//                 <li className="">About</li>
//                 <li>Careers</li>
//                 <li className="whitespace-nowrap	">Change Log</li>
//               </ul>
//               <ul className="relative right-[37px] text-xs  mt-2">
//                 <li className="font-semibold mb-1">Legal</li>
//                 <li className="whitespace-nowrap">Privacy Policy</li>
//                 <li>Cookie Policy</li>
//                 <li>T & C</li>
//               </ul>
//               <ul className="text-xs  mt-2 ">
//                 <li className="font-semibold mb-1">Support</li>
//                 <li className="">FAQs</li>
//                 <li className="whitespace-nowrap	">Contact us</li>
//                 <li className="whitespace-nowrap	">System status</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Image
//         src={Bline}
//         className=" bottom-[120px] w-[300px] left-10 bg-black absolute"
//       />
//     </div>
//   );
// }

// export default footer;

import React from "react";
import Image from "next/image";
import line from "./assets/Line.png";
import Bline from "./assets/Line-bg.png";
import Sline from "./assets/Line-sm.png";
import logo from "./assets/Logo.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import insta from "./assets/insta.png";
import fb from "./assets/fb.png";

function Footer() {
  return (
    <div className="mt-5">
      <div
        className="mx-5 h-[300px] border-[color:var(--color-grey-100,#F5F5F6)] rounded-[32px] border-[1.5px] border-solid
       bg-white shadow-[1px_1px_4px_0px_rgba(0,0,0,0.05)] relative md:flex  
       md:h-[150px]"
      >
        <div className="absolute left-8 top-6">
          <p className="text-xs md:hidden">
            Pneuma is in <br /> closed beta mode
          </p>

          <p className="text-xs mt-2 md:hidden">
            Share your <br /> experience
          </p>
          <p className="hidden text-xs md:inline ">
            We are running on BETA.
            <br /> Please share your
            <br /> experience and suggestions.
          </p>
        </div>

        <Image
          src={line}
          className="absolute left-[170px] top-2 h-[110px] 
        md:left-[340px] md:top-[15px]"
        />
        <div className="ml-[200px] relative top-[18px] md:absolute md:ml-[1300px]">
          <p className="text-xs md:hidden ">
            We are a newly <br /> started platform <br /> and are actively
            <br /> looking for partners
          </p>
          <p className="hidden text-xs md:inline ">
            We are a newly minted
            <br /> platform and are actively
            <br /> looking for partners
          </p>
        </div>
        <div className="mt-4">
          <p
            className="text-xs relative left-[25px] bottom-[40px] whitespace-nowrap text-[#2C6C7B] font-semibold tracking-widest
          md:absolute ml-2 mt-[85px]"
          >
            GIVE FEEDBACK
          </p>
          <p
            className="text-xs absolute top-[95px] left-[200px] text-[#2C6C7B] font-semibold tracking-widest
          md:hidden"
          >
            COLLABORATE
            <br /> WITH US
          </p>
          <p
            className="hidden text-xs md:inline text-[#2C6C7B] font-semibold md:absolute 
          md:left-[1300px] top-28"
          >
            COLLABORATE WITH US
          </p>
        </div>
        <div>
          <div className="flex mx-8 mt-[10px] md:absolute md: left-[500px] bottom-[20px]">
            <ul className="relative right-3 text-xs mt-2 md:right-[100px] bottom-[1px]">
              <li className="font-semibold mb-1">Company</li>
              <li className="font-normal pb-1">About</li>
              <li className="pb-1">Careers</li>
              <li className="whitespace-nowrap">Change Log</li>
              <Image
                src={Sline}
                className="h-22 absolute left-[85px] bottom-1 md:hidden"
              />
            </ul>

            <ul className="ml-6 text-xs mt-2 md:absolute md:left-[100px] bottom-4 ">
              <li className="font-semibold mb-1 ">Legal</li>
              <li className="whitespace-nowrap pb-1">Privacy Policy</li>
              <li className="pb-1">Cookie Policy</li>
              <li>T & C</li>
              <Image
                src={Sline}
                className="h-22 absolute left-[225px] top-[180px] md:absolute
                 md:left-[520px] md:top-[-14px] h-[100px]"
              />
            </ul>
            <ul className="text-xs mt-2 ml-10  md:absolute md:left-[400px] bottom-4">
              <li className="font-semibold mb-1 sm:mr-[40px]">Support</li>
              <li className="pb-1">FAQs</li>
              <li className="whitespace-nowrap pb-1 ">Contact us</li>
              <li className="whitespace-nowrap ">System status</li>
            </ul>
          </div>
          <Image
            src={Bline}
            className=" absolute left-4 bottom-[150px] w-[330px] md:hidden"
          />
        </div>
      </div>
      <div
        className="flex justify-around mt-5 ml-5
  @apply border-[color:var(--color-grey-100,#F5F5F6)] rounded-3xl border-[1.5px] border-solid;
  background: var(--color-white, #fff) md:mt-8 md:justify-end mr-14 mb-9 "
      >
        <Image src={logo} className="md:absolute right-[1380px] " />
        <Image src={fb} className="w-[32px] h-[32px] md:mr-[80px] " />
        <Image src={twitter} className="w-[32px] h-[32px] md: relative right-[50px] " />
        <Image src={insta} className="w-[32px] h-[32px] md: relative right-[30px]" />
        <Image src={linkedin} className="w-[25px] h-[25px] mt-1" />
      <p className="hidden text-center font-light mb-3 md:inline md:absolute right-[600px] ">
      
        @ Pneuma. All Rights Reserved.
      </p>
      </div>
      <p className="text-center font-light relative bottom-[20px]  md:hidden  ">
      
        @ Pneuma. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
