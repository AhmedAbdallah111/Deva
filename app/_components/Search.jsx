"use client";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import Image from "next/image";

const Dropdown = ({ options, selected, setSelected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* زر القائمة */}
      <button
        onClick={toggleMenu}
        className="flex items-center w-80 py-3 text-center rounded-full bg-white opacity-70 font-bold text-2xl justify-center text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        {selected || placeholder}
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className="block px-6 mx-auto py-4 text-xl text-gray-700 hover:bg-gray-100 w-full text-right"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Search = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedLang, setSelectedLang] = useState("");

  // الخيارات المتاحة
  const specialties = [
    "الطب البشري",
    "الصيدلة",
    "طب الاسنان",
    "العلاج الطبيعي",
    "التمريض",
    "التخدير",
    "الاسعافات الاولية",
    "التغذية",
    "الهندسة الطبية",
    " هندسة المعمار",
    " هندسة الميكاترونكس",
    " هندسة الميكانيكا",
    " هندسة التصميم الداخلي",
    " الهندسة الصناعية",
    "هندسة السيارات ",
    "هندسة الفضاء ",
    " هندسة البرمجيات",
    "هندسة الذكاء الاصطناعي",
    " هندسة الكهرباء والاكترونيات",
    " هندسة المناظر الطبيعية",
    " الادارة الهندسة",
    "ادارة الاعمال ",
    " اداره الخدمات اللوجستية",
    "امن المعلومات ",
    " نظم المعلومات الادارية",
    "  المسرح",
    "  الموسيقي",
    "    معلم الرياضيات",
    "    معلم الكمياء",
    "    تنمية الطفل",
    "    الترجمة",
    "     الصحافة",
    "     الدعاية والاعلان",
    "     تصميم الازياء",
    "     تصميم الجرافيك",
  ];

  const programs = [
    "برنامج الماجستير",
    "برنامج البكالوريوس",
    "برنامج الدبلوم",
    "برنامج الدكتوراة",
  ];
  const lang = ["اللغة التركية", "اللغة الإنجليزية"];

  return (
    <>
      <div className="flex gap-9 items-center rounded-bl-[8rem] rounded-tl-[3rem] max-sm:w-[79rem] max-lg:w-[79rem] mb-16 -mt-6 bg-fuchsia-800 w-10/12 h-28 z-50 rounded-br-[8rem] rounded-tr-[3rem] opacity-95 mx-auto py-2 px-16">
        {/* القائمة الأولى */}
        <Dropdown
          options={programs}
          selected={selectedProgram}
          setSelected={setSelectedProgram}
          placeholder="ابحث عن البرنامج الدراسي...🔎"
        />
        {/* القائمة الثانية */}
        <Dropdown
          options={lang}
          selected={selectedLang}
          setSelected={setSelectedLang}
          placeholder="ابحث عن لغة الدراسة...🔎"
        />
        {/* القائمة الثالثة */}
        <Dropdown
          options={specialties}
          selected={selectedSpecialty}
          setSelected={setSelectedSpecialty}
          placeholder="ابحث عن تخصصك...🔎"
        />
        <a
          href={
            selectedProgram && selectedLang && selectedSpecialty
              ? "../search"
              : "#"
          }
          className={`bg-white rounded-full ${
            selectedProgram && selectedLang && selectedSpecialty
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!selectedProgram || !selectedLang || !selectedSpecialty) {
              e.preventDefault(); // منع الانتقال إلى صفحة البحث
              alert(
                "يرجى اختيار البرنامج الدراسي، لغة الدراسة، والتخصص قبل البحث!"
              );
            }
          }}
        >
          <FcSearch className="size-16 px-2 animate-bounce mt-2 hover:cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default Search;
