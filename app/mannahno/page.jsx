import Image from "next/image";
import cover from "../../Public/images/man.jpg";
import ManNahno from "../_components/ManNahno";
import hadf from "../../Public/images/WhatsApp Image 2024-12-31 at 12.40.13 AM.jpeg";
import massega from "../../Public/images/massage.jpg";
import serch from "../../Public/images/موقع6.jpg";
import logo from "../../Public/images/logo-png.png";

import {
  FaHandHoldingHand,
  FaHandshakeSimple,
  FaHandsPraying,
} from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { SiPrefect } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";

import { FaHeart } from "react-icons/fa";
import Contact from "../_components/Contact";

const mannahno = () => {
  return (
    <>
      <Image
        src={cover}
        className=" h-[80vh]  md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem]  max-sm:object-cover"
      />
      <div className="grid bg-fuchsia-800 rounded-3xl mx-auto mt-2 mb-9 max-sm:w-[60rem] max-sm:mr-[20%] max-lg:min-w-[70rem] max-lg:mr-20">
        <Image src={logo} className="mx-auto w-64" />
        <h2 className="pt-3 mx-auto text-yellow-500 text-3xl font-bold">
          من هم Deva Education؟
        </h2>
        <div className="text-white pt-4 text-lg px-8 leading-9 font-bold">
          تأسست Deva Education عام 2018 برؤية حديثة تهدف إلى إحداث نقلة نوعية في
          مجال الإرشاد الأكاديمي الدولي، من خلال تمكين الطلاب من اتخاذ قرارات
          واعية ومدروسة بشأن مسارهم التعليمي في تركيا. تؤمن Deva Education بأن
          التعليم هو مفتاح النجاح، لذا تقدم خدمات متكاملة تبدأ من التوجيه
          الأكاديمي الشخصي، مرورًا بمساعدة الطلاب في اختيار البرامج والجامعات
          التي تتناسب مع تطلعاتهم، وصولًا إلى تسهيل إجراءات التسجيل والإقامة في
          تركيا. ما يميز Deva Education هو التزامها بالابتكار والتحديث المستمر،
          حيث تقدم برامج إرشادية مصممة خصيصًا لتلبية احتياجات الطلاب، إضافة إلى
          تنظيم ورش عمل تدريبية وجلسات توجيه فردية تهدف إلى تطوير مهارات الطلاب
          الأكاديمية والشخصية. منذ انطلاقتها، ساعدت الشركة مئات الطلاب الدوليين
          في تحقيق أحلامهم الأكاديمية، بفضل شراكاتها القوية مع أبرز الجامعات
          التركية، وتقديمها فرصًا تعليمية مميزة تشمل منحًا وخصومات حصرية لجميع
          المراحل الدراسية.
        </div>
      </div>
      <div className="flex justify-between max-lg:w-[75rem] max-lg:mr-8  items-center bg-gradient-to-r from-pink-50 to-white rounded-lg p-8 border-t border-dashed border-spacing-16 border-gray-600 max-sm:w-[75rem]">
        <div className="relative w-2/3 flex  items-center mt-12">
          <Image
            src={hadf} // استبدلها بصورة مشابهة
            alt="Student"
            className="w-[35rem] h-68 rounded-l-full object-cover"
          />
        </div>
        <div className="max-w-md mt-12">
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
      <div className="flex max-lg:w-[75rem] max-lg:mr-12 justify-between px-10 mt-16 border-x-2 rounded-3xl border-gray-300 border-y-4 rounded-r-full max-sm:w-[70rem] max-sm:mr-36">
        <div className="grid mr-20 ">
          <h1 className="bg-fuchsia-800  font-bold w-fit h-20 mt-5 tracking-wider text-5xl px-12 pt-3 rounded-3xl  ">
            رسالتنا
          </h1>
          <p className="text-xl font-bold text-gray-500 pl-5 -mt-20">
            مستشار تعليمي محترف يتمتع بخبرة واسعة، يكرس جهوده لمساندة الطلاب
            الأجانب الراغبين في الدراسة بتركيا، عبر تقديم فرص تعليمية متميزة
            وخدمات متكاملة تشمل توجيههم لاختيار التخصص الأمثل، تأمين القبول
            الجامعي، المساعدة في التسجيل والإقامة، مع توفير دعم مستمر يرافقهم
            طوال رحلتهم التعليمية وصولاً إلى التخرج، لضمان مستقبل أكاديمي ناجح.
          </p>
        </div>
        <Image src={massega} className="w-96 ml-20" />
      </div>
      <div className="flex justify-between px-10 mt-16 max-lg:mr-12 max-lg:w-[70rem] border-x-2 rounded-3xl rounded-l-full border-gray-300 border-y-4 max-sm:w-[70rem]">
        <Image src={serch} className="w-96 ml-20 " />
        <div className="grid mr-20 max-sm:-mr-3  ">
          <h1 className="bg-fuchsia-800 font-bold w-fit h-20 mt-5 tracking-wider text-5xl px-12 pt-3 mr-80 rounded-3xl max-sm:mr-52 max-lg:mr-52">
            رؤيتنا
          </h1>
          <p className="text-xl font-bold text-gray-500 px-5 -mt-20">
            بوابتك الأولى لتحقيق طموحاتك الأكاديمية في تركيا. نقدم خدمات متكاملة
            للطلاب الدوليين تشمل الاستشارات التعليمية، القبول الجامعي، والإرشاد
            الأكاديمي، مع التزام تام بالاحترافية والمصداقية
          </p>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl max-lg:w-[35rem] max-lg:mr-96 my-12 font-bold text-center max-sm:mr-[26rem]  max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
        بعض معاير ومبادئ Deva Education
      </h2>
      <div className="flex flex-wrap gap-9 max-lg:w-[75rem] max-lg:mr-8  justify-center px-6 my-10 max-sm:w-[70rem] max-sm:mr-20">
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHandshakeSimple className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            الثقة والاحترام المتبادل{" "}
          </h1>
          <p className="text-lg text-center -mt-10">
            تبني علاقات قوية مع الطلاب تعتمد على الثقة، الاحترام، والمسؤولية{" "}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHandsPraying className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            النمو المستمر{" "}
          </h1>
          <p className="text-lg text-center -mt-10">
            تشجع على التعلم المستمر وتطوير مهارات الطلاب والمعلمين على حد سواء{" "}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHandHoldingHand className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            المسؤولية والالتزام{" "}
          </h1>
          <p className="text-lg text-center -mt-10">
            تحمل المسؤولية والالتزام بتقديم أفضل ما يمكن لضمان نجاح الطلاب في
            مسيرتهم التعليمية{" "}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <GiTeamIdea className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">الابتكار </h1>
          <p className="text-lg text-center -mt-10">
            تسعى الشركة إلى تبني أساليب تعليمية حديثة ومبتكرة لضمان تجربة
            تعليمية متميزة{" "}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHeart className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">النزاهة </h1>
          <p className="text-lg text-center -mt-10">
            تعمل الشركة بصدق وشفافية في جميع تعاملاتها مع الطلاب والشركاء{" "}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <IoSchoolOutline className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">الاستدامة </h1>
          <p className="text-lg text-center -mt-10">
            تسعى الشركة إلى تحقيق الاستدامة في تقديم التعليم والموارد بطريقة
            تواكب تطورات العصر{" "}
          </p>
        </div>

        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <SiPrefect className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            الالتزام بالجودة{" "}
          </h1>
          <p className="text-lg text-center -mt-10">
            تضمن الشركة تقديم خدمات تعليمية ذات معايير عالية تلبي احتياجات
            الطلاب{" "}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FiTrendingUp className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            الدعم الشامل{" "}
          </h1>
          <p className="text-lg text-center -mt-10">
            توفر بيئة تعليمية داعمة تساعد الطلاب على التفوق الأكاديمي والنمو
            الشخص{" "}
          </p>
        </div>
      </div>
      <hr className="mx-auto w-10/12 pt-8" />
      <div className="grid bg-fuchsia-800 pl-6 mr-[8.25%] max-lg:w-[75rem] max-lg:rounded-lg max-lg:mr-8 max-lg:px-6 overflow-hidden pr-9 mt-20 w-11/12 rounded-r-full max-sm:w-[75rem] max-sm:rounded-lg max-sm:px-5 max-sm:text-center">
        <Image src={logo} className="w-56 mt-5 mx-auto" />
        <h1 className="text-3xl text-yellow-500 font-bold mx-auto mb-5 mt-2">
          لماذا تختار Deva Education
        </h1>
        <p className="text-xl pr-20 font-bold py-3 max-sm:p-0 max-sm:-mr-6 max-lg:-mr-24">
          <b className="p-1">✅</b>
          الاحترافية والمصداقية: تقدم Deva Education خدمات استشارية موثوقة تعتمد
          على الشفافية والمصداقية في جميع مراحل القبول الجامعي.
        </p>
        <p className="text-xl mx-auto font-bold py-3 max-sm:-mr-3 max-lg:-mr-4">
          <b className="p-1">✅</b>
          تقديم حلول متكاملة: من استشارات اختيار التخصص والجامعة، إلى متابعة طلب
          القبول والإقامة، نقدم لك حزمة متكاملة من الخدمات التعليمية{" "}
        </p>
        <p className="text-xl mx-auto font-bold py-3 max-sm:-mr-3 max-lg:-mr-4">
          <b className="p-1">✅</b>
          شراكات مع أفضل الجامعات: شراكاتنا الواسعة مع الجامعات التركية المرموقة
          تضمن لك الوصول إلى أفضل البرامج التعليمية بخصومات مميزة{" "}
        </p>
        <p className="text-xl pr-20 font-bold py-3 max-sm:pr-0 max-sm:-mr-32 max-lg:-mr-24">
          <b className="p-1">✅</b>
          دعم مخصص للطلاب: نؤمن بأن كل طالب لديه احتياجات فريدة، لذا نقدم
          استشارات مخصصة تراعي أهدافك الأكاديمية والمهنية{" "}
        </p>
        <p className="text-xl pr-20 font-bold py-3 max-sm:pr-0 max-sm:-mr-24 max-lg:-mr-24">
          <b className="p-1">✅</b>
          فريق ذو خبرة: يضم فريقنا نخبة من المستشارين التعليميين ذوي الخبرة في
          التعامل مع الطلاب الدوليين، لتقديم تجربة سلسة وناجحة{" "}
        </p>
        <p className="text-xl pr-20 font-bold py-3 max-sm:pr-0 max-sm:-mr-3 max-lg:-mr-[5.8rem]">
          ✅ خدمات ما بعد القبول: لا ينتهي دورنا عند حصولك على القبول الجامعي بل
          نستمر في دعمك من خلال خدمات الإقامة و معادلة الشهادات والتوجيه
        </p>
        <p className="text-xl pr-28 font-bold py-3 max-lg:absolute max-lg:mt-[78%] max-lg:-mr-12  max-sm:pr-0">
          {" "}
          الأكاديمي واكتشاف أروع الأماكن الترفيهية والثقافية
        </p>
        <p className="text-2xl text-yellow-400 mx-auto font-bold py-6">
          Deva Education – نرسم طريقك نحو مستقبل أكاديمي مشرق
        </p>
      </div>
      <Contact />
    </>
  );
};

export default mannahno;
