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

    if (!formData.name.trim() || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters.";
      isValid = false;
    }

    if (
      !formData.email.trim() ||
      !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    const selectedDate = new Date(formData.timeSlot);
    const now = new Date();
    now.setDate(now.getDate() + 1); // Set to one day later from the current date

    if (!formData.timeSlot.trim() || selectedDate < now) {
      newErrors.timeSlot =
        "Please select a date and time that is at least one day later than today.";
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
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl p-6 sm:p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-btncolor">
          Book a meeting now
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
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
                } rounded-md focus:ring-black focus:border-black focus:outline-none `}
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
                } rounded-md  focus:ring-black focus:border-black focus:outline-none`}
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
                } rounded-md focus:ring-black focus:border-black focus:outline-none`}
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
                } rounded-md focus:ring-black focus:border-black focus:outline-none`}
                required
                min={new Date(Date.now() + 24 * 60 * 60 * 1000)
                  .toISOString()
                  .slice(0, 16)} // Dynamically set the minimum date/time
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
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black focus:outline-none"
              rows={4}
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={handleClear}
              className="py-2 px-4 bg-white border border-black text-black rounded-md hover:bg-black hover:text-white transform hover:scale-105 transition duration-300"
            >
              Clear
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-black text-white rounded-md border border-black hover:bg-white hover:text-black transform hover:scale-105 transition duration-300"
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
