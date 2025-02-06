"use client";

import Image from "next/image";
import React, { useState } from "react";
import Lottie from "lottie-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import hadf from "../../Public/images/WhatsApp Image 2024-12-31 at 12.40.13 AM.jpeg";
import cov from "../../Public/images/كافر-الموقع-.jpg-8.jpg";
import shapeAnimation from "../../Public/Animation/Animation - shape95.json";
import emailjs from "@emailjs/browser";
import serch from "../../Public/images/موقع6.jpg";
import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { FaBuildingFlag } from "react-icons/fa6";
import { MdLocalLibrary } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import logo from "../../Public/images/logo.jpg";

const KonWakelna = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);
  const keenSliderActiveRef = useRef(null);
  const keenSliderCountRef = useRef(null);
  useEffect(() => {
    if (!sliderRef.current) return;

    keenSliderRef.current = new KeenSlider(
      sliderRef.current,
      {
        loop: true,
        defaultAnimation: {
          duration: 750,
        },
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 640px)": {
            slides: {
              origin: "center",
              perView: 1.5,
              spacing: 16,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "center",
              perView: 1.75,
              spacing: 16,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "center",
              perView: 3,
              spacing: 16,
            },
          },
        },
        created(slider) {
          slider.slides[slider.track.details.rel].classList.remove(
            "opacity-40"
          );
          keenSliderActiveRef.current.innerText = slider.track.details.rel + 1;
          keenSliderCountRef.current.innerText = slider.slides.length;
        },
        slideChanged(slider) {
          slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
          slider.slides[slider.track.details.rel].classList.remove(
            "opacity-40"
          );
          keenSliderActiveRef.current.innerText = slider.track.details.rel + 1;
        },
      },
      []
    );

    return () => {
      keenSliderRef.current?.destroy();
    };
  }, []);

  const [phone, setPhone] = useState();

  const handleChange = (value) => {
    setPhone(value);
  };
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const hhandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة");
      return;
    }
    const serviceID = "service_m84rlq9"; // استبدل بـ Service ID من EmailJS
    const templateID = "template_ybufs6h"; // استبدل بـ Template ID من EmailJS
    const publicKey = "Jj_D5VUAIl5alBOat"; // استبدل بـ Public Key من EmailJS

    emailjs
      .send(
        serviceID,
        templateID,
        {
          company_name: formData.companyName,
          full_name: formData.fullName,
          address: formData.address,
          email: formData.email,
          phone: formData.phone,
        },
        publicKey
      )
      .then((response) => {
        alert("تم إرسال البريد الإلكتروني بنجاح!");
        console.log("Success:", response.status, response.text);
      })
      .catch((error) => {
        alert("حدث خطأ، حاول مرة أخرى.");
        console.error("Error:", error);
      });
  };
  const milestones = [
    " التحلي بالشفافية والوضوح في التعامل، مع الالتزام بالمعايير الأخلاقية والمهنية",
    "احترام الالتزامات المتفق عليها، بما في ذلك المواعيد والجودة المطلوبة.",
    "الالتزام بأهداف الشركة واستراتيجياتها.",
    "شركات وأفراد لديهم حس عالٍ بالمسؤولية ويؤمنون بأهمية العمل الخدمي الطلابي.",
    " المساهمة في تحقيق أهداف النمو والتوسع.",
  ];
  return (
    <>
      <div className="flex ">
        <Image
          src={cov}
          className=" h-[80vh]  md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem]  max-sm:object-cover"
        />
      </div>
      <div className="flex max-sm:w-[80rem] justify-between max-lg:w-[79rem] items-center bg-gradient-to-r from-pink-100 to-white rounded-lg p-8 border-t mt-1 border-dashed border-fuchsia-900">
        <div className="relative w-2/3 flex  items-center mt-12">
          <Image
            src={hadf} // استبدلها بصورة مشابهة
            alt="Student"
            className="w-[35rem] h-68 rounded-l-full object-cover"
          />
        </div>
        <div className="max-w-md mt-12 ">
          <h1 className="text-5xl font-bold text-gray-900">
            ماهي <span className="text-yellow-500"> أهدافنا ؟</span>
          </h1>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            تمكين الطلاب أكاديميًا وثقافيًا
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            تأسيس اكبر هوية تعليمية عالمية{" "}
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            دعم تطوير المهارات الشخصية والقيادية{" "}
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            المساهمة في بناء مجتمع معرفي{" "}
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            الاستدامة والمسؤولية المجتمعية{" "}
          </p>
        </div>
      </div>
      <section className="bg-white mt-12 mb-16 max-sm:w-[75rem] max-lg:w-[75rem] max-lg:mr-16">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mt-12">
            <div className="bg-fuchsia-900 w-[34.5rem] rounded-r-full h-72 z-40 absolute left-0 max-sm:right-[45rem]  max-lg:right-[45rem]  ">
              <Image src={logo} className="mx-auto w-20" />
              <h1 className="font-bold text-2xl m-9 mt-12 text-center leading-snug">
                الاّن يمكنك تحقيق اداء مميز والانتشار في الأنشطة والمجالات
                الطلابية مع Deva
              </h1>
            </div>
            <div ref={sliderRef} id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide opacity-40 transition-opacity duration-500 mt-16">
                <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[49rem] max-sm:mr-36 max-lg:ml-0">
                  <b className="font-bold text-black flex justify-center">
                    <MdLocalLibrary className="size-28 text-purple-700" />
                  </b>
                  <p className="mt-4 text-gray-700 text-center text-2xl font-bold">
                    مكاتب الخدمات العامة
                  </p>
                </blockquote>
              </div>
              <div className="keen-slider__slide opacity-40 transition-opacity duration-500 mt-16">
                <blockquote className="rounded-3xl bg-fuchsia-100 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[49rem] max-sm:mr-36  max-lg:ml-0">
                  <b className="font-bold text-black flex justify-center">
                    <FaSchool className="size-28 text-purple-700" />
                  </b>
                  <p className="mt-4 text-gray-700 text-2xl font-bold text-center ">
                    معاهد اللغات والتدريب
                  </p>
                </blockquote>
              </div>
              <div className="keen-slider__slide opacity-40 transition-opacity duration-500 mt-16">
                <blockquote className="rounded-3xl bg-fuchsia-100 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[49rem] max-sm:mr-36  max-lg:ml-0">
                  <b className="font-bold text-black flex justify-center">
                    <BiSolidSchool className="size-28 text-purple-700" />
                  </b>
                  <p className="mt-4 text-gray-700 text-2xl text-center font-bold">
                    شركات الخدمات الطلابية
                  </p>
                </blockquote>
              </div>
              <div className="keen-slider__slide opacity-40 transition-opacity duration-500 mt-16">
                <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[49rem] max-sm:mr-36  max-lg:ml-2">
                  <b className="font-bold text-black flex justify-center">
                    <FaBuildingFlag className="size-28 text-purple-700" />
                  </b>
                  <p className="mt-4 text-gray-700 text-2xl text-center font-bold">
                    وكالات السياحة والسفر
                  </p>
                </blockquote>
              </div>
              <div className="keen-slider__slide opacity-40 transition-opacity duration-500 mt-16 ">
                <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[49rem] max-sm:mr-36  max-lg:ml-2">
                  <b className="font-bold text-black flex justify-center">
                    <IoMdSchool className="size-28 text-purple-700" />
                  </b>
                  <p className="mt-4 text-center text-2xl text-gray-700 font-bold">
                    مستشارين اكادمين متميزين{" "}
                  </p>
                </blockquote>
              </div>
            </div>
            <div className=" flex justify-center items-center mt-4">
              <button
                className="text-gray-600 hover:text-gray-900 transition ml-5"
                onClick={() => keenSliderRef.current?.prev()}
              >
                <GoTriangleRight className="size-12 rounded-full mx-auto " />
              </button>
              <span className="text-sm text-gray-600">
                <span
                  className="text-2xl text-fuchsia-900 font-bold"
                  ref={keenSliderActiveRef}
                >
                  1
                </span>{" "}
                <b className="text-2xl text-violet-600 font-bold px-1">/</b>
                <span
                  className="text-fuchsia-900 font-bold text-2xl"
                  ref={keenSliderCountRef}
                >
                  2
                </span>
              </span>
              <button
                className="text-gray-600 hover:text-gray-900 transition mr-5"
                onClick={() => keenSliderRef.current?.next()}
              >
                <GoTriangleLeft className="size-12 rounded-full mx-auto  " />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center text-center h-16 text-5xl mt-4 text-fuchsia-950 font-bold max-sm:w-[79rem]">
        {" "}
        عن من نبحث <p className="text-yellow-300">من الوكلاء؟ </p>{" "}
      </div>
      <div className="flex justify-between bg-white max-sm:w-[79rem] max-lg:w-[79rem]">
        <div className="flex flex-col items-start space-y-6 p-8 bg-white">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center">
              <div className="w-6 h-6 bg-purple-800 rounded-r-full flex items-center justify-center text-white">
                ✔
              </div>
              {index < milestones.length - 1 && (
                <div className="h-16 w-1 bg-gray-800"></div>
              )}
              <div
                className={`ml-4 p-3 py-5 bg-fuchsia-900 text-white border rounded-l-lg  shadow`}
              >
                {milestone}
              </div>
            </div>
          ))}
        </div>
        <Image
          src={serch}
          className="h-[75vh] w-[30rem] max-sm:h-[50vh] max-lg:h-[50vh]"
        />
      </div>
      <div className="min-h-screen flex items-center max-lg:w-[79rem] justify-between bg-gradient-to-r from-pink-100 to-white p-6 border-dashed border rounded-lg border-stone-600 max-sm:w-[79rem]">
        <form className="bg-white p-8 rounded-lg shadow-lg w-[50%] space-y-6">
          <h2 className="text-2xl font-bold text-right mb-4">معلومات الشركة</h2>

          {/* اسم الشركة و الوكيل */}
          <div className="flex space-x-4">
            <input
              required
              name="companyName"
              value={formData.companyName}
              onChange={hhandleChange}
              type="text"
              placeholder="اسم الشركة أو الوكيل"
              className="p-3 border border-gray-300 rounded-lg text-gray-800 flex-1 ml-12 text-right"
            />
            <input
              required
              name="fullName"
              value={formData.fullName}
              onChange={hhandleChange}
              type="text"
              placeholder="الاسم الكامل"
              className="p-3 border border-gray-300 rounded-lg text-gray-800 flex-1 text-right"
            />
          </div>

          {/* عنوان الشركة */}
          <div>
            <input
              name="address"
              value={formData.address}
              onChange={hhandleChange}
              type="text"
              placeholder="عنوان الشركة"
              className="p-3 w-full border border-gray-300 text-gray-800 rounded-lg text-right"
            />
          </div>

          {/* معلومات التواصل */}
          <h2 className="text-2xl font-bold text-right">معلومات التواصل</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={hhandleChange}
              placeholder="البريد الإلكتروني"
              className="p-3 border border-gray-300 rounded-lg flex-1 ml-9 text-gray-800 text-right"
            />
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={handleChange}
              inputClass="!border !bg-transparent !border-gray-300 !rounded-lg !w-full !h-14 !py-4 !px-4 "
              containerClass="w-full max-w-xs"
            />
          </div>

          {/* كلمة المرور */}
          <h2 className="text-2xl font-bold text-right">كلمة المرور</h2>
          <div className="flex space-x-4">
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={hhandleChange}
              placeholder="إدخال كلمة المرور"
              className="p-3 border border-gray-300 ml-6 rounded-lg flex-1 text-gray-800 text-right"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={hhandleChange}
              required
              placeholder="  تأكيد كلمة المرور"
              className="p-3 border border-gray-300 rounded-lg text-gray-800 flex-1 text-right"
            />
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            value={sendEmail}
            className="w-full bg-purple-800 text-white p-3 rounded-lg hover:bg-purple-600 transition"
          >
            إرسال الآن
          </button>

          {/* رابط تسجيل الدخول */}
          <p className="text-right text-gray-700 text-sm">
            إذا كنت قد سجلت من قبل، يرجى{" "}
            <a href="#" className="text-yellow-600 hover:underline">
              تسجيل الدخول
            </a>
          </p>
        </form>
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie className="w-[35rem]" animationData={shapeAnimation} />
        </div>
      </div>
    </>
  );
};

export default KonWakelna;
