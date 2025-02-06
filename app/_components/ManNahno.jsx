import Image from "next/image";
import logo from "../../Public/images/logo-png.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const ManNahno = () => {
  return (
    <>
      <div className="grid bg-fuchsia-800 rounded-2xl pb-6 pt-3 w-fit my-6 mx-6 overflow-hidden">
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
        <div className="flex justify-center">
          <FaArrowLeft className="size-9 animate-pulse mr-[32rem] mt-7 text-yellow-400" />

          <a
            href="../mannahno"
            className="w-fit px-6 text-2xl flex justify-center mx-auto bg-red-500 font-bold mt-4 rounded-xl py-2 hover:opacity-75"
          >
            المزيد{" "}
          </a>
          <FaArrowRight className="size-9 animate-pulse ml-[32rem] mt-7 text-yellow-400" />
        </div>
      </div>
    </>
  );
};

export default ManNahno;
