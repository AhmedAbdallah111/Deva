"use client";

import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FcNext, FcPrevious } from "react-icons/fc";
import Image from "next/image";
import nof from "../../Public/images/nof.png";
import haz from "../../Public/images/haz.png";
import tosh from "../../Public/images/tosh.png";
import bahaa from "../../Public/images/bahaa.png";
import ali from "../../Public/images/ali.png";

export default function Test() {
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

  return (
    <section className="bg-white">
      <hr className="my-6 " />
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold bg-fuchsia-900 rounded-full tracking-wides py-3 px-6 mx-auto w-fit max-sm:w-[40rem] max-sm:mr-80 sm:text-4xl max-lg:w-[40rem] max-lg:mr-72 ">
          بعض التقيمات الموثوقة من عملائنا{" "}
        </h2>
        <div className="mt-12 max-sm:w-[70rem] max-lg:w-[70rem] max-lg:mr-6 max-sm:mr-28">
          <div ref={sliderRef} id="keen-slider" className="keen-slider">
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500">
              <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[40rem] max-lg:ml-16 max-sm:mr-56">
                <Image
                  src={tosh}
                  className="w-16 h-16 rounded-full  border-r-violet-500 border-l-fuchsia-700 border-t-4 border-t-red-600 border-b-4 border-b-yellow-500 border-l-4 border-r-4 flex justify-center mx-auto"
                />
                <b className="font-bold text-black flex justify-center">
                  أ \ محمود عبداللطيف
                </b>
                <p className="mt-4 text-gray-700 font-bold">
                  انتم مجموعة متميزة جداّ المنقذ اقل ما يقال عنكم كان سيضيع عليا
                  عام دراسي كامل لولاكم وتسهل الامور في اقرب وقت ممكن بدون اي
                  تعقيدات اتمني لكم التميز دوماّ ومزيد من الابداع شكراّ Deva
                </p>
              </blockquote>
            </div>
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500">
              <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[40rem] max-sm:mr-56 max-lg:ml-16">
                <Image
                  src={nof}
                  className="w-16 h-16 rounded-full  border-r-violet-500 border-l-fuchsia-700 border-t-4 border-t-red-600 border-b-4 border-b-yellow-500 border-l-4 border-r-4 flex justify-center mx-auto"
                />
                <b className="font-bold text-black flex justify-center">
                  د \ محمد نوفل
                </b>
                <p className="mt-4 text-gray-700 font-bold">
                  لقد ساندني فريقهم كطالب مغترب منذ اللحظة الاولي لم اكن اتخيل
                  ان الامور سوف تكون بهذه السرعه والبساطه في انهاء المعاملات
                  حقيقه لهم جزيل الشكر في متابعتي حتي طول فتره الدراسة
                </p>
              </blockquote>
            </div>
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500">
              <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[40rem] max-sm:mr-56 max-lg:ml-16">
                <Image
                  src={haz}
                  className="w-16 h-16 rounded-full  border-r-violet-500 border-l-fuchsia-700 border-t-4 border-t-red-600 border-b-4 border-b-yellow-500 border-l-4 border-r-4 flex justify-center mx-auto"
                />
                <b className="font-bold text-black flex justify-center">
                  م \ حازم متولي{" "}
                </b>
                <p className="mt-4 text-gray-700 font-bold">
                  فريق Deva متميز جداّّ في انهاء المعاملات في اقصر وقت ممكن
                  وانهاء كافة الامور بسلاسة وبدون تعقيدات انامدين لهم بلشكر علي
                  جميع التميزات التي حصلت عليها في تركية بسببهم{" "}
                </p>
              </blockquote>
            </div>
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500">
              <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[40rem] max-sm:mr-56 max-lg:ml-16">
                <Image
                  src={bahaa}
                  className="w-16 h-16 rounded-full  border-r-violet-500 border-l-fuchsia-700 border-t-4 border-t-red-600 border-b-4 border-b-yellow-500 border-l-4 border-r-4 flex justify-center mx-auto"
                />
                <b className="font-bold text-black flex justify-center">
                  ك \ محمد بهاء
                </b>
                <p className="mt-4 text-gray-700 font-bold">
                  افضل مؤسسة اتعملت معاها حقيقه سرعه في تساهيل السفر والتأشيرة
                  ومتابعة بعد السفر ديماّّ وسرعه التسجيل في السكن الجامعي{" "}
                </p>
              </blockquote>
            </div>
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500">
              <blockquote className="rounded-lg bg-fuchsia-50 px-6 py-10 shadow-sm sm:p-8 max-sm:w-[40rem] max-sm:mr-52 max-lg:ml-16">
                <Image
                  src={ali}
                  className="w-16 h-16 rounded-full  border-r-violet-500 border-l-fuchsia-700 border-t-4 border-t-red-600 border-b-4 border-b-yellow-500 border-l-4 border-r-4 flex justify-center mx-auto"
                />
                <b className="font-bold text-black flex justify-center">
                  د \ احمد علي{" "}
                </b>
                <p className="mt-4 text-gray-700 font-bold">
                  افضل الاماكن اللي سجلت معاها في درجة الماجستير متميزين في
                  ترجمه جميع الوثائق وتأمين حجوزات السفر{" "}
                </p>
              </blockquote>
            </div>
          </div>
          <div className=" flex justify-center items-center mt-4">
            <button
              className="text-gray-600 hover:text-gray-900 transition ml-5"
              onClick={() => keenSliderRef.current?.prev()}
            >
              <FcNext className="h-7 w-8 rounded-full mx-auto bg-slate-600 " />
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
              <FcPrevious className="h-7 w-8 rounded-full mx-auto bg-slate-600 " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
