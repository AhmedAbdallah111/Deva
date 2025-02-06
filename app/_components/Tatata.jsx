"use client";

import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import {
  FcAdvertising,
  FcBiomass,
  FcBullish,
  FcComboChart,
  FcDataConfiguration,
  FcDiploma1,
  FcGoodDecision,
  FcIdea,
  FcInspection,
  FcManager,
  FcNext,
  FcPlanner,
  FcPrevious,
  FcReading,
  FcSettings,
  FcSteam,
  FcSupport,
} from "react-icons/fc";
import Image from "next/image";
import bus from "../../Public/images/businesses.jpg";
import tab from "../../Public/images/doctor.jpg";
import hand from "../../Public/images/handsa.jpg";
import kora from "../../Public/images/coch.jpg";
import taya from "../../Public/images/tayran.jpg";
import tete from "../../Public/images/texher.jpg";
import { FaArrowLeft, FaArrowRight, FaVolleyballBall } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";
import { FaPersonSnowboarding } from "react-icons/fa6";
import { BsBrowserSafari } from "react-icons/bs";
import { PiAirplaneTiltFill, PiStudent } from "react-icons/pi";
import { MdLocalPolice } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

export default function Tatata() {
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

    // Auto-play logic
    const interval = setInterval(() => {
      keenSliderRef.current?.next();
    }, 3000); // Change slide every 3 seconds

    // Cleanup
    return () => {
      clearInterval(interval);
      keenSliderRef.current?.destroy();
    };
  }, []);

  return (
    <section className="bg-white max-sm:w-[60rem] max-lg:w-[70rem] max-lg:mr-20 max-sm:mr-[20%]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-3xl font-bold bg-fuchsia-900 rounded-full tracking-wides max-sm:mr-[45%] py-2 mx-auto w-fit px-8 sm:text-5xl ">
          اختر تخصصك{" "}
        </h2>
        <div className="mt-12 max-sm:-ml-32">
          <div
            ref={sliderRef}
            id="keen-slider"
            className="keen-slider max-sm:w-[25rem]"
          >
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500 ">
              <blockquote className="rounded-lg bg-blue-500 px-6 py-10 shadow-sm sm:p-8 h-[82vh] max-sm:w-[29rem] max-lg:w-[29rem] max-lg:mr-6 max-lg:ml-6 max-sm:mr-80">
                <FcManager className="animate-bounce  absolute inline-flex size-11 " />
                <FcBiomass className="animate-pulse mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] absolute inline-flex size-11 " />
                <Image
                  src={tab}
                  className="w-56 h-56 rounded-full flex justify-center mx-auto"
                />
                <FcGoodDecision className="animate-bounce mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] -mt-6 absolute inline-flex size-11" />
                <FcDiploma1 className="animate-pulse -mt-6 absolute inline-flex size-11" />
                <b className="font-bold text-3xl mt-6 text-white py-2 px-6  flex justify-center">
                  التخصصات الطبية{" "}
                </b>
                <p className="mt-4 text-center z-50 font-semibold">
                  التخصصات الطبية تشمل مجموعة واسعة من المجالات التي يركز كل
                  منها على جانب معين من الرعاية الصحية وهناك العديد من التخصصات
                  الأخرى التي تغطي مجالات مختلفة من الرعاية الصحية
                </p>
                <a
                  href="../takass"
                  className="flex bg-gray-600 px-6 mt-9 w-full text-white font-bold text-2xl justify-center text-center py-2 rounded-full"
                >
                  المزيد
                </a>
              </blockquote>
            </div>
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500 ">
              <blockquote className="rounded-lg bg-fuchsia-800 px-6 py-10 shadow-sm sm:p-8 h-[82vh] max-sm:w-[29rem] max-lg:w-[29rem]  max-lg:mx-8 max-sm:mr-80">
                <FcBullish className="animate-bounce  absolute inline-flex size-11 " />
                <FcIdea className="animate-pulse mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] absolute inline-flex size-11 " />
                <Image
                  src={bus}
                  className="w-56 h-56 rounded-full flex justify-center mx-auto"
                />
                <FcComboChart className="animate-bounce mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] -mt-6 absolute inline-flex size-11" />
                <FcDataConfiguration className="animate-pulse -mt-6 absolute inline-flex size-11" />
                <b className="font-bold text-3xl mt-6 text-white py-2 px-6  flex justify-center">
                  التخصصات الأدارية{" "}
                </b>
                <p className="mt-4 text-center z-50 font-semibold">
                  إذا كنت طالبًا مهتمًا بالإدارة، يمكنك بدء رحلتك التعليمية
                  بتحديد المجال الذي يلبي اهتماماتك وطموحاتك وإليك بعض المجالات
                  التي يمكنك دراستها والتخصص فيها
                </p>
                <a
                  href="../takass"
                  className="flex bg-purple-600 px-6 mt-9 w-full text-white font-bold text-2xl justify-center text-center py-2 rounded-full"
                >
                  المزيد
                </a>
              </blockquote>
            </div>

            <div className="keen-slider__slide opacity-40 transition-opacity duration-500 ">
              <blockquote className="rounded-lg bg-orange-500 px-6 py-10 shadow-sm sm:p-8 h-[82vh] max-sm:w-[29rem]  max-lg:ml-6  max-lg:w-[29rem] max-lg:mx-8 max-sm:mr-80">
                <FcSteam className="animate-bounce  absolute inline-flex size-11 " />
                <FcInspection className="animate-pulse mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] absolute inline-flex size-11 " />
                <Image
                  src={hand}
                  className="w-56 h-56 rounded-full flex justify-center mx-auto"
                />
                <FcSupport className="animate-bounce mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] -mt-6 absolute inline-flex size-11" />
                <FcSettings className="animate-pulse -mt-6 absolute inline-flex size-11" />
                <b className="font-bold text-3xl mt-6 text-white py-2 px-6  flex justify-center">
                  التخصصات الهندسية{" "}
                </b>
                <p className="mt-4 text-center z-50 font-semibold">
                  التخصصات الهندسية تشمل مجموعة من المجالات التي تركز على تصميم
                  وبناء الأنظمة والهياكل التكنولوجية ويمكن تقسيم كل مجال إلى
                  تخصصات دقيقة أخرى بناءً على نوع المشاريع والأنظمة المستهدفة
                </p>
                <a
                  href="../takass"
                  className="flex bg-gray-600 px-6 mt-9 w-full text-white font-bold text-2xl justify-center text-center py-2 rounded-full"
                >
                  المزيد
                </a>
              </blockquote>
            </div>
            <div className="keen-slider__slide opacity-40 transition-opacity duration-500 ">
              <blockquote className="rounded-lg bg-green-500 px-6 py-10 shadow-sm sm:p-8 h-[82vh] max-sm:w-[29rem] max-lg:w-[29rem] max-lg:mx-8 max-sm:mr-80">
                <FaVolleyballBall className="animate-bounce text-yellow-400 absolute inline-flex size-11 " />
                <RiFootballLine className="animate-pulse mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] text-black absolute inline-flex size-11 " />
                <Image
                  src={kora}
                  className="w-56 h-56 rounded-full flex justify-center mx-auto"
                />
                <FaPersonSnowboarding className="animate-bounce mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] -mt-6 absolute inline-flex size-11" />
                <BsBrowserSafari className="animate-pulse -mt-6 absolute inline-flex size-11" />
                <b className="font-bold text-3xl mt-6 text-white py-2 px-6  flex justify-center">
                  التخصصات الرياضية{" "}
                </b>
                <p className="mt-4 text-center z-50 font-semibold">
                  الرياضية تشمل مجموعة من المجالات التي تركز على تحليل وتطوير
                  المهارات البدنية والعقلية من خلال الأنشطة الرياضية وتتفرع هذه
                  التخصصات إلى مجالات دقيقة أخرى بناءً على نوع الرياضة والأنشطة
                  الممارسة، وكذلك الجوانب الأكاديمية والصحية المرتبطة بكل منها
                </p>
                <a
                  href="../takass"
                  className="flex bg-yellow-500 px-6 mt-6 w-full text-white font-bold text-2xl justify-center text-center py-2 rounded-full"
                >
                  المزيد
                </a>
              </blockquote>
            </div>

            <div className="keen-slider__slide opacity-40 transition-opacity duration-500 ">
              <blockquote className="rounded-lg bg-violet-400 px-6 py-10 shadow-sm sm:p-8 h-[82vh] max-sm:w-[29rem] max-lg:w-[29rem] max-lg:mx-8 max-sm:mr-80">
                <PiAirplaneTiltFill className="animate-bounce  absolute inline-flex size-11 " />
                <FcInspection className="animate-pulse mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] absolute inline-flex size-11 " />
                <Image
                  src={taya}
                  className="w-56 h-56 rounded-full flex justify-center mx-auto"
                />
                <MdLocalPolice className="animate-bounce mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] text-gray-300 -mt-6 absolute inline-flex size-11" />
                <FcPlanner className="animate-pulse -mt-6 absolute inline-flex size-11" />
                <b className="font-bold text-3xl mt-6 text-white py-2 px-6  flex justify-center">
                  تخصصات الطيران{" "}
                </b>
                <p className="mt-4 text-center text-white z-50 font-semibold">
                  تخصصات الطيران تشمل مجموعة من المجالات التي تركز على تصميم
                  وتشغيل وصيانة الطائرات، فضلاً عن العمليات المتعلقة بالطيران
                  وتغطي هذه التخصصات جوانب مختلفة من عالم الطيران، وهي تتطور
                  باستمرار لتواكب التقدم التكنولوجي والاحتياجات المتزايدة في
                  صناعة الطيران
                </p>
                <a
                  href="../takass"
                  className="flex bg-purple-800 px-6 mt-9 w-full text-white font-bold text-2xl justify-center text-center py-2 rounded-full"
                >
                  المزيد
                </a>
              </blockquote>
            </div>

            <div className="keen-slider__slide opacity-40 transition-opacity duration-500 ">
              <blockquote className="rounded-lg bg-red-400 px-6 py-10 shadow-sm sm:p-8 h-[82vh] max-sm:w-[29rem] max-lg:w-[29rem] max-lg:mx-8  max-sm:mr-80">
                <IoSchool className="animate-bounce  absolute inline-flex size-11 " />
                <FcReading className="animate-pulse mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] absolute inline-flex size-11 " />
                <Image
                  src={tete}
                  className="w-56 h-56 rounded-full flex justify-center mx-auto"
                />
                <FcAdvertising className="animate-bounce mr-[70%] max-sm:mr-[35%] max-lg:mr-[55%] -mt-6 absolute inline-flex size-11" />
                <PiStudent className="animate-pulse -mt-6 absolute inline-flex size-11" />
                <b className="font-bold text-3xl mt-6 text-white py-2 px-3 flex justify-center">
                  تخصصات العلوم العامة{" "}
                </b>
                <p className="mt-4 text-center z-50 font-semibold">
                  تخصصات التدريس والعلوم العامة تشمل مجالات متعددة تهدف إلى
                  إعداد الأفراد لتعليم مختلف المواد العلمية وتطوير مهارات البحث
                  العلمي و هذه التخصصات تشكل حجر الأساس للعديد من الوظائف
                  الأكاديمية والعلمية، وتساعد في تعزيز المعرفة
                </p>
                <a
                  href="../takass"
                  className="flex bg-red-900 px-6 mt-9 w-full text-white font-bold text-2xl justify-center text-center py-2 rounded-full"
                >
                  المزيد
                </a>
              </blockquote>
            </div>
            {/* Add more slides here */}
          </div>
          <div className="flex justify-center items-center mt-4 max-sm:hidden">
            <button
              className="text-gray-600 hover:text-gray-900 transition ml-5"
              onClick={() => keenSliderRef.current?.prev()}
            ></button>
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
            ></button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <FaArrowLeft className="size-9 animate-pulse mr-[32rem] mt-7 text-fuchsia-800 max-lg:hidden max-sm:hidden" />

        <a
          href="../takass"
          className="w-fit px-6 text-2xl flex justify-center cursor-pointer mx-auto  bg-fuchsia-900 font-bold mt-4 mb-8 max-sm:w-[20rem]  max-sm:ml-[25%] rounded-xl py-4 hover:opacity-75"
        >
          جميع التخصصات
        </a>
        <FaArrowRight className="size-9 animate-pulse ml-[32rem] mt-7 text-fuchsia-800 max-lg:hidden max-sm:hidden" />
      </div>
      <hr className="mx-auto w-10/12 mt-6" />
    </section>
  );
}
