"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "আমার অর্ডার কত দিনে পৌঁছাবে?",
    answer:
      "বাংলাদেশের মধ্যে সাধারণত অর্ডার ২-৫ কার্যদিবসের মধ্যে পৌঁছানো হয়। শহরের বাইরে বা দুর্গম এলাকায় কিছুটা বিলম্ব হতে পারে।",
  },
  {
    question: "আমি অর্ডার ক্যানসেল করতে চাই, কীভাবে করব?",
    answer:
      "অর্ডার ক্যানসেল করার জন্য আমাদের কাস্টমার সার্ভিসে যত দ্রুত সম্ভব জানাতে হবে। পণ্য প্যাকেজিং শুরু হওয়ার পর ক্যানসেলেশন সীমিত হতে পারে।",
  },
  {
    question: "পণ্যের মান কেমন হবে?",
    answer:
      "আমাদের সকল পণ্য সরাসরি বিশ্বস্ত কৃষক বা উৎপাদনকারীর কাছ থেকে সংগ্রহ করা হয়। পণ্য সতর্কভাবে প্যাকেজ করা হয় যাতে তা নিরাপদে পৌঁছায়।",
  },
  {
    question: "কীভাবে রিফান্ড পাবো?",
    answer:
      "ক্যানসেলেশন বা রিটার্ন অনুমোদনের পরে, রিফান্ড প্রক্রিয়া সাধারণত ৫–৭ কার্যদিবসের মধ্যে সম্পন্ন হয়। ব্যাংক প্রক্রিয়া অনুযায়ী সময় কিছুটা বেশি লাগতে পারে।",
  },
  {
    question: "কোন ধরনের ব্যবহার নিষিদ্ধ?",
    answer:
      "গ্রাহক ওয়েবসাইটের কনটেন্ট কপি বা পুনঃপ্রকাশ করতে পারবেন না। ভুয়া অর্ডার বা প্রতারণামূলক ব্যবহার সম্পূর্ণ নিষিদ্ধ।",
  },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQs)
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            আপনার সব প্রশ্নের সহজ উত্তর এখানে খুঁজে পাবেন
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <span className="text-green-600 font-bold text-xl transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Separator */}
              <div className="border-t border-gray-200"></div>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsPage;
