import cover from "../../Public/images/cover.jpg";
import Image from "next/image";
import altnbash from "../../Public/images/Altinbas-University.jpg";
import altnbashlogo from "../../Public/images/Altinbas-Universitylogo.jpg";
import ankracover from "../../Public/images/Ankara-Medipol-University.jpg";
import ankralogo from "../../Public/images/ankara-medipol.jpg";
import altmcover from "../../Public/images/Atilim-University-2.jpg";
import altmlogo from "../../Public/images/Atilim-Universitylogo.jpg";
import bashlogo from "../../Public/images/University-logo-BAU.jpg";
import bashcover from "../../Public/images/Bahcesehir-Istanbul.jpg";
import bakntcover from "../../Public/images/Beykent-University-2.jpg";
import bakntlogo from "../../Public/images/Beykent-University.jpg";
import bakozlogo from "../../Public/images/Beykoz-University.jpg";
import bakozcover from "../../Public/images/Beykoz-University-1.jpg";
import baronlogo from "../../Public/images/Biruni-University.jpg";
import baroncover from "../../Public/images/Biruni-University-1.jpg";
import fathcover from "../../Public/images/Fatih-Sultan-Mehmet-University-1.jpg";
import fathlogo from "../../Public/images/Fatih-Sultan-Mehmet-University.jpg";
import franlogo from "../../Public/images/Fenerbahce-University.jpg";
import francover from "../../Public/images/Fenerbahce-University-1.jpg";
import gleshcover from "../../Public/images/Halic-University.jpg";
import gleshlogo from "../../Public/images/Halic-University-1.jpg";
import eshakcover from "../../Public/images/Isik-University.jpg";
import eshaklogo from "../../Public/images/Isik-University-1.jpg";
import blagicover from "../../Public/images/Istanbul-Bilgi-University-1.jpg";
import blagilogo from "../../Public/images/Istanbul-Bilgi-University.jpg";
import ynilogo from "../../Public/images/Istanbul-Yeni-Yuzyil.jpg";
import ynicover from "../../Public/images/Istanbul-Yeni-Yuzyil 1.jpg";
import arilcover from "../../Public/images/Istanbul-Arel-University 1.jpg";
import arillogo from "../../Public/images/Istanbul-Arel-University.jpg";
import atlscover from "../../Public/images/Istanbul-Atlas.jpg";
import atlslogo from "../../Public/images/Istanbul-Atlas-1.jpg";
import aidncover from "../../Public/images/Istanbul-Aydin.jpg";
import aidnlogo from "../../Public/images/University-logo.jpg";
import astnicover from "../../Public/images/Istinye-University.jpg";
import astnilogo from "../../Public/images/Istinye-University-1.jpg";
import targtcover from "../../Public/images/Ticaret-1.jpg";
import targtlogo from "../../Public/images/Ticaret.jpg";
import tobkicover from "../../Public/images/Topkapi-cover.jpg";
import tobkilogo from "../../Public/images/Topkapi.jpg";
import kentcover from "../../Public/images/Istanbul-Kent-.jpg";
import kentlogo from "../../Public/images/Istanbul-Kent-2 (1).jpg";
import koltrcover from "../../Public/images/Istanbul-Kultur.jpg";
import koltrlogo from "../../Public/images/Istanbul-Kultur-2.jpg";
import nishcover from "../../Public/images/Nisantasi-1.jpg";
import nishlogo from "../../Public/images/Nisantasi.jpg";
import okancover from "../../Public/images/Okan-1.jpg";
import okanlogo from "../../Public/images/Okan.jpg";
import sabahcover from "../../Public/images/Sabahattin-Zaim.jpg";
import sabahlogo from "../../Public/images/Sabahattin-Zaim-University.jpg";
import galtacover from "../../Public/images/Galata.jpg";
import galtalogo from "../../Public/images/Galata-1.jpg";
import gedkcover from "../../Public/images/Gedik-1.jpg";
import gedklogo from "../../Public/images/Gedik.jpg";
import glshcover from "../../Public/images/Gelisim-1.jpg";
import glshlogo from "../../Public/images/Gelisim.jpg";
import kadrcover from "../../Public/images/Kadir-Has-University-1.jpg";
import kadrlogo from "../../Public/images/Kadir-Has-University.jpg";
import lokcover from "../../Public/images/Lokman-Hekim-1.jpg";
import loklogo from "../../Public/images/Lokman-Hekim.jpg";
import osmcover from "../../Public/images/OSTIM-Technical-2.jpg";
import osmlogo from "../../Public/images/OSTIM-Technical.jpg";
import uskcover from "../../Public/images/Uskudar-University.jpg";
import usklogo from "../../Public/images/Uskudar-University-1.jpg";
const Main = () => {
  return (
    <>
      <div className="relative">
        <Image src={cover} alt="cover" />
        <div className="absolute top-44"></div>
      </div>
      <div>
        <h1 className="flex text-center justify-center text-fuchsia-800 items-center mt-16 text-6xl font-bold mb-10">
          جامعتنا
        </h1>
        <div className="flex flex-wrap cursor-pointer">
          <a
            href="/altnbash"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={altnbash}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={altnbashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة ألتن باش - Altinbas
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تعتمد الجامعة اللغتين الإنجليزية والتركية في التعليم، مما يتيح
              الفرصة للطلاب الدوليين للاندماج بسهولة...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../ankraMedipol"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={ankracover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={ankralogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-1 absolute font-semibold text-2xl">
              أنقرة ميديبول-Ankara Medipol
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              هي جامعة تركية خاصة تأسست في عام 2018 في العاصمة أنقرة. تُعد من
              الجامعات الحديثة التي تقدم تعليمًا متميزًا...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl"> انقرة،تركيا</h5>
            </strong>
          </a>
          <a
            href="../atilim"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={altmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={altmlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعةأتيليم - Atilim
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {" "}
              جامعة تركية خاصة تأسست عام 1997 في العاصمة أنقرة. بفضل برامجها
              الأكاديمية المتميزة وموقعها الاستراتيجي...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">انقره، تركيا</h5>
            </strong>
          </a>
          <a
            href="../bahcesehir"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={bashcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={bashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              بهشة شهير - Bahçeşehir
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              هي واحدة من الجامعات التركية الخاصة الرائدة، تأسست عام 1998 في قلب
              مدينة إسطنبول...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../beykent"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={bakntcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={bakntlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة بيكنت - Beykent
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              هي جامعة تركية خاصة تأسست عام 1997 في مدينة إسطنبول. تُعرف الجامعة
              بجودة برامجها الأكاديمية وتنوع تخصصاتها
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../beykoz"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={bakozcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={bakozlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة بيكوز - Beykoz
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة تركية خاصة تأسست عام 2008 في مدينة إسطنبول تُعد من الجامعات
              المتميزةالتي تركز على التميز...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../biruni"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={baroncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={baronlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة بيروني - Biruni
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              هي جامعة تركية خاصة تأسست عام 2014 في مدينة إسطنبول. تُعد من
              الجامعات المتميزة في تركيا...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../fatih-sultan"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={fathcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={fathlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-1 absolute font-semibold text-2xl">
              فاتح سلطان محمد-Fatih Sultan
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة وقفية تركية تأسست عام 2010 في مدينة إسطنبول تهدف الجامعة إلى
              تقديم تعليم عالي الجودة...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../fenerbahce"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={francover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={franlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة فنربهتشه - Fenerbahce
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة تركية خاصة حديثة التأسيس، تقع في مدينة إسطنبول. تُقدم
              الجامعة برامج تعليمية عاليةالجودة...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../halic"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={gleshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={gleshlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة حليش - Halic
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة تركية خاصة تأسست عام 1998 في إسطنبول. تُعد واحدة من الجامعات
              الرائدة التي تركز على الابتكار...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../isik"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={eshakcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={eshaklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة إيشيك - Işık
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة خاصة تأسست عام 1996 في مدينة إسطنبول. تُعد واحدة من الجامعات
              الرائدة التي تقدم تعليمًا عالي الجودة
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../bilgi"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={blagicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={blagilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              إسطنبول بيلجي- Istanbul Bilgi
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              إحدى الجامعات التركية الخاصة المرموقة، تأسست عام 1996. تُعرف
              الجامعة بتقديمها برامج...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../yeni-yuzyil"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={ynicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={ynilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              إسطنبول يني- Istanbul Yeni
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              واحدة من الجامعات التركية الخاصة التي تأسست عام 2009. تهدف الجامعة
              إلى تقديم تعليم عالي الجودة...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../arel"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={arilcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={arillogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              إسطنبول أريل-Istanbul Arel
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة خاصة تأسست عام 2007 في مدينة إسطنبول. تُعد من الجامعات
              الحديثة التي تقدم برامج...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../atls"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={atlscover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={atlslogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-1 absolute font-semibold text-2xl">
              إسطنبول أطلس-Istanbul Atlas
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              واحدة من الجامعات التركية الحديثة التي تأسست عام 2018. تتميز
              الجامعة بتقديم تعليم عالي...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../aydin"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={aidncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={aidnlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              إسطنبول آيدن- Istanbul Aydın
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              واحدة من الجامعات التركية الخاصة الرائدة، تأسست عام 2003 في مدينة
              إسطنبول. تتميز الجامعة ببرامجه واعتمادها...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../istinye"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={astnicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={astnilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة إستينيا - Istinye
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة تركية خاصة تأسست عام 2015، وهي واحدة من المؤسسات التعليمية
              الحديثة التي تهدف إلى...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../ticaret"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={targtcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={targtlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-4 absolute font-semibold text-2xl">
              إسطنبول تيجاريت-Ticaret
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              واحدة من الجامعات التركية الخاصة التي تأسست عام 2001. تتميز
              الجامعة بتركيزها على تعليم الطلاب المهارات...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../topkapi"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={tobkicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={tobkilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة توبكابي - Topkapi
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              إحدى الجامعات التركية الخاصة التي تقدم تعليمًا عالي الجودة في
              مجموعة متنوعة من التخصصات. تأسست الجامعة ...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../kent"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={kentcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={kentlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة كينت - istanbul kent
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تمتلك جامعة اسطنبول كينت حرمين جامعين ويقع الحرم الجامعي الرئيسي
              في ...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../kultur"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={koltrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={koltrlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة كولتور - istanbul kultur
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تسعي جامعة اسطنبول كولتور الي ان تصبح بارزة محليا ودوليا في مجالات
              مختلفة مثل الطب ...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../nisnantasi"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={nishcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={nishlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة نيشانتاشي - Nisantasi
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              جامعة خاصة تركيه تاسست في عام 2009 من قبل موئسسه نيشانتاشي للتعليم
              والثقافه...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../okan"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={okancover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={okanlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة اوكان - istanbul okan
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تجمع جامعة اسطنبول اوكان بشكل فعال بين التعليم النظري والتطبيقي
              وتعد من افضل الجامعات...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../sabahelden"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={sabahcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={sabahlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              صباح الدين - istanbul zaim
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تهدف الجامعه ان تكون واحده من افضل 5 جامعات في تركيا التي تتميز
              ببنيتها التحتيه الكبيره...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../galta"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={galtacover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={galtalogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة جالاتا - istanbul galata
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تسعي جامعة اسطنبول جالاتا الي توفير نظام تعليمي يتبع التطورات
              العالميه ويواكب...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../gedik"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={gedkcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={gedklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة جيديك - istanbul gedik
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              واحده من اهم الجامعات الخاصه في تركيا التي تهتم بالتدريب المهني
              وتتميز دوما بلتنظيم ...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../gelisim"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={glshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={glshlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة جليشم - Gelisim
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تهدف جامعة جليشم الي انت تكون زاحده من اهم الجامعات العالميه التي
              تضيف قيمة الي المجتمع...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../kadr"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={kadrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={kadrlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة قادر هاس - Kadir Has
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تهدف جامعه قادر هاس الي خلق بيئه التعليم والبحوث والمناقشة علي
              مستوي افضل في المجالات المختلفة...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
          <a
            href="../lokman"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={lokcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={loklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة لقمان الحكيم - Lokman
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تهتم جامعة لقمان الحكيم اهتمام خاص بلتخصصات الطبية بهدف تدريب
              المتخصصين الذين ...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">انقره، تركيا</h5>
            </strong>
          </a>
          <a
            href="../ostim"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={osmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={osmlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-7 absolute font-semibold text-2xl">
              جامعة اوستيم - Ostim
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تضم جامعة اوستيم مراكز البحث العلمي والتدريب ومركز حضانه المشروعات
              الشبابية...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">انقره، تركيا</h5>
            </strong>
          </a>
          <a
            href="../uskudir"
            className="flex bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={uskcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={usklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-2 absolute font-semibold text-2xl">
              جامعة اسكوادر - Uskudar
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              تأسست جامعة اسكوادر في عام 2011 من قبل مجموعه NP صاحبه السبق في
              مجالات العلاج...
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                المزيد
              </button>
            </p>
            <strong className="text-gray-700 mt-[22.8rem]  mr-7 absolute font-semibold text-2xl">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] mr-8 text-xl">اسطنبول، تركيا</h5>
            </strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
