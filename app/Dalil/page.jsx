import Image from "next/image";
import cover from "../../Public/images/كافر-7.jpg";
import { MdArchitecture } from "react-icons/md";
import lang from "../../Public/images/lang,png.jpg";
import tkl from "../../Public/images/tkl.png";
import mnah from "../../Public/images/موقع11-.jpg";
import lef from "../../Public/images/موقع9.jpg";
import plan from "../../Public/images/plan,png.jpg";
import mgal from "../../Public/images/mgal.png";
import tak from "../../Public/images/موقع-14.jpg";
import wrak from "../../Public/images/wark.jpg";
import sahm from "../../Public/images/sahm.jpg";
import left from "../../Public/images/موقع-133.jpg";
import trk from "../../Public/images/trk.png";
const Dalil = () => {
  return (
    <>
      <Image
        src={cover}
        className="h-[70vh] max-sm:h-[60vh] max-sm:min-w-[80rem]  max-lg:min-w-[80rem] max-lg:pt-10"
      />
      <h1 className="mt-5 text-4xl font-bold mx-auto tracking-wide text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-white bg-fuchsia-900 rounded-full w-2/4 p-2">
        بعض أسئلة الطلاب وأولياء الأمور
      </h1>
      <MdArchitecture className=" size-52 mx-auto text-fuchsia-800 max-lg:mr-[70%] max-sm:mr-[33rem] -mt-6" />
      <div className="flex justify-between mx-10 max-lg:w-[75rem]">
        <div className="flex-col bg-gradient-to-r from-fuchsia-600 to-fuchsia-950 rounded-2xl text-white p-2 w-[35rem]">
          <h1 className="text-center text-4xl mt-4 bg-yellow-500 rounded-3xl py-3 w-64 mx-auto font-bold">
            أسئلة الطلاب ؟
          </h1>
          <p className="text-2xl font-bold mt-9">● تكاليف المعيشة ؟</p>
          <p className="text-2xl font-bold mt-9">● ماهي التخصصات المتاحة ؟</p>
          <p className="text-2xl font-bold mt-9">
            ● ماهي لغة الدراسة في تركيا ؟
          </p>
          <p className="text-2xl font-bold mt-9">● هل يوجد منح دراسة ؟</p>
          <p className="text-2xl font-bold mt-9">
            ● ماهي الخطوات الازمة للقبول بلجماعات التركية ؟
          </p>
          <p className="text-2xl font-bold mt-9 pb-5">
            ● كيفية التكيف مع المجتمع التركي ؟
          </p>
        </div>
        <div className="flex-col bg-gradient-to-r from-fuchsia-950 to-fuchsia-600 rounded-2xl text-white p-2 w-[35rem]">
          <h1 className="text-center text-4xl mt-4 bg-red-500 rounded-3xl py-3 w-[19rem] mx-auto font-bold">
            أسئلة أولياء الأمور ؟
          </h1>
          <p className="text-2xl font-bold mt-9">
            ● تكاليف المعيشة لأولياء الامور مع اولادهم ؟
          </p>
          <p className="text-2xl font-bold mt-9">
            ● ما هي تكلفة الدراسة السنوية في الجامعات التركية ؟
          </p>
          <p className="text-2xl font-bold mt-9">
            ● ما طرق دفع الرسوم الدراسية ؟
          </p>
          <p className="text-2xl font-bold mt-9">● هل يوجد منح دراسة ؟</p>
          <p className="text-2xl font-bold mt-9">
            ● هل يحتاج الطالب إلى تأشيرة دراسة ؟
          </p>
          <p className="text-2xl font-bold mt-9 pb-5">
            ● ما أفضل المدن للدراسة من حيث الأمان والتكاليف ؟
          </p>
        </div>
      </div>

      <div className="flex mx-4 mt-12 max-lg:w-[77rem] ">
        <Image src={tkl} className="w-44 h-36 rounded-full px-1 mt-5" />
        <div className="bg-fuchsia-950 rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-48 text-center text-2xl font-bold rounded-2xl">
            {" "}
            تكاليف المعيشة؟
          </h1>
          <div className=" mt-5">
            <p className=" leading-8">
              <b className="text-2xl bg-yellow-500 rounded-full px-5 py-1 my-6">
                للطلاب:
              </b>{" "}
              المعيشة في تركيا مرنة، وتناسب مختلف الميزانيات. الجامعات تقدم
              منحًا دراسية وخيارات سكن مناسبة للطلاب الدوليين. المصاريف اليومية
              مثل الطعام والمواصلات منخفضة مقارنة بدول أخرى
            </p>
            <p className=" leading-8 mt-5 mb-3">
              <b className="text-2xl bg-red-500 rounded-full px-5 py-1 my-6">
                لأولياء الأمور:
              </b>{" "}
              المعيشة في تركية رخيصة مقارنة بدول كثيرة وتوفر فرص عمل ايضا للشباب
              وكبار السن في تركيا دولة نامية من حيث العمل والوظائف
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <div className="bg-fuchsia-950 rounded-r-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-48 text-center text-2xl font-bold rounded-2xl">
            {" "}
            لغة الدراسة؟
          </h1>
          <div className=" mt-5">
            <p className=" leading-8">
              تركيا تقدم لك الخيارين ببرامج دراسية عالية الجودة ولكن الدراسة
              باللغة التركية يكون الاندماج اسرع وافضل وتكايف دراسية أقل
              <br />
              اما عن الدراسة باللغة الانجليزية فهي تعني فرص عالمية اكبر وسهولة
              في التواصل مع الطلاب الدولين
            </p>
          </div>
        </div>
        <Image src={lang} className="w-40 h-36 rounded-full px-2 mt-3" />
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <Image src={mnah} className="w-36 h-36 rounded-full px-2" />
        <div className="bg-fuchsia-950 rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-72 text-center text-2xl font-bold rounded-2xl">
            {" "}
            هل يوجد منح دراسة ؟{" "}
          </h1>
          <div className=" mt-5">
            <p className=" leading-8">
              تُقدم بعض الجامعات منحًا دراسية في تخصصات محددة. على سبيل المثال:
              منحة جامعة أيدن (Aydın University): تُقدم منحة مسبقة الدفع بقيمة
              14,950 دولارًا لجميع سنوات الدراسة، تُدفع على دفعة واحدة{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <div className="bg-fuchsia-950 rounded-r-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-[32.5rem] text-center text-2xl font-bold rounded-2xl">
            {" "}
            ما أفضل المدن للدراسة من حيث الأمان والتكاليف ؟
          </h1>
          <div className=" mt-5 pr-4">
            <p className=" leading-8">
              <b className="text-2xl bg-yellow-500 rounded-full px-5 py-1 my-6">
                إسطنبول:
              </b>
              تُعتبر إسطنبول مدينة آمنة نسبيًا، مع وجود بعض المناطق التي يُنصح
              بتجنبها ليلًا وتكاليف المعيشة غالية الي حدا ما من المدن الاخري
              نظرا لحجمها الكبير وتنوع خدمتها
            </p>
            <p className=" leading-8 mt-5 mb-3">
              <b className="text-2xl bg-red-500 rounded-full px-5 py-1 my-6">
                أنقرة :
              </b>{" "}
              تُعتبر أنقرة من المدن الآمنة والمستقرة، بفضل كونها العاصمة
              السياسية لتركيا اما عن كاليف المعيشة أقل تكلفةً مقارنةً بإسطنبول،
              مما يجعلها خيارًا مناسبًا للطلاب.
            </p>
          </div>
        </div>
        <Image src={lef} className="w-44 h-36 rounded-full px-1 mt-12" />
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <Image src={plan} className="w-36 h-36 rounded-full px-2" />
        <div className="bg-fuchsia-950 rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-96 text-center text-2xl font-bold rounded-2xl">
            {" "}
            هل يحتاج الطالب إلى تأشيرة دراسة ؟
          </h1>
          <div className=" mt-5">
            <p className=" leading-8">
              نعم، يحتاج الطالب الدولي الراغب في الدراسة في تركيا إلى الحصول على
              تأشيرة دراسة (Student Visa) قبل دخول البلاد كل اللي عليك تجهز ورقك
              Deva بتقولك تاشيرتك هتستلمها في اسرع وقت
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <div className="bg-fuchsia-950 rounded-r-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-72 text-center text-2xl font-bold rounded-2xl">
            {" "}
            ماهي التخصصات المتاحة ؟
          </h1>
          <div className=" mt-5 pr-4">
            <p className=" leading-8 pr-5">
              تُقدِّم الجامعات التركية مجموعة واسعة من التخصصات الأكاديمية التي
              تُلبي احتياجات الطلاب في مختلف المجالات. تتنوع التخصصات ما بين
              العلوم الطبية والهندسية والعلوم الإنسانية والفنون{" "}
              <hr className="my-9" />
              ملاحظة: تختلف التخصصات المتاحة من جامعة لأخرى، لذا يُفضَّل التحقق
              من الموقع الرسمي للجامعة التي ترغب في الالتحاق بها.
            </p>
          </div>
        </div>
        <Image src={mgal} className="w-44 h-44 rounded-full px-1 mt-12" />
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem] mb-12">
        <Image src={tak} className="w-36 h-36 rounded-full px-2 mt-9" />
        <div className="bg-fuchsia-950 rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="bg-fuchsia-600 mx-auto w-96 text-center text-2xl font-bold rounded-2xl">
            {" "}
            كيفية التكيف مع المجتمع التركي ؟
          </h1>
          <div className=" mt-5">
            <p className=" leading-8 w-11/12">
              اولا يجب عليك احترام العادات والتقاليد كل مجتمع له عاداته وتقاليده
              احترم تلك العادات لتجنب اي مواقف غير مريحة
              <br />
              ثانيا تعلم عن التاريخ والثقافة لتركيا واقراء عنهم وهذا ايضا يساعدك
              في فهم السياق العام والتاريخي للمجتمع التركي
              <br />
              ثالثا استكشف الطعام المحلي جرب الأطعمة المحلية قد تكون وسيلة ممتعة
              للتعرف علي الثقافة التركية اذهب الي المطاعم المحلية وجرب الأطباق
              التركية التقليدية
            </p>
          </div>
        </div>
      </div>
      <hr className="h-5 mx-auto w-11/12" />
      <h1 className="mb-9 mt-12 text-3xl text-yellow-500 max-sm:mr-[17rem] font-bold bg-fuchsia-800 w-fit px-10 py-5 mx-auto max-lg:w-[50rem] max-lg:mr-[35%] max-lg:text-center rounded-full">
        ماهي الخطوات الازمة للقبول في الجامعات التركية ؟
      </h1>
      <div className="flex justify-center mt-9 overflow-hidden max-lg:w-[75rem] max-lg:mr-16">
        <div className="grid">
          <div className="">
            <div className="text-white h-[5.8rem] mr-16 w-[30rem]  mt-3 bg-fuchsia-950 rounded-full text-center px-5 pt-4 text-xl font-semibold ">
              <p>
                اعداد جميع الوثائق المطلوبة مثل الصور وجواز السفر وخطابات
                التوصية وشاهدة اللغة اذا كانت مطلوبة
              </p>
            </div>
          </div>
          <div className="">
            <div className="text-white h-[5.8rem] mr-16 mt-12 bg-fuchsia-950 rounded-full text-center px-5 pt-4 text-xl font-semibold ">
              <p>
                التقديم المبكر عادةّّ مايتم فتح باب التقديم بعد العام الدراسي
                بفترة قصيرة لذا حاول تقديم طلبك مبكراّ
              </p>
            </div>
          </div>
        </div>
        <Image src={wrak} className="w-1/3 h-96 scroll-pr-36 max-lg:hidden" />
        <div className="grid">
          <div className="flex">
            <div className="text-white h-20 bg-fuchsia-950 rounded-full ml-16 text-center px-5 pt-4 w-[36rem] mt-28 text-xl font-semibold ">
              التحقق من متطلبات اللغة بعض الجامعات التركية تتطلب مستوي معين من
              اللغة الانجليزية او التركية تأكد من استيفاء هذه الطلبات
            </div>
          </div>
          <div className="flex">
            <div className="text-white h-[4rem] bg-fuchsia-950 rounded-full ml-16 text-center px-5 pt-1 mt-32 text-xl font-semibold mb-5">
              البحث عن الجامعة والتخصص قم بتحديد التخصص الذي ترغب في دراسته
              وتحقق من متطلبات القبول لكل جامعة{" "}
            </div>
          </div>
        </div>
      </div>
      <h1 className="mb-9 mt-12 text-3xl text-yellow-500 max-lg:w-[50rem] max-sm:mr-[17rem] max-lg:mr-[35%] max-lg:text-center font-bold bg-fuchsia-800 w-fit px-10 py-5 mx-auto rounded-full">
        ماهي مميزات وعيوب الدراسة في تركيا ؟
      </h1>
      <h2 className="bg-red-500 max-sm:mr-[30rem] w-fit px-4 py-2 font-bold text-2xl rounded-full mt-9 mx-auto max-lg:mr-[70%] ">
        المميزات
      </h2>
      <div className="flex -mt-6 max-sm:w-[70rem] ">
        <div className="absolute text-white text-2xl grid font-bold mt-24 pt-2 z-10 mr-9 max-lg:mt-6 max-lg:text-center">
          <h1 className=" max-lg:mt-32 max-sm:mt-28"> جودة التعليم</h1>
          <h1 className="mt-8 max-lg:mt-16 max-sm:mt-12"> الاعترافات</h1>
          <h1 className="mt-8 max-lg:mt-16 max-sm:mt-12"> المنح الدراسية</h1>
          <h1 className="mt-10 max-lg:mt-[3.5rem] max-sm:mt-16  -mr-3">
            {" "}
            البيئة الثقافية والتاريخية{" "}
          </h1>
          <h1 className="mt-8 max-lg:mt-16 max-sm:mt-12"> سهولة القبول </h1>
          <h1 className="mt-9 max-lg:mt-16 max-sm:mt-12 -mr-3 font-bold">
            {" "}
            تكاليف دراسية معقولة
          </h1>
        </div>
        <Image src={sahm} className="w-72 h-[70vh] max-sm:mt-" />
        <div className="gird max-lg:mt-9 ">
          <h1 className="text-white bg-fuchsia-900 mt-24 max-sm:mt-[5.5rem] rounded-3xl w-fit px-7 py-3">
            تتميز الجامعات التركية بتوفير كافة التخصصات فيها، الأمر الذي يلبي
            كافة اهتمامات الطلاب الذين ينوون إكمال مسيرتهم التعليمية في تركيا.
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-5 rounded-3xl w-fit px-7 py-3">
            تركيا تضم العديد من الجامعات المرموقة والمعترف بها عالميًاوتقدم بعض
            الجامعات برامج باللغة الإنجليزية.
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-5 rounded-3xl max-sm:mt-9 w-fit px-7 py-3">
            تقدم الحكومة التركية العديد من المنح الدراسية التي تشمل الرسوم
            الدراسية والإقامة وبدل معيشة وتأمين صحي{" "}
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-4 rounded-3xl max-sm:mt-12 w-fit px-7 py-3">
            تركيا تجمع بين الشرق والغرب، مما يوفر بيئة ثقافية مميزة
            ومتنوعةوالعديد من المواقع التاريخية والسياحية
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-4 rounded-3xl w-fit max-sm:mt-9 px-7 py-3">
            إجراءات القبول في بعض الجامعات تكون أسهل من بعض الدول الغربية
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-4 rounded-3xl max-sm:mt-8 w-fit px-7 py-3">
            الرسوم الدراسية أقل مقارنة بدول أوروبا وأمريكاوتكاليف المعيشة أيضًا
            منخفضة نسبيًا مقارنة بالعديد من الدول الأوروبية{" "}
          </h1>
        </div>
      </div>
      <h2 className="bg-yellow-500 w-fit mt-5 -mb-10 px-4 py-2 text-2xl font-bold rounded-full max-lg:mr-[70%] max-sm:mr-[30rem] mx-auto">
        العيوب
      </h2>
      <div className="flex -mt-6  max-sm:ml-12">
        <div className="gird max-lg:mr-32 max-sm:-mt-12 ">
          <h1
            className="text-white bg-fuchsia-900 mt-28 rounded-3xl mr-[48%] max-lg:w-[47rem] 
          max-lg:mt-[10.5rem] max-lg:mr-24 max-lg:text-center w-fit px-7 py-3 "
          >
            النظام التعليمي قد يختلف عن بعض الدول العربية أو الأوروبية، مما
            يستدعي بعض التكيف{" "}
          </h1>
          <h1
            className="text-white bg-fuchsia-900 mt-5 rounded-3xl w-fit mr-[61%] max-lg:mt-12
           max-lg:w-[47rem] max-lg:mr-48  px-7 py-3 max-sm:mt-8"
          >
            جودة التعليم تختلف بشكل كبير بين الجامعات الحكومية والخاصة.
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-5 rounded-3xl w-fit px-7 max-sm:mt-12 mr-[56%] max-lg:w-[47rem] max-lg:mt-[3.5rem] max-lg:mr-48 py-3">
            بعض الطلاب قد يواجهون صعوبات في التأقلم مع الثقافة والعادات التركية{" "}
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-5 rounded-3xl w-fit px-7 mr-[39%] max-sm:mt-10 max-lg:text-center max-lg:w-[47rem] max-lg:mt-[3rem] max-lg:mr-28  py-3">
            تعتبر الدراسة باللغة التركية في الجامعات التركية من السلبيات التي قد
            يواجهها الطالب أثناء الدراسة في تركيا{" "}
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-5 rounded-3xl mr-[16%] max-lg:w-[47rem] max-lg:mt-[2.5rem] max-sm:mt-7 max-lg:mr-24 max-lg:rounded-l-lg  w-fit px-7 py-3">
            إذا كنت من الأشخاص الذين اعتادوا الإقامة في مناطق غير مكتظة سكانياً،
            فقد تواجهك مشكلة الاكتظاظ السكاني في المدن الكبرى داخل تركيا
            كاسطنبول{" "}
          </h1>
          <h1 className="text-white bg-fuchsia-900 mt-3 rounded-3xl w-fit px-7 max-lg:w-[47rem] max-lg:mt-[1rem] max-sm:mt-2 max-lg:mr-24 max-lg:rounded-l-lg  py-3">
            ربما يواجه الطالب رسومًا دراسية مرتفعة في بعض الجامعات التركية سواءً
            الحكومية أو الخاصة، لكن من الميزات المتوفرة في تركيا هو تنوع
            الاختيارات وتوفر رسوم دراسية مناسبة لكل طالب مما يساهم في تلافي هذه
            الصعوبة.{" "}
          </h1>
        </div>

        <div className="absolute text-white text-3xl max-sm:ml-12 grid font-bold mt-24 pt-2 z-10 mr-[85%] max-lg:-left-[28rem] max-sm:mt-1 max-sm:-left-[54rem] overflow-hidden">
          <h1 className="text-[22px] mt-3 max-lg:mt-20 max-sm:mt-28">
            {" "}
            اختلاف النظام التعليمي
          </h1>
          <h1 className="text-[22px] mr-2 mt-7 max-lg:mt-12 max-sm:mt-12 ">
            {" "}
            تفاوت جودة التعليم
          </h1>
          <h1 className="mr-7 mt-9 text-[22px] max-lg:mt-12 max-sm:mt-12  ">
            {" "}
            المنح الدراسية
          </h1>
          <h1 className="mr-9 text-[22px] mt-9 -ml-5 max-lg:mt-16 max-sm:mt-16 ">
            {" "}
            لغة الدراسة{" "}
          </h1>
          <h1 className="mt-8 text-[22px] max-lg:mt-16 max-sm:mt-16">
            {" "}
            الاكتظاظ السكاني{" "}
          </h1>
          <h1 className="mt-10 text-xl -ml-5 font-bold max-lg:mt-16 max-sm:mt-12 ">
            {" "}
            تكاليف المعيشة والدراسة
          </h1>
        </div>

        <Image
          src={left}
          className="w-72 h-[74vh] max-lg:-mr-24 max-sm:-mt-9 "
        />
      </div>
      <div className="border-2 border-purple-800 rounded-l-full h-[70vh] mx-9 my-16 max-lg:w-[77rem]">
        <h1 className="text-yellow-500 text-3xl bg-fuchsia-800 rounded-full font-bold mt-5 mb-8 w-fit mx-auto px-8 py-4">
          لماذا تركيا؟
        </h1>
        <div className="flex justify-center text-xl">
          <div className="grid ml-16 max-lg:mr-3">
            <h1 className="text-gray-700 font-bold">
              ✅ نظام تعليمي متقدم ومرموق على المستوى الدولي
            </h1>
            <h1 className="text-gray-700 font-bold">
              ✅ بيئة متعددة الثقافات، مما يمنحك تجربة تعليمية وحياتية غنية{" "}
            </h1>
            <h1 className="text-gray-700 font-bold">
              ✅ فرص واسعة لتعلم اللغة التركية بجانب الدراسة الأكاديمية{" "}
            </h1>
            <h1 className="text-gray-700 font-bold">
              ✅ تركيا تجمع بين الحداثة والتراث، مما يوفر تجربة فريدة للطلاب
              الدوليين.
            </h1>
            <h1 className="text-gray-700 font-bold max-lg:leading-10">
              ✅ في النهاية، الاختيار الصحيح للجامعة والبرنامج الدراسي يمكن أن
              يساعدك في تحقيق أحلامك دون الحاجة <br className="max-lg:hidden" />
              إلى تكاليف باهظة و التركيز على جودة التعليم وفرص المنح هو المفتاح
              لتحقيق أهدافك الدراسية في تركيا{" "}
            </h1>
          </div>
          <Image src={trk} className="w-[31rem] h-[34rem] -mt-36 max-lg:w-" />
        </div>
      </div>
    </>
  );
};

export default Dalil;
