import Image from "next/image";
import React from "react";
import lolo from "../../Public/images/r1.jpg";
import lolo2 from "../../Public/images/r2.jpg";
import lolo3 from "../../Public/images/r3.jpg";
import lolo4 from "../../Public/images/r4.jpg";
const Visit = () => {
  return (
    <>
      <hr className="mx-auto w-10/12 mt-12" />
      <h2 className="text-2xl md:text-3xl max-lg:w-[35rem] max-lg:mr-96 font-bold text-center max-sm:mr-[26rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
        بعض رحلتنا الترفهية لطلبنا داخل تركيا
      </h2>
      <div className="flex justify-center max-sm:w-[50rem] max-sm:mr-48 max-sm:flex-wrap max-lg:flex-wrap max-lg:w-[75rem]">
        {" "}
        <div className="flex items-center my-32 ">
          {/* الحاوية الأساسية */}
          <div className="relative w-80 h-48">
            {/* المربع الأحمر */}
            <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-r from-fuchsia-800 to-fuchsia-950 rounded-lg transform rotate-[-15deg]"></div>

            {/* المربع الأبيض */}
            <Image
              src={lolo}
              className="absolute top-0 left-8 w-64 h-40 rounded-lg shadow-lg transform rotate-[10deg]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-32 ">
          {/* الحاوية الأساسية */}
          <div className="relative w-96 h-48">
            {/* المربع الأحمر */}
            <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-r from-fuchsia-800 to-fuchsia-950 rounded-lg transform rotate-[-15deg]"></div>

            {/* المربع الأبيض */}
            <Image
              src={lolo2}
              className="absolute top-0 left-8 w-64 h-40 rounded-lg shadow-lg transform rotate-[10deg]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-32">
          {/* الحاوية الأساسية */}
          <div className="relative w-96 h-48">
            {/* المربع الأحمر */}
            <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-r from-fuchsia-800 to-fuchsia-950 rounded-lg transform rotate-[-15deg]"></div>

            {/* المربع الأبيض */}
            <Image
              src={lolo3}
              className="absolute top-0 left-8 w-64 h-40 rounded-lg shadow-lg transform rotate-[10deg]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-32">
          {/* الحاوية الأساسية */}
          <div className="relative w-96 h-48">
            {/* المربع الأحمر */}
            <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-r from-fuchsia-800 to-fuchsia-950 rounded-lg transform rotate-[-15deg]"></div>

            {/* المربع الأبيض */}
            <Image
              src={lolo4}
              className="absolute top-0 left-8 w-64 h-40 rounded-lg shadow-lg transform rotate-[10deg]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
