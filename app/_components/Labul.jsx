"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Labul = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start(
        window.scrollY > 100 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/DEVASTUDY2022",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/905372899774",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/deva_education",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed right-0 z-50 bottom-10 p-4 md:px-8 max-w-xs md:max-w-md rounded-l-full bg-gradient-to-r from-pink-500 to-fuchsia-900 shadow-2xl max-lg:-mr-[40%] max-sm:-mr-[52rem]"
    >
      <h1 className="text-base md:text-xl font-bold mb-3 text-center text-white">
        تواصل معنا
      </h1>
      <div className="flex gap-2 justify-center flex-wrap">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg md:text-xl w-fit p-2 bg-white text-black rounded-full shadow-lg"
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Labul;
