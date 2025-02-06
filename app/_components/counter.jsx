"use client";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import {
  FcClock,
  FcGraduationCap,
  FcFactory,
  FcBusinessman,
} from "react-icons/fc";

const Semo = ({ n, start }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: start ? n : 0, // إذا كان العنصر مرئيًا، يبدأ العدّاد
    reset: true, // يعيد العداد عند كل دخول
    delay: 200,
    config: { mass: 1, tension: 50, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const data = [
  {
    icon: <FcClock className="h-16 w-16 mx-auto" />,
    label: "عدد سنوات الخبرة",
    value: 15,
  },
  {
    icon: <FcGraduationCap className="h-16 w-14 mx-auto" />,
    label: "القبول الجامعي",
    value: 170000,
  },
  {
    icon: <FcFactory className="h-16 w-16 mx-auto" />,
    label: "فروعنا",
    value: 5,
  },
  {
    icon: <FcBusinessman className="h-16 w-16 mx-auto" />,
    label: "مستشار اكاديمي",
    value: 55,
  },
];

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  // triggerOnce: false → إعادة التشغيل كل مرة يكون العنصر مرئيًا
  // threshold: 0.5 → العداد يبدأ عندما يظهر نصف العنصر

  return (
    <div
      ref={ref}
      className="flex justify-between px-16 py-5 mx-auto overflow-hidden rounded-lg max-sm:w-[79rem] max-lg:w-[79rem]"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="w-48 h-44 bg-fuchsia-900 text-stroke text-transparent  font-bold grid rounded-lg hover:scale-95"
        >
          {item.icon}
          <p className="text-center text-xl tracking-wide">{item.label}</p>
          <p className="text-center text-3xl flex justify-center text-stroke text-transparent">
            <Semo n={item.value} start={inView} />+
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
