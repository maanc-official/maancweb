'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'; 
import { useState } from 'react';

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'How do I update my billing information?',
      answer:
        "You can update your billing information in your account settings under the 'Billing' section.",
    },
    {
      id: 2,
      question: 'How can I contact customer support?',
      answer:
        "Look for a 'Contact us' or 'Help' button on the platform. You can usually email, call, or chat for support.",
    },
    {
      id: 3,
      question: 'How do I update my profile information?',
      answer:
        "Navigate to your account settings and click on 'Profile' to update your personal information.",
    },
    {
      id: 4,
      question: 'How do I find my purchase history?',
      answer:
        "Go to your account dashboard and click on 'Purchase History' to view all past transactions.",
    },
  ];

  return (
    <div className='w-full h-[100svh]'>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope text-center font-bold text-[#60644E] leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>

          <div className="accordion-group">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`accordion py-8 px-6 border-b border-gray-200 transition-all duration-500 rounded-2xl`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-btncolor"
                >
                  <h5>{faq.question}</h5>
                  <motion.svg
                    initial={false}
                    animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 group-hover:text-btncolor"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {activeId === faq.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden w-full px-0"
                    >
                      <div className="pt-4">
                        <p className="text-base text-[#8E8E8E] leading-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
