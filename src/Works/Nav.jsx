import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <div className="w-full flex justify-around h-[3rem] laptop:h-[4rem] tablet:h-[4rem] bg-white fixed border-b-2 top-0 left-0 z-10">
      <div className="text-xl tablet:text-2xl laptop:text-4xl font-semibold flex h-full w-full justify-center items-center">
        <div>
          <Image src="/estilo.png" width={150} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
