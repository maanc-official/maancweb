"use client";

import React, { useState } from "react";

const MeetingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeSlot: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    timeSlot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      timeSlot: "",
    };

    // Name validation: should be a string
    if (!formData.name.trim() || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters.";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim() || !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    // Phone validation: should be exactly 10 digits
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    // Time slot validation
    if (!formData.timeSlot.trim()) {
      newErrors.timeSlot = "Please select a time and date.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      timeSlot: "",
      requirements: "",
    });
    setErrors({
      name: "",
      email: "",
      phone: "",
      timeSlot: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="h-auto lg:h-[100svh] w-full flex flex-col items-center justify-center bg-gray-50">
      {/* Form Container */}
      <div className="w-full max-w-[60%] p-8 bg-white shadow-lg rounded-lg py-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8 text-btncolor">
          Book a meeting now
        </h1>
        <form onSubmit={handleSubmit} className="space-y-2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-btncolor">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full p-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-btncolor focus:border-btncolor`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-btncolor">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="JohnDoe@gmail.com"
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-btncolor focus:border-btncolor`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone <span className="text-btncolor">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
                className={`w-full p-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-btncolor focus:border-btncolor`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Time Slot <span className="text-btncolor">*</span>
              </label>
              <input
                type="datetime-local"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.timeSlot ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-btncolor focus:border-btncolor`}
                required
              />
              {errors.timeSlot && (
                <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Tell us about your requirement
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Describe your needs..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-btncolor focus:border-btncolor"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClear}
              className="py-2 px-4 bg-white border border-btncolor text-btncolor rounded-md hover:bg-red-50"
            >
              Clear
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-btncolor text-white rounded-md hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
