"use client";
import { motion } from "framer-motion";

import altnbash from "../../Public/images/Altinbas-University.jpg";
import altnbashlogo from "../../Public/images/Altinbas-Universitylogo.jpg";
import Image from "next/image";

import bashlogo from "../../Public/images/University-logo-BAU.jpg";
import bashcover from "../../Public/images/Bahcesehir-Istanbul.jpg";

import kentcover from "../../Public/images/Istanbul-Kent-.jpg";
import kentlogo from "../../Public/images/Istanbul-Kent-2 (1).jpg";

import uskcover from "../../Public/images/Uskudar-University.jpg";
import usklogo from "../../Public/images/Uskudar-University-1.jpg";

import glshcover from "../../Public/images/Gelisim-1.jpg";
import glshlogo from "../../Public/images/Gelisim.jpg";

import okancover from "../../Public/images/Okan-1.jpg";
import okanlogo from "../../Public/images/Okan.jpg";
import koltrcover from "../../Public/images/Istanbul-Kultur.jpg";
import koltrlogo from "../../Public/images/Istanbul-Kultur-2.jpg";

import loklogo from "../../Public/images/Lokman-Hekim.jpg";
import lokcover from "../../Public/images/Lokman-Hekim-1.jpg";

import aidncover from "../../Public/images/Istanbul-Aydin.jpg";
import aidnlogo from "../../Public/images/University-logo.jpg";

import atlscover from "../../Public/images/Istanbul-Atlas.jpg";
import atlslogo from "../../Public/images/Istanbul-Atlas-1.jpg";
const cards = [
  {
    id: 1,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-lg"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={altnbash}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={altnbashlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة ألتن باش</h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 2,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={bashcover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={bashlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة بهشة شهير</h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 3,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={kentcover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={kentlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة كينت </h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 4,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={uskcover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={usklogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة اسكوادر</h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 5,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={glshcover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={glshlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة جليشم</h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 6,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={okancover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={okanlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة اوكان</h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 7,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={koltrcover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={koltrlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة كولتور </h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 8,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={lokcover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={loklogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">
          جامعة لقمان الحكيم
        </h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 9,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={aidncover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={aidnlogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">
          جامعة اسطنبول ايدن{" "}
        </h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
  {
    id: 10,
    text: (
      <a
        href="../universitys"
        className="grid bg-[#fff] w-72 h-auto pb-2 rounded-lg shadow-sm mx-auto"
        style={{ border: "1px solid #ddd" }}
      >
        <Image
          src={atlscover}
          alt="altnbash"
          className="h-32 w-72 rounded-t-lg relative"
        />
        <Image
          src={atlslogo}
          className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
        />
        <h2 className="text-red-700 mx-auto font-semibold">جامعة اطلس</h2>

        <strong className="text-gray-700 mx-auto font-semibold text-lg">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <h5 className="pb-3 px-5 -mt-4">اسطنبول، تركيا</h5>
        </strong>
      </a>
    ),
  },
];

const Gamat = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold bg-fuchsia-900 rounded-full tracking-wides  max-lg:mr-[45%] py-2 mx-auto w-fit px-8 sm:text-5xl ">
        أفضل الجماعات
      </h1>
      <div className="overflow-hidden w-full py-10 h-auto mb-5 mt-3 rounded-lg pl-5 bg-[#fff] max-sm:w-[70rem] max-lg:w-[70rem] max-lg:mx-8 max-sm:mx-8">
        <motion.div
          className="flex gap-8"
          animate={{ x: "-100%" }}
          initial={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
            repeatType: "loop",
          }}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className=" h-48 flex items-center justify-between text-white rounded-lg shadow-lg "
            >
              {card.text}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Gamat;
