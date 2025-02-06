"use client";
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
import React, { useState } from "react";
import Modal from "../_components/Model";
import { FaMapLocation } from "react-icons/fa6";
import Search from "../_components/Search";
const Search2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <Image
          src={cover}
          className=" h-[80vh]  md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem] pt-16  max-sm:object-cover"
          alt="cover"
        />
        <h1 className="mb-9 mt-12 text-3xl text-yellow-500 max-sm:mr-[17rem] font-bold bg-fuchsia-800 w-fit px-10 py-5 mx-auto max-lg:w-[50rem] max-lg:mr-[35%] max-lg:text-center rounded-full">
          التخصص الذي تبحث عنه موجود في الجامعات التالية
        </h1>
        <div className="absolute top-44"></div>
      </div>
      <div>
        <div className="flex flex-wrap cursor-pointer max-lg:mr-20 max-lg:w-[75rem]">
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="/altnbash"
              src={altnbash}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={altnbashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة ألتن باش
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../ankraMedipol"
              src={ankracover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={ankralogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              أنقرة ميديبول{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أنقرة
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../atilim"
              src={altmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={altmlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعةأتيليم{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أنقرة
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../bahcesehir"
              src={bashcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={bashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة بهشة شهير
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../beykent"
              src={bakntcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={bakntlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة بيكنت{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            href="../beykoz"
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../beykoz"
              src={bakozcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={bakozlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة بيكوز{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../biruni"
              src={baroncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={baronlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة بيروني
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../fatih-sultan"
              src={fathcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={fathlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة فاتح سلطان محمد
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={francover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              href="../fenerbahce"
              src={franlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة فنربهتشه{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../halic"
              src={gleshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={gleshlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة الخليج{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../isik"
              src={eshakcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={eshaklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة إيشيك{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../bilgi"
              src={blagicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={blagilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />{" "}
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              إسطنبول بيلجي{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../yeni-yuzyil"
              src={ynicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={ynilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة يني يوزل
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../arel"
              src={arilcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={arillogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة أسطنبول اّريل
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../atls"
              src={atlscover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={atlslogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة أسطنبول أطلس
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../aydin"
              src={aidncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={aidnlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة إسطنبول آيدن
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../istinye"
              src={astnicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={astnilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة إستينيا
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../ticaret"
              src={targtcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={targtlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة إسطنبول تيجاريت
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            href="../topkapi"
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../topkapi"
              src={tobkicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={tobkilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة توباكي
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            href="../kent"
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../kent"
              src={kentcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={kentlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة كينت
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>

          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../kultur"
              src={koltrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={koltrlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة كولتور
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../nisnantasi"
              src={nishcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={nishlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة نيشانتاشي{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../okan"
              src={okancover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={okanlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة اوكان
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../sabahelden"
              src={sabahcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={sabahlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة صباح الدين زعيم
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../galta"
              src={galtacover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={galtalogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة جالاتا
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../gedik"
              src={gedkcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={gedklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة جيديك
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../gelisim"
              src={glshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={glshlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة جيليشيم{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../kadr"
              src={kadrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={kadrlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة قادر هاس
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../lokman"
              src={lokcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={loklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة لقمان الحكيم
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أنقرة
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={osmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={osmlogo}
              href="../ostim"
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة أوستيم
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أنقرة
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../uskudir"
              src={uskcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
            />
            <Image
              src={usklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              جامعة اسكوادر{" "}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />
              تركيا -أسطنبول
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              سجل الاّن
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Search2;
