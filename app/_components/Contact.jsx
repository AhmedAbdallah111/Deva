"use client";

import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import doneAnimation from "../../Public/Animation/done.json";
import emailAnimation from "../../Public/Animation/Animation - 1735927038841.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import WorldFlag from "react-world-flags";
import axios from "axios";
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "none",
    padding: "1px",
    width: "18rem",
    right: "30px",
    borderRadius: "50px",
    "&:hover": {
      borderColor: "#aaa",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    // جعل النص باللون الأبيض
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    // جعل النص المكتوب باللون الأبيض
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "gray",
    font: "bold", // جعل النص الإرشادي باللون الأبيض
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#fff" : "white",
    color: "black",
    cursor: "pointer",
  }),
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwadaeg");
  const [phone, setPhone] = useState("");

  const handleChange = (value) => {
    setPhone(value);
  };
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryData = response.data.map((country) => ({
        value: country.cca2, // رمز الدولة
        label: country.name.common, // اسم الدولة
        flag: country.cca2.toLowerCase(), // علم الدولة
      }));
      setCountries(countryData);
    };

    fetchCountries();
  }, []);

  const handleeChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  return (
    <section
      id="contact"
      className="contact py-12 px-6 md:px-12 max-sm:w-[70rem] max-sm:mr-20 max-lg:w-[80rem]"
    >
      <h2 className="text-3xl font-bold text-center mb-5  items-center text-white bg-fuchsia-900 rounded-full p-3 w-48 mx-auto">
        <span className="icon-mail1 mr-2"></span> تواصل معنا
      </h2>
      <p className="text-center mb-8 font-bold text-gray-800">
        اتصل بنا للحصول على مزيد من المعلومات والحصول على إشعار عندما نقوم بنشر
        شيء جديد.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-100 h-[70vh] shadow-lg rounded-lg p-6"
        >
          <div className="flex justify-between">
            <div className="col-span-6 sm:col-span-3 mb-4">
              <label htmlFor="email" className="text-lg font-medium"></label>
              <input
                required
                type="text"
                id="text"
                placeholder=" ⫷الاسم الأول"
                name="email"
                className="p-2 border w-[18rem] rounded-full text-gray-700 bg-white border-gray-300 bg-transparent max-sm:w-[20rem] mt-2"
              />
              <ValidationError
                prefix="Text"
                field="text"
                errors={state.errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 mb-4">
              <label htmlFor="email" className="text-lg font-medium"></label>
              <input
                required
                type="text"
                id="text"
                placeholder=" ⫷الاسم الاخير"
                name="email"
                className="p-2 border w-[18rem] rounded-full border-gray-300 bg-white max-sm:w-[20rem] mt-2"
              />
              <ValidationError
                prefix="Text"
                field="text"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex my-6 max-sm:gap-56 max-lg:gap-0">
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={handleChange}
              inputClass="!border !bg-white  !text-gray-700  !border-gray-300 !rounded-full !w-[18rem] !h-10 !py-2 !px-4 "
              containerClass="w-full max-sm:w-[26rem] max-w-xs"
            />
            <Select
              required
              options={countries}
              value={selectedCountry}
              styles={customStyles}
              onChange={handleeChange}
              className="w-full max-w-xs max-lg:-mr-9"
              classNamePrefix="react-select"
              placeholder=" الدولة"
              getOptionLabel={(e) => (
                <div className="flex items-center max-sm:w-[26rem] max-lg:px-0">
                  <WorldFlag
                    code={e.flag}
                    style={{ width: 24, height: 16, marginRight: 10 }}
                  />
                  {e.label}
                </div>
              )}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg font-medium"></label>
            <input
              required
              type="email"
              id="email"
              placeholder="عنوان البريد الالكتروني"
              name="email"
              className="p-2 border border-gray-300 text-gray-700 mt-6 bg-white rounded-full"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-lg font-medium"></label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="اكتب رسالتك"
              className="p-2 border border-gray-300 rounded-lg mt-6 bg-white"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-purple-700 text-white py-2 mt-8 rounded-full hover:bg-purple-700 transition"
          >
            ارسال
          </button>

          {state.succeeded && (
            <p className="flex items-center mt-4 text-green-600">
              <Lottie
                className="w-10 mr-2"
                loop={false}
                animationData={doneAnimation}
              />
              لقد تم ارسال رسالتك بنجاح 🤗{" "}
            </p>
          )}
        </form>

        <div className="w-full md:w-1/2 flex justify-center max-lg:mr-8">
          <Lottie className="w-[30rem]" animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
