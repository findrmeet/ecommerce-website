const TermsAndConditionsPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 text-black">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            শর্তাবলি (Terms & Conditions)
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            এই শর্তাবলি{" "}
            <span className="font-medium">[আপনার ওয়েবসাইটের নাম]</span> ব্যবহার
            করার নিয়ম ও শর্ত নির্ধারণ করে। আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে
            আপনি এই শর্তাবলিতে সম্মতি প্রদান করছেন।
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ১. অর্ডার গ্রহণ ও ডেলিভারি
            </h2>
            <p>
              আমরা বাংলাদেশজুড়ে হোম ডেলিভারি প্রদান করি। ক্যাশ অন ডেলিভারি
              সুবিধা রয়েছে। গ্রাহক পণ্য হাতে পাওয়ার পর যাচাই করে টাকা পরিশোধ
              করতে পারবেন।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ২. পণ্যের মান
            </h2>
            <p>
              আমাদের সকল পণ্য নিজেদের উৎপাদনকৃত বা বিশ্বস্ত কৃষকের কাছ থেকে
              সরাসরি সংগ্রহ করা। সকল পণ্য সাবধানে প্রস্তুত ও প্যাকেজ করা হয়।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৩. মূল্য ও স্টক
            </h2>
            <p>
              পণ্যের দাম সময়ভেদে পরিবর্তন হতে পারে। কিছু পণ্য মৌসুমভিত্তিক, ফলে
              স্টক সীমিত হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৪. ভুল ঠিকানা বা অনুপস্থিত গ্রাহক
            </h2>
            <p>
              ভুল ঠিকানা বা নির্ধারিত সময়ে গ্রাহক না পাওয়া গেলে পুনরায় ডেলিভারির
              জন্য অতিরিক্ত চার্জ প্রযোজ্য হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৫. নিষিদ্ধ ব্যবহার
            </h2>
            <p>
              গ্রাহক ওয়েবসাইটের কনটেন্ট কপি বা পুনঃপ্রকাশ করতে পারবেন না। ভুয়া
              অর্ডার করা সম্পূর্ণ নিষিদ্ধ।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৬. শর্ত পরিবর্তন
            </h2>
            <p>
              যে কোনো সময় শর্তাবলী আপডেট করা হতে পারে। আপডেট প্রকাশ হওয়ার সঙ্গে
              সঙ্গেই কার্যকর হবে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৭. পেমেন্ট
            </h2>
            <p>
              পেমেন্টের নিরাপত্তা আমাদের প্রধান অগ্রাধিকার। সকল লেনদেন নিরাপদ ও
              এনক্রিপ্টেড চ্যানেলের মাধ্যমে সম্পন্ন হয়। পেমেন্ট ব্যর্থ হলে
              অর্ডার বাতিল হতে পারে।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৮. মেধাস্বত্ব
            </h2>
            <p>
              ওয়েবসাইটের সকল কনটেন্ট, লোগো, ছবি ও সফটওয়্যার আমাদের সম্পত্তি।
              অনুমতি ছাড়া কোনো কনটেন্ট ব্যবহার বা কপি করা নিষিদ্ধ।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ৯. দায় সীমাবদ্ধতা
            </h2>
            <p>
              আমাদের ওয়েবসাইট বা সার্ভিস ব্যবহারের ফলে সৃষ্ট কোনো ক্ষতির জন্য
              আমরা দায়ী থাকবো না।
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ১০. অ্যাকাউন্ট স্থগিত বা বাতিল
            </h2>
            <p>
              আপনি যদি এই শর্তাবলি লঙ্ঘন করেন, আমরা আপনার অ্যাকাউন্ট স্থগিত বা
              বাতিল করার অধিকার রাখি।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
