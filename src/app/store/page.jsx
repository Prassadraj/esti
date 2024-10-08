"use client";
import React, { useMemo, useState, useEffect } from "react";

function Store() {
  const [loading, setLoading] = useState(true);

  const data = useMemo(
    () => [
      {
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31089.987270193607!2d80.225125!3d13.083437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642929395c95%3A0x555be715da5b4a6c!2sEstilo%20Fashions!5e0!3m2!1sen!2sin!4v1728127958330!5m2!1sen!2sin",
        title: "Anna Nagar Address Location",
        info: `Chintamani, C100, 1st Avenue, Anna Nagar East, Chennai, Tamil Nadu 600102`,
      },
      {
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31086.166813236694!2d80.288584!3d13.113698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f6f70871c47%3A0x48f6446e4cfd32f!2sEstilo%20Fashions!5e0!3m2!1sen!2sin!4v1728127976063!5m2!1sen!2sin",
        title: "Old Washermanpet Address Location",
        info: `No.97, Mc Road, NN Garden,Old Washermanpet, Chennai,Tamil Nadu 600021`,
      },
      {
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31091.979710693377!2d80.227366!3d13.067628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526688b6f91fb7%3A0xe5b492eb2515d1b4!2sShoppers%20Corner%20(PayLess-ShopMore)!5e0!3m2!1sen!2sin!4v1728128002193!5m2!1sen!2sin",
        title: "Aminjikarai Address Location",
        info: `No. 144, Nelson Manickom Road,Officers Colony,Aminjikarai,Chennai,Tamil Nadu 600029`,
      },
    ],
    []
  );

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="h-screen">
      <div className="tablet:px-10 px-2 tablet:py-5 py-3 text-center laptop:text-left">
        <p className="laptop:text-xl font-semibold text-sm laptop:font-semibold">
          Discover Your Next Shopping Destination
        </p>
      </div>
      <div className="laptop:h-[400px] w-full flex flex-col tablet:flex-row gap-2 overflow-hidden px-5">
        {loading
          ? // Skeleton Loader
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex-1 p-5 animate-pulse">
                <div className="h-[300px] bg-gray-200 rounded-lg"></div>
                <div className="h-6 mt-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 mt-1 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          : // Actual Content
            data.map((location, i) => (
              <div key={i} className="flex-1 p-5">
                <iframe
                  className="w-full laptop:h-[300px]"
                  src={location.map}
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="h-full mt-2">
                  <p className="font-semibold text-sm">{location.title}</p>
                  <p className="text-xs">{location.info}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Store;
