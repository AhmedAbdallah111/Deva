"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import WorldFlag from "react-world-flags";
import axios from "axios";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    boxShadow: "none",
    padding: "1px",
    width: "25rem",
    borderRadius: "10px",
    "&:hover": {
      borderColor: "#aaa",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
  }),
  input: (provided) => ({
    ...provided,
    color: "black",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "black",
    fontWeight: "bold",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f0f0f0" : "white",
    color: "black",
    cursor: "pointer",
  }),
};

export default function Modal({ isOpen, onClose }) {
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
          flag: country.cca2.toLowerCase(),
        }));
        setCountries(countryData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.surname) newErrors.surname = "اللقب أو الكنية مطلوب";
    if (!formData.gender) newErrors.gender = "يرجى اختيار الجنس";
    if (!selectedCountry) newErrors.country = "يرجى اختيار الدولة";
    if (!phone) newErrors.phone = "يرجى إدخال رقم الهاتف";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", { ...formData, selectedCountry, phone });
      alert("تم إرسال البيانات بنجاح!");
      onClose();
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center max-lg:ml-[70%] max-sm:-mr-[50rem] bg-opacity-10"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md max-lg:w-[45rem] "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-800 hover:text-gray-900"
        >
          &times;
        </button>

        <h2 className="text-lg font-bold mb-4 mx-auto text-gray-600 text-center">
          سجل الآن في هذا التخصص
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-bold text-xl text-gray-700">
              الاسم
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-1 block w-full text-black rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-yellow-500 focus:border-yellow-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block font-bold text-xl text-gray-700">
              اللقب أو الكنية
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              className={`mt-1 block w-full text-black rounded-md border ${
                errors.surname ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-yellow-500 focus:border-yellow-500`}
            />
            {errors.surname && (
              <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
            )}
          </div>
          <div>
            <label className="block pb-4 font-bold text-xl text-gray-700">
              الجنس
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleInputChange}
                />
                <span>ذكر</span>
              </label>
              <label className="flex items-center space-x-1 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleInputChange}
                />
                <span>أنثى</span>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}
          </div>
          <div>
            <label className="block pb-4 font-bold text-xl text-gray-700">
              اختر الدولة
            </label>
            {isLoading ? (
              <p>جاري التحميل...</p>
            ) : (
              <Select
                required
                options={countries}
                value={selectedCountry}
                styles={customStyles}
                onChange={setSelectedCountry}
                placeholder="الدولة"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <WorldFlag
                      code={e.flag}
                      style={{ width: 24, height: 16, marginRight: 10 }}
                    />
                    {e.label}
                  </div>
                )}
              />
            )}
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>
          <div>
            <label className="block pb-4 font-bold text-xl text-gray-700">
              رقم الهاتف
            </label>
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={setPhone}
              inputClass="!bg-transparent !text-gray-700 !w-full !h-10 !py-2 !px-4"
              containerClass="w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
}
