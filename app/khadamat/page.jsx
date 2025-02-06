"use client";
import Image from "next/image";
import cover from "../../Public/images/cover-servises.jpg";
import logo from "../../Public/images/logo-png.png";
import ani from "../../Public/Animation/ani.json";
import call from "../../Public/Animation/call.json";
import call2 from "../../Public/Animation/call2.json";
import call3 from "../../Public/Animation/call3.json";
import plane2 from "../../Public/Animation/plane2.json";
import ticekt from "../../Public/Animation/ticket.json";
import mony from "../../Public/Animation/mony.json";
import mos from "../../Public/Animation/mos.json";
import bank from "../../Public/Animation/bank.json";
import phone from "../../Public/Animation/phone.json";
import car from "../../Public/Animation/car.json";
import sale from "../../Public/images/sale2.jpg";
import t4 from "../../Public/images/صيدلة-موقع.jpg";
import t5 from "../../Public/images/طب-بشري-موقع.jpg";
import t6 from "../../Public/images/طب-الاسنان-موقع.jpg";
import Lottie from "lottie-react";
import { TiFlowSwitch } from "react-icons/ti";
import Visit from "../_components/visit";

const khadamat = () => {
  return (
    <>
      <Image
        src={cover}
        className="w-full h-[80vh] max-sm:h-[70vh] max-lg:min-w-[80rem]"
      />

      <div className="grid mt-2 rounded-l-full bg-fuchsia-800 font-bold px-9 ml-4 max-sm:w-[79rem] max-lg:w-[79rem]">
        <Image src={logo} className="w-40 mx-auto" />
        <p className="text-2xl text-center py-6">
          اليكم بعض الخدمات التي نقدمها في Deva Education وهي الخدمات الطلابية
          مثل توجيه النصائح وغيرها من الخدمات
          <br />
          وخدمات مابعد القبول مثل التامين الصحي وغيرها من الخدمات التي ستدهشك
        </p>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] my-12 max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
        خدمتنا الطلابية{" "}
      </h1>

      <div className="flex  gap-16 justify-center mx-20 max-sm:w-[75rem] max-lg:w-[75rem] max-lg:mr-5 max-sm:mr-5">
        <div className="bg-purple-700 grid p-4 rounded-3xl w-1/2 hover:opacity-70">
          <Lottie className="w-24 mx-auto" animationData={ani} />
          <h1 className="font-bold text-4xl py-4 text-yellow-400 mx-auto">
            القبول الجامعي المجاني
          </h1>
          <p className="text-xl font-bold text-center">
            نقدّم لك خدمة متكاملة لتحصيل القبولات الجامعية في أفضل الجامعات
            التركية مجاناّّ وبسهولة واحترافية، من خلال فريقنا المكوّن من أكثر من
            60 مستشارًا أكاديميًا مؤهلًا لمساعدتك في كل خطوة
          </p>
        </div>
        <div className="bg-fuchsia-800 hover:opacity-70 grid p-4 rounded-3xl w-1/2">
          <Lottie className="w-24 mx-auto" animationData={call} />
          <h1 className="font-bold text-4xl mx-auto py-4 text-yellow-400">
            استشارة تعليمية مجانية{" "}
          </h1>
          <p className="text-xl  font-bold text-center">
            نقدّم لك استشارة تعليمية مجانية شاملة تساعدك في التخطيط لمستقبلك
            الدراسي في تركيا بخطوات واضحة ومدروسة. فريقنا المؤلف من أكثر من 60
            مستشارًا أكاديميًا معتمدًا جاهز لتقديم المساعدة في توجيهك لاختيار
            التخصص الأنسب لمهاراتك وطموحاتك
          </p>
        </div>
      </div>
      <TiFlowSwitch className="text-gray-600 size-36 mx-auto max-sm:mr-[34rem] max-lg:mr-[34rem]" />
      <div className="flex  gap-16 justify-center mx-20 max-sm:w-[75rem] max-sm:mr-5 max-lg:w-[75rem] max-lg:mr-5">
        <div className="bg-fuchsia-800 grid p-4 rounded-3xl w-1/2 hover:opacity-70">
          <Lottie className="w-24 mx-auto" animationData={call2} />
          <h1 className="font-bold text-4xl py-4 text-yellow-400 mx-auto">
            خدمة المتابعة المجانية{" "}
          </h1>
          <p className="text-xl font-bold text-center">
            نقدم لك خدمة متابعة مجانية شاملة لمرافقتك خطوة بخطوة خلال رحلتك
            التعليمية في تركيا، حيث يحرص فريقنا المكوّن من أكثر من 60 مستشارًا
            أكاديميًا على تقديم الدعم الكامل في تحديث مستمر لملفك الأكاديمي
            وتقديم النصائح الأكاديمية{" "}
          </p>
        </div>
        <div className="bg-purple-700 hover:opacity-70 grid p-4 rounded-3xl w-1/2">
          <Lottie className="w-40 mx-auto" animationData={call3} />
          <h1 className="font-bold text-4xl mx-auto -mt-10 py-4 text-yellow-400">
            نحن معك دائمًا{" "}
          </h1>
          <p className="text-xl  font-bold text-center">
            نحن هنا لتقديم المشورة التي تحتاجها لتحقيق أهدافك الأكاديمية بثقة
            ونجاح ونصائح للتأقلم مع الثقافة التركية، المعيشة وقديم نصائح حول
            تنظيم الوقت وتحسين الأداء الدراسي والتميز الأكاديمي
          </p>
        </div>
      </div>
      <hr className="mx-auto w-10/12 my-4" />
      <div className="bg-gray-100 max-lg:w-[79rem]  max-lg:-mr-4 max-lg:text-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          خدمتنا مابعد القبول
        </h1>
        <div className="max-sm:w-[79rem]">
          <Image
            src={sale}
            className=" mx-auto w-[50rem] h-96 max-sm:w-[75rem] max-lg:w-[75rem]"
          />
          <p className="text-gray-100 absolute py-4 font-bold text-xl text-center w-[27rem] max-lg:w-[39rem] max-lg:mr-72 max-lg:leading-10 rounded-full mr-[35%] -my-[22rem] px-4 max-sm:w-[39rem] max-sm:mr-72 max-sm:leading-10">
            يسعدنا تواصلك معنا! في DEVA EDUCATION، نسعى لتقديم تجربة أكاديمية
            مميزة تدعم نجاحك في كل خطوة. مستشارك التعليمي سيتواصل معك قريبًا
            لتفاصيل التسجيل والدراسة. وعند التسجيل من خلالنا، ستحصل على باقة
            مجانية شاملة بقيمة 1000 دولار 💰 نقدمها لك مجانًا
            <br />
          </p>
          <i className="text-5xl absolute font-bold -mt-40 mr-[32%] py-4 text-red-600 max-sm:w-[39rem] max-lg:w-[39rem] max-lg:mr-72 max-sm:mr-72">
            باقة مجانية بقيمة1000$
          </i>
        </div>

        <div className="flex justify-between mx-16 my-10 gap-4 col-span-3 max-sm:w-[75rem] max-lg:w-[75rem] max-sm:mr-10">
          <div className="grid font-bold rounded-3xl p-4 bg-gray-700 w-full hover:opacity-70">
            <Lottie className="w-32 mx-auto" animationData={plane2} />
            <h1 className="font-bold text-3xl mx-auto max-lg:text-2xl py-4 text-yellow-300 max-sm:text-2xl">
              بداية رحلتك الجامعية بكل راحة{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدم لك خدمة الاستقبال من المطار لضمان وصولك إلى تركيا بأمان
              وراحة، حيث يكون فريقنا بانتظارك فور وصولك لتقديم المساعدة الكاملة
            </p>
          </div>
          <div className="grid font-bold rounded-3xl  p-4 bg-blue-800 w-full hover:opacity-70">
            <Lottie className="w-44 mx-auto" animationData={ticekt} />
            <h1 className="font-bold text-3xl mx-auto mt-4 py-4 max-lg:text-2xl text-yellow-300 max-sm:text-2xl">
              إصدار الإقامة الطلابية في تركيا{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدّم لك خدمة مساعدة في إصدار الإقامة الطلابية في تركيا، لنوفر
              عليك عناء الإجراءات المعقدة، حيث يتولى فريقنا المؤهل كل التفاصيل
            </p>
          </div>
          <div className="grid font-bold rounded-3xl  p-4 bg-gray-700 w-full hover:opacity-70">
            <Lottie className="w-32 mx-auto" animationData={mony} />
            <h1 className="font-bold text-3xl mx-auto  py-4 max-lg:text-2xl text-yellow-300 max-sm:text-2xl">
              ضمان إكمال الإجراءات بسلاسة{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نحن نقدم لك دعمًا شاملاً في دفع رسوم الإقامة الطلابية وترجمة
              الأوراق الرسمية، للتأكد من إتمام كافة إجراءات الإقامة بشكل دقيق
            </p>
          </div>
        </div>
        <div className="flex justify-between mx-16 my-10 gap-4 col-span-3 max-sm:w-[75rem] max-lg:w-[75rem] max-sm:mr-10">
          <div className="grid font-bold rounded-3xl p-4 bg-blue-800 w-full h-80 hover:opacity-70">
            <Lottie className="w-32 mx-auto" animationData={mos} />
            <h1 className="font-bold text-3xl mx-auto max-lg:text-2xl  py-4 text-yellow-300 max-sm:text-2xl">
              تجربة تسجيل ميسّرة{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدّم لك خدمة المرافقة الشخصية أثناء التسجيل الجامعي لضمان إتمام
              جميع الإجراءات بسهولة ووضوح وحل أي مشكلات قد تواجهك أثناء التسجيل
            </p>
          </div>
          <div className="grid font-bold rounded-3xl h-80 hover:opacity-70 p-4 bg-gray-700 w-full">
            <Lottie className="w-36 mx-auto" animationData={bank} />
            <h1 className="font-bold text-3xl mx-auto mt-2 py-3 max-lg:text-2xl text-yellow-300 max-sm:text-2xl">
              فتح حساب بنكي للطلاب{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدّم لك خدمة فتح حساب بنكي في تركيا لضمان تسهيل معاملاتك
              المالية بأمان وراحة وتفعيل الخدمات المصرفية مثل تفعيل البطاقة
              البنكية والخدمات الإلكترونية
            </p>
          </div>
          <div className="grid font-bold rounded-3xl p-4  bg-blue-800 w-full h-80 hover:opacity-70">
            <Lottie className="w-32 mx-auto" animationData={phone} />
            <h1 className="font-bold text-3xl mx-auto max-lg:text-2xl py-3 text-yellow-300 max-sm:text-2xl">
              تبقى على اتصال منذ يومك الأول{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدّم لك خط جوال مجاني لمدة شهر كامل عند وصولك إلى تركيا، لتبقى
              متصلاً بأحبائك وتدير شؤونك بسهولة منذ اللحظة الأولى و مساعدتك في
              تفعيل الخط وضبط الإعدادات عند الحاجة
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-16 my-10 gap-4 max-sm:w-[75rem] max-lg:w-[75rem] max-sm:mr-10">
          <div className="grid font-bold rounded-3xl p-4 bg-gray-700 w-[29rem] h-80 hover:opacity-70">
            <Lottie className="w-40  mx-auto" animationData={car} />
            <h1 className="font-bold text-3xl max-lg:text-2xl mx-auto -mt-6  py-2 text-yellow-300 max-sm:text-2xl">
              تيسير تنقلاتك داخل المدينة{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدّم لك كارت مواصلات عامة فور وصولك إلى تركيا لتسهيل تنقلاتك
              اليومية داخل المدينة براحة وسهولة وتسليم الكارت وتفعيله عند وصولك
              مباشرةوشرح آلية استخدام الكارت والاستفادة منه
            </p>
          </div>
          <div className="grid font-bold rounded-3xl h-80 hover:opacity-70 p-4 bg-blue-800 w-[29rem]">
            <Lottie className="w-32 mx-auto" animationData={call2} />
            <h1 className="font-bold text-3xl mx-auto mt-1 max-lg:text-2xl py-3 text-yellow-300 max-sm:text-2xl ">
              مرشد تعليمي وخط ساخن لخدمتك{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨نقدّم لك دعمًا تعليميًا متواصلاً طوال العام لمساعدتك في كل خطوة
              من رحلتك الأكاديمية في تركيا ونصائح مستمرة حول الأداء الدراسي
              واختيار المواد والاستعداد للامتحانات
            </p>
          </div>
          <div className="grid font-bold rounded-3xl h-80 hover:opacity-70 p-4 bg-gray-700 w-[29rem]">
            <div className="flex gap-12 mx-auto">
              <Image src={t4} className="w-24 rounded-full" />
              <Image src={t5} className="w-24 rounded-full" />
              <Image src={t6} className="w-24 rounded-full" />
            </div>
            <h1 className="font-bold text-3xl mx-auto mt-3 py-3 max-lg:text-2xl text-yellow-300 max-sm:text-2xl">
              هدايا Deva Education{" "}
            </h1>
            <p className="text-xl font-bold text-center">
              ✨طلاب التخصصات الطبية (طب بشري، طب أسنان، صيدلة) سيحصلون على
              تذكرة طيران مجانية
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-100 bg-gradient-to-r max-lg:w-[75rem] max-lg:mr-8   from-gray-800 to-purple-700 py-4 font-bold text-xl text-center  w-11/12 rounded-full mx-auto my-4 px-4 max-sm:w-[75rem] max-sm:mr-10">
        سجل الآن واستفد من خصومات تصل إلى 75% على رسوم الجامعة. نحن هنا لدعمك من
        أول يوم حتى تخرجك. لا تتردد في التواصل معنا لأي استفسار، ونتمنى لك كل
        النجاح والتوفيق!
      </p>
      <Visit />
    </>
  );
};

export default khadamat;
