const CancellationRefundPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 text-black">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 capitalize">
            Cancellation & Refund Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            এই ক্যানসেলেশন ও রিফান্ড নীতি ব্যাখ্যা করে যে,{" "}
            <span className="font-medium">[আপনার ওয়েবসাইটের নাম]</span> কীভাবে
            অনলাইন অর্ডার বাতিল করা এবং রিফান্ড প্রদান করা হয়। আমাদের ওয়েবসাইট
            ব্যবহার করার মাধ্যমে আপনি এই নীতিতে সম্মতি প্রদান করছেন।
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ১. অর্ডার ক্যানসেলেশন
            </h2>
            <p>
              অর্ডার দেওয়ার পর আপনি যদি অর্ডার বাতিল করতে চান, তবে যত দ্রুত
              সম্ভব আমাদের কাস্টমার সার্ভিসে জানাতে হবে। অর্ডার প্যাকেজিং বা
              শিপিং শুরু হওয়ার পর ক্যানসেলেশন সম্ভব নাও হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ২. ক্যানসেলেশন চার্জ
            </h2>
            <p>
              অর্ডার ক্যানসেলেশন করলে কিছু ক্ষেত্রে সামান্য চার্জ প্রযোজ্য হতে
              পারে, যা অর্ডারের প্রস্তুতি বা শিপিং খরচের জন্য নেওয়া হয়।
              বিস্তারিত জানতে কাস্টমার সার্ভিসের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৩. রিফান্ড প্রক্রিয়া
            </h2>
            <p>
              ক্যানসেলেশন গ্রহণ বা রিটার্ন অনুমোদনের পরে, রিফান্ড প্রক্রিয়া শুরু
              করা হয়। সাধারণত রিফান্ড ৫–৭ কার্যদিবসের মধ্যে আপনার ব্যাংক/ওয়ালেটে
              প্রদানের চেষ্টা করা হয়। ব্যাঙ্ক প্রক্রিয়া অনুযায়ী সময়কাল পরিবর্তিত
              হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৪. পণ্যের রিটার্ন
            </h2>
            <p>
              যদি পণ্য ক্ষতিগ্রস্ত, ভাঙা বা ভুল ডেলিভারি হয়, তবে গ্রাহক
              রিটার্নের জন্য আমাদের সাথে যোগাযোগ করতে পারেন। পণ্য যাচাই শেষে
              রিফান্ড বা রিপ্লেসমেন্ট নিশ্চিত করা হবে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৫. রিফান্ড সীমাবদ্ধতা
            </h2>
            <p>
              আমরা ক্ষতি বা ব্যবহারিক ক্ষতি ছাড়াই আসল অবস্থায় পণ্য ফেরত পাওয়া
              নিশ্চিত করতে চাই। ব্যবহার করা, ক্ষতিগ্রস্ত বা ভুলভাবে প্যাকেজ করা
              পণ্যের জন্য রিফান্ড সীমিত হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৬. প্রক্রিয়া পরিবর্তন
            </h2>
            <p>
              আমাদের ক্যানসেলেশন ও রিফান্ড নীতি প্রয়োজন অনুযায়ী পরিবর্তন হতে
              পারে। পরিবর্তন ওয়েবসাইটে প্রকাশ হওয়ার সঙ্গে সঙ্গেই কার্যকর হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancellationRefundPage;
