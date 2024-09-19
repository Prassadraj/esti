"use client"; // This marks the file as a client component

import Tilt from "react-parallax-tilt";

import Image from "next/image";
import React from "react";

function Section2() {
  const data = [
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_bags/Women_Bags_WW_HP_Category_Push_V20240726_DII.jpg?wid=490",
      title: "Womens Bag's",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_slg/Women_SLG_WW_HP_Category_Push_V20240726_DII.jpg?wid=490",
      title: "  Women's Small Leather Goods",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_shoes/Men_Shoes_Sneakers_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title: " Men's Shoes",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_slg/Men_SLG_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title: "Men's Small Leather Goods",
    },

    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_bags/Men_LG_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title: " Men's Bags",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_accessories/Men_Belt_WW_HP_Category_Push_V20240517_DII.jpg?wid=490",
      title: "Men's Belts",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/perfumes/Perfumes_WW_HP_Category_Push_20240225_DII.jpg?wid=490",
      title: "Perfumes",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_fashionjewelry/Women_FashionJewelry_Category_Push_20240425_DII.jpg?wid=490",
      title: "Women's Fashion Jewellery",
    },
  ];
  return (
    <div className="h-fit w-full laptop:px-16 px-2">
      <div className="flex justify-center items-center w-full tablet:h-[10rem] h-[6rem]">
        <p className="tablet:text-4xl text-sm font-medium text-center ">
          Explore a Selection of the Maison's Creations
        </p>
      </div>
      <div className="grid grid-cols-2 tablet:grid-cols-4 tablet:gap-4 gap-3 laptop:gap-10">
        {data.map((data, i) => (
          <div key={i} className="flex items-center   flex-col mb-5">
            <Tilt
              tiltMaxAngleX={10} // Customize tilt angles
              tiltMaxAngleY={10}
              glareEnable={true} // Enable glare effect if needed
              glareMaxOpacity={0.45}
              scale={1.05} // Slightly scale on hover
              transitionSpeed={500} // Smooth transition
            >
              <div className="overflow-hidden">
                <Image
                  src={data.img}
                  className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out duration-700"
                  width={200}
                  height={200}
                />
              </div>
            </Tilt>
            <div className="tablet:py-5 py-2">
              <p
                className="text-xs
              max-w-md tablet:text-sm text-center laptop:text-base"
              >
                {data.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
