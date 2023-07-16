import React from "react";
import Image from "next/image";
import Logo from "./assets/logo.png";
import Menu from "./assets/menu.jpg";

function Title() {
  return (
    <>
      <div
        className="flex justify-between my-3 mx-1  @apply border border-[color:var(--grey-50,rgba(245,245,246,0.50))]
         shadow-[1px_1px_4px_0px_rgba(0,0,0,0.05)] 
        rounded-[35px] border-solid;
  background: #fff; py-1"
      >
        <Image src={Logo} className="rounded-[100px] ml-3" />
        <Image src={Menu} className="mr-5 h-5 @apply relative top-2.5" />
      </div>
    </>
  );
}

export default Title;
