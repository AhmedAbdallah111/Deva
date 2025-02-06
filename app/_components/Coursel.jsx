"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sayha from "../../Public/images/sayha.jpg";
import asnan from "../../Public/images/asnan.jpg";
import tamred from "../../Public/images/alag.jpg";
import saydala from "../../Public/images/saydala.jpg";
import basry from "../../Public/images/basry.jpg";
import alag from "../../Public/images/علاج-موقع.jpg";
import asaf from "../../Public//images/التمريض-موقع.jpg";
import taksaya from "../../Public/images/takzya.jpg";
import takhader from "../../Public/images/tkh.jpg";
import hantab from "../../Public/images/handsaTaby.jpg";
import car from "../../Public/images/c.jpg";
import barmga from "../../Public/images/barmga.jpg";
import handtay from "../../Public/images/handsa tayran.jpg";
import meka from "../../Public/images/mekaatros.jpg";
import mekaneka from "../../Public/images/mekaneka.jpg";
import amara from "../../Public/images/emara.jpg";
import tamsem from "../../Public/images/tasmem.jpg";
import kmya from "../../Public/images/handsaKemya.jpg";
import zka from "../../Public/images/zakaasany.jpg";
import fadaa from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.01 PM.jpeg";
import kaza from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.02 PM.jpeg";
import kahrba from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.02 PM (2).jpeg";
import manzar from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.07 PM.jpeg";
import edarahan from "../../Public/images/edaraHandsa.jpg";
import amal from "../../Public/images/ادارة-الاعمال.jpg";
import edara1 from "../../Public/images/edara1.jpeg";
import lagost from "../../Public/images/kadmatlag.jpg";
import nazm from "../../Public/images/nzm.jpg";
import amn from "../../Public/images/امن-المعلومات.jpg";
import alaka from "../../Public/images/التجارة-الدولية.jpg";
import masrah from "../../Public/images/2-المسرح.jpg";
import daya from "../../Public/images/موقع-دعايا-وعلان.jpg";
import music from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.08 PM (3).jpeg";
import cocik from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.08 PM (2).jpeg";
import matha from "../../Public/images/معلم-الرياضيات-2.jpg";
import kmyaa from "../../Public/images/معلم-الكيمياء21.jpg";
import tafl from "../../Public/images/تنميه-الطفل-2.jpg";
import eslim from "../../Public/images/الدراسات-الاسلاميه.-2jpg.jpg";
import falsfa from "../../Public/images/flsfa.jpg";
import sahfa from "../../Public/images/sahafa.jpeg";
import trgma from "../../Public/images/الترجمه-3.jpg";
import tarzy from "../../Public/images/WhatsApp Image 2025-01-16 at 11.42.08 PM (1).jpeg";
import disgenr from "../../Public/images/تصميم-الجرافيك-موقع.jpg";
import mag1 from "../../Public/images/edara2.jpg";
import kanon from "../../Public/images/kanon.jpg";
import gum from "../../Public/images/edara1.jpeg";
import tayar from "../../Public/images/Handsata.jpg";

const imagesSet1 = [
  { src: asnan, name: "طب الاسنان" },
  { src: alag, name: "العلاج الطبيعي" },
  { src: saydala, name: "الصيدلة" },
  { src: basry, name: "الطب البشري" },
  { src: tamred, name: "التمريض" },
  { src: asaf, name: "الاسعافات الاولية" },
  { src: taksaya, name: " التغذية" },
  { src: takhader, name: "التخدير" },
];
const imagesSet2 = [
  { src: hantab, name: " الهندسة الطبية" },
  { src: barmga, name: " هندسة البرمجيات" },
  { src: car, name: "هندسة السيارات" },
  { src: handtay, name: " هندسة الطيران" },
  { src: meka, name: "هندسة الميكاترونكس" },
  { src: mekaneka, name: " هندسة الميكانيكة" },
  { src: amara, name: " هندسة العمارة" },
  { src: tamsem, name: "هندسة التصميم الداخلي" },
  { src: kmya, name: "  الهندسة الكميائية" },
  {
    src: zka,
    name: "هندسة الذكاء الاصطناعي",
  },
  {
    src: fadaa,
    name: "هندسة الفضاء ",
  },
  {
    src: kaza,
    name: " الهندسة الغذائية ",
  },
  {
    src: kahrba,
    name: "هندسة  الكهرباء والالكترونيات",
  },
  {
    src: manzar,
    name: "هندسة   المناظر الطبيعية",
  },
];
const imagesSet3 = [
  { src: edarahan, name: "  الادارة الهندسية " },
  { src: amal, name: " ادارة الاعمال" },
  { src: edara1, name: "  الادارة الطبية" },
  {
    src: lagost,
    name: "ادارة الخدمات اللوجستية ",
  },
  { src: nazm, name: "  نظم المعلومات الادارية" },
  { src: amn, name: " امن المعلومات" },
  { src: alaka, name: "  العلاقات الدولية" },
];
const imagesSet4 = [
  { src: masrah, name: "   المسرح " },
  {
    src: music,
    name: "   الموسيقي ",
  },
  {
    src: cocik,
    name: "    فن الطهي والطبخ ",
  },
];
const imagesSet5 = [
  { src: matha, name: "معلم الرياضيات " },
  { src: kmyaa, name: "معلم الكيمياء " },
];
const imagesSet6 = [
  { src: tafl, name: " تنميه الطفل " },
  { src: trgma, name: " الترجمة " },
  { src: eslim, name: " الدراسات الأسلامية " },
  { src: sayha, name: " الارشاد السياحي " },
  { src: falsfa, name: "  الفلسفة " },
];
const imagesSet7 = [
  {
    src: sahfa,
    name: "  الصحافة ",
  },
  {
    src: daya,
    name: "   الدعاية والاعلان ",
  },
];
const imagesSet8 = [
  {
    src: tarzy,
    name: "  تصميم الازياء ",
  },
  {
    src: disgenr,
    name: "    تصميم الجرافيك ",
  },
];
const imagesSet9 = [
  {
    src: mag1,
    name: "   الادارة الرياضية ",
  },
  {
    src: gum,
    name: "     التدريب الرياضي ",
  },
];
const imagesSet10 = [
  {
    src: kanon,
    name: "    القانون ",
  },
  {
    src: tayar,
    name: "      الطيران ",
  },
];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full overflow-hidden flex flex-wrap justify-center items-center h-auto max-sm:w-[80rem] max-lg:w-[70rem]">
      <div className="grid grid-cols-1 max-sm:grid-cols-3 max-sm:gap-24 max-lg:grid-cols-3 max-lg:gap-24  lg:grid-cols-4 gap-20 justify-center ">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className="relative w-64 h-96 sm:w-64 sm:h-96 flex-shrink-0"
                initial={{ scale: 1 }}
                animate={{ scale: isActive ? 1.25 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
              <motion.p
                className="text-center text-xl sm:text-lg font-bold bg-fuchsia-800 rounded-full px-3 py-1 mt-3"
                initial={{ scale: 1 }}
                animate={{ scale: isActive ? 1.25 : 1 }}
                transition={{ duration: 0.5 }}
              >
                {image.name}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CarouselsPage = () => {
  return (
    <>
      <div className="space-y-16 sm:px-8 pb-9">
        <Carousel images={imagesSet1} />
        <hr className="w-10/12 mx-auto pt-5" />
        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          التخصصات الهندسية
        </h1>
        <Carousel images={imagesSet2} />
        <hr className="w-10/12 mx-auto pt-5" />

        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          التخصصات الادارية
        </h1>
        <Carousel images={imagesSet3} />
        <hr className="w-10/12 mx-auto pt-5" />

        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          تخصصات الفن والمسرح
        </h1>
        <Carousel images={imagesSet4} />
        <hr className="w-10/12 mx-auto pt-5" />

        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          تخصصات العلوم العامة
        </h1>
        <Carousel images={imagesSet5} />
        <hr className="w-10/12 mx-auto pt-5" />

        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          التخصصات الادبية التربوية
        </h1>
        <Carousel images={imagesSet6} />

        <hr className="w-10/12 mx-auto pt-5" />

        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          تخصصات الصحافة والاعلام
        </h1>
        <Carousel images={imagesSet7} />
        <hr className="w-10/12 mx-auto pt-5" />

        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          تخصصات التصميم
        </h1>
        <Carousel images={imagesSet8} />
        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          تخصصات الرياضة
        </h1>
        <Carousel images={imagesSet9} />
        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          تخصصات عامة
        </h1>
        <Carousel images={imagesSet10} />
      </div>
    </>
  );
};

export default CarouselsPage;
