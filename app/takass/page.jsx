import Image from "next/image";
import cover from "../../Public/images/WhatsApp Image 2025-01-12 at 1.55.18 PM.jpeg";
import logo from "../../Public/images/logo-png.png";
import Coursel from "../_components/Coursel";
const Page = () => {
  return (
    <>
      <Image
        src={cover}
        className=" h-[80vh]  md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem] max-sm:m max-sm:object-cover"
      />
      <div className="grid bg-fuchsia-800 rounded-3xl mx-auto mt-2 mb-9 max-sm:w-[60rem] max-sm:mr-[20%] max-lg:min-w-[70rem] max-lg:mr-20">
        <Image src={logo} className="w-32 md:w-48 mx-auto mt-5 mb-3" />
        <p
          dir="rtl"
          className="text-xl px-4 pb-4 text-center text-white font-bold leading-relaxed max-sm:ml-6"
        >
          لاتدع الحيرة تمنعك من اختيار تخصصك جميع الطلاب اختاروا تخصصاتهم وأنت
          ما زلت تفكر؟ لا تقلق، نحن هنا لمساعدتك! مع ديڤا، خطوتك الأولى للنجاح
          تبدأ الآن. تواصل مع ديڤا الآن لاختيار التخصص المناسب الذي يناسب
          طموحاتك وأحلامك
        </p>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
        التخصصات الطبية
      </h1>

      <Coursel />
    </>
  );
};

export default Page;
