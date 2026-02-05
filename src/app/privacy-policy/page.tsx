const PrivacyPolicyPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 text-black">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            গোপনীয়তা নীতি
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            এই গোপনীয়তা নীতি ব্যাখ্যা করে যে,{" "}
            <span className="font-medium">[আপনার ওয়েবসাইটের নাম]</span> কীভাবে
            ব্যবহারকারীদের ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার ও সংরক্ষণ করে। আমাদের
            ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই নীতিতে সম্মতি প্রদান করছেন।
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ১. আমরা কোন তথ্য সংগ্রহ করি
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>নাম, মোবাইল নম্বর ও ইমেইল ঠিকানা</li>
              <li>ডেলিভারি ঠিকানা</li>
              <li>অর্ডার ও পেমেন্ট সংক্রান্ত তথ্য</li>
              <li>আইপি ঠিকানা, ব্রাউজার ও ডিভাইস তথ্য</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ২. তথ্য ব্যবহারের উদ্দেশ্য
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>অর্ডার প্রসেস ও ডেলিভারি সম্পন্ন করা</li>
              <li>গ্রাহক সেবা প্রদান</li>
              <li>অর্ডার ও অ্যাকাউন্ট সংক্রান্ত নোটিফিকেশন পাঠানো</li>
              <li>ওয়েবসাইট ও সার্ভিস উন্নত করা</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৩. কুকিজ (Cookies)
            </h2>
            <p>
              ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য আমরা কুকিজ ব্যবহার করি। আপনি
              চাইলে আপনার ব্রাউজার সেটিংস থেকে কুকিজ বন্ধ করতে পারেন, তবে এতে
              ওয়েবসাইটের কিছু ফিচার সঠিকভাবে কাজ নাও করতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৪. তথ্য শেয়ার করা
            </h2>
            <p>
              আমরা আপনার ব্যক্তিগত তথ্য বিক্রি বা ভাড়া দিই না। তবে অর্ডার
              সম্পন্ন করার জন্য ডেলিভারি পার্টনার ও পেমেন্ট গেটওয়ের সাথে সীমিত
              তথ্য শেয়ার করা হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৫. তথ্যের নিরাপত্তা
            </h2>
            <p>
              আমরা আপনার তথ্য সুরক্ষিত রাখতে প্রয়োজনীয় প্রযুক্তিগত ও সাংগঠনিক
              ব্যবস্থা গ্রহণ করি। তবে ইন্টারনেটে তথ্য আদান-প্রদান সম্পূর্ণ
              ঝুঁকিমুক্ত নয়।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৬. শিশুদের তথ্য
            </h2>
            <p>
              ১৮ বছরের কম বয়সী ব্যবহারকারীরা অভিভাবকের অনুমতি ছাড়া আমাদের
              ওয়েবসাইট ব্যবহার করতে পারবেন না। আমরা ইচ্ছাকৃতভাবে শিশুদের
              ব্যক্তিগত তথ্য সংগ্রহ করি না।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৭. আপনার অধিকার
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>নিজের তথ্য দেখার ও সংশোধনের অধিকার</li>
              <li>তথ্য মুছে ফেলার অনুরোধ করার অধিকার</li>
              <li>প্রোমোশনাল যোগাযোগ বন্ধ করার অধিকার</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৮. নীতিমালা পরিবর্তন
            </h2>
            <p>
              প্রয়োজনে আমরা এই গোপনীয়তা নীতি পরিবর্তন করতে পারি। পরিবর্তিত নীতি
              ওয়েবসাইটে প্রকাশের সাথে সাথেই কার্যকর হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
