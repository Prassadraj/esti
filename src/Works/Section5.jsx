import Image from "next/image";
import React from "react";

function Section5() {
  const data = [
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=2400",
      title: "Services",
      price: 999,
    },

    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=2400",
      title: "    Art of Gifting",
      price: 999,
    },

    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=2400",
      title: "Personalisation",
      price: 999,
    },
  ];
  return (
    <>
      <div className="laptop:h-[10rem] pt-5 tablet:pt-0 justify-end items-center flex flex-col gap-3">
        <p className="text-center text-base font-medium  tablet:font-normal laptop:text-4xl">
          Estilo Services
        </p>
        <p className="text-center px-1 capitalize text-sm tablet:text-base font-normal max-w-lg">
          Estilo offers complementary wrapping on all orders, carefully packaged
          in the Maison's iconic boxes.
        </p>
      </div>

      <div className="h-screen">
        <div
          className="grid tablet:grid-cols-3 tablet:gap-4 gap-3 bg-white
      h-full laptop:gap-15 p-2  laptop:py-10 tablet:py-14 tablet:px-5 laptop:px-10"
        >
          {data.map((data, i) => (
            <div key={i} className="flex  flex-col mb-5">
              <div
                className="overflow-hidden shadow-md shadow-gray-300 border bg-gradient-to-br
                   from-black/20
                 via-gray-100 to-white tablet:h-[300px] laptop:h-[400px]"
              >
                <Image
                  src={data.img}
                  className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out duration-700"
                  width={200}
                  height={200}
                />
              </div>

              <div className="tablet:py-3 py-2">
                <p
                  className="text-xs font-medium
              max-w-md tablet:text-lg text-center"
                >
                  {data.title}
                </p>
                <p
                  className="text-xs
              max-w-md text-left"
                >
                  {/* ₹{data.price} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section5;
