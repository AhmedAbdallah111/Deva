"use client"; //
//  ضروري في Next.js 13 وما بعده للتعامل مع الحركات
import Image from "next/image";
import rig from "../../Public/images/موقع-10.jpg";
import lef from "../../Public/images/موقع9.jpg";

import {
  FcGraduationCap,
  FcReading,
} from "react-icons/fc";
import { MdOutlineQuestionMark } from "react-icons/md";
const Qustiton = () => {
  return (
    <div className=" px-2 py-32 sm:px-6 lg:px-8 flex justify-between max-sm:w-[80rem] max-lg:w-[79rem]">
      <Image
        src={rig}
        className="w-96 h-96 -mr-9 max-sm:w-72 max-lg:w-72 max-lg:h-72 max-sm:h-72 max-sm:mr-6"
      />
      <div className="relative overflow-hidden bg-white w-fit shadow-2xl rounded-3xl">
        {/* المحتوى النصي */}{" "}
        <FcReading className="size-20 -mb-10 mx-auto animate-bounce mt-4" />
        <div className="relative z-10 p-8 text-center md:p-16 lg:p-20">
          <FcGraduationCap className="size-16 left-[5.5%] top-10 absolute max-lg:-top-2 max-sm:-top-4" />
          <h2 className="mb-4 text-4xl font-bold text-start -mr-16 tracking-tight text-gray-900 max-sm:text-2xl max-sm:mr-12 sm:text-5xl">
            دليلك الشامل عن الدراسة في تركيا{" "}
          </h2>{" "}
          <MdOutlineQuestionMark className="size-16 animate-bounce -z-10 absolute left-10 top-5" />
          <MdOutlineQuestionMark className="size-16 -z-10 absolute bottom-36 right-9 animate-ping" />
          <MdOutlineQuestionMark className="size-16 -z-10 absolute bottom-3 right-12 animate-ping" />
          <MdOutlineQuestionMark className="size-16 -z-10 absolute bottom-16 right-7 animate-ping" />
          <MdOutlineQuestionMark className="size-16 -z-10 absolute bottom-32 right-32 animate-ping" />
          <MdOutlineQuestionMark className="size-16 -z-10 absolute bottom-24 right-16 animate-ping" />
          <MdOutlineQuestionMark className="size-16 -z-10 absolute bottom-48 right-3 animate-ping" />
          <p className="max-w-2xl mx-auto font-bold mb-8 text-2xl text-gray-600 max-sm:text-2xl max-sm:mx-auto">
            اجابة اسألتك للدراسة في تركيا هتلاقيها هنا
          </p>
          <MdOutlineQuestionMark className="size-16 animate-bounce -z-10 absolute left-10 top-5" />
          <MdOutlineQuestionMark className="size-12 -z-10 absolute top-36 left-40 animate-ping" />
          <MdOutlineQuestionMark className="size-10 -z-10 absolute top-48 left-12 animate-ping" />
          <MdOutlineQuestionMark className="size-11 -z-10 absolute top-16 left-36 animate-ping" />
          <MdOutlineQuestionMark className="size-14 -z-10 absolute top-10 left-32 animate-ping" />
          <MdOutlineQuestionMark className="size-11 -z-10 absolute top-24 left-48 animate-ping" />
          <MdOutlineQuestionMark className="size-6 -z-10 absolute top-96 left-3 animate-ping" />
          <a
            href="./Dalil"
            className="inline-block cursor-pointer px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-fuchsia-900 rounded-xl hover:bg-fuchsia-950 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            اضغط هنا{" "}
          </a>
        </div>
      </div>
      <Image
        src={lef}
        className="w-96 h-96 -ml-7 max-sm:w-72 max-sm:h-72 max-lg:w-72 max-lg:h-72 max-sm:ml-6"
      />
    </div>
  );
};

export default Qustiton;
