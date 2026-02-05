import Image from "next/image";

const AboutUsPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            আমাদের সম্পর্কে
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            আমরা বিশ্বাস করি—ভালো সার্ভিসই দীর্ঘমেয়াদি বিশ্বাস তৈরি করে
          </p>
        </header>

        {/* Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Content Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Intro Card */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">[ওয়েবসাইটের নাম]</span> একটি
                আধুনিক ও গ্রাহক-কেন্দ্রিক ই-কমার্স প্ল্যাটফর্ম।
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                আমাদের লক্ষ্য
              </h2>
              <p className="text-gray-700">
                আমাদের লক্ষ্য হলো উচ্চমানের পণ্য ন্যায্য মূল্যে সরবরাহ করা এবং
                প্রযুক্তির সর্বোত্তম ব্যবহার করে অনলাইন শপিংকে আরও দ্রুত, সহজ
                এবং সবার জন্য সহজলভ্য করে তোলা। আমরা চাই প্রতিটি অর্ডার হোক একটি
                ইতিবাচক অভিজ্ঞতা।
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                আমাদের ভিশন
              </h2>
              <p className="text-gray-700">
                আমাদের ভিশন হলো এমন একটি বিশ্বাসযোগ্য ই-কমার্স প্ল্যাটফর্ম তৈরি
                করা, যেখানে গ্রাহকরা নিশ্চিন্তে কেনাকাটা করতে পারবেন এবং
                বিক্রেতারা সহজেই তাদের পণ্য সঠিক ক্রেতার কাছে পৌঁছে দিতে
                পারবেন—স্বচ্ছতা ও আস্থার ভিত্তিতে।
              </p>
            </div>

            {/* Offerings */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-600 mb-3">
                আমরা কী অফার করি
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>• বাছাইকৃত ও মানসম্মত পণ্যের সংগ্রহ</li>
                <li>• নিরাপদ ও নির্ভরযোগ্য পেমেন্ট সিস্টেম</li>
                <li>• দ্রুত এবং সময়মতো ডেলিভারি</li>
                <li>• সহযোগী ও দায়িত্বশীল গ্রাহক সেবা</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-600 mb-3">
                কেন আমাদের নির্বাচন করবেন
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>✔ গ্রাহক সন্তুষ্টিকে আমরা সর্বোচ্চ অগ্রাধিকার দিই</li>
                <li>✔ স্পষ্ট নীতি ও কোনো গোপন শর্ত নেই</li>
                <li>✔ সহজ ও ঝামেলাহীন রিটার্ন এবং রিফান্ড প্রক্রিয়া</li>
                <li>✔ আপনার তথ্য ও পেমেন্টের সর্বোচ্চ নিরাপত্তা</li>
              </ul>
            </div>

            {/* Commitment */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                আমাদের প্রতিশ্রুতি
              </h2>
              <p className="text-gray-700">
                আমরা প্রতিশ্রুতিবদ্ধ আপনার সময়, অর্থ এবং বিশ্বাসের সর্বোচ্চ
                মূল্য দিতে। আপনার সন্তুষ্টিই আমাদের সবচেয়ে বড় সাফল্য এবং আমাদের
                এগিয়ে চলার মূল প্রেরণা।
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                যোগাযোগ
              </h2>
              <p className="text-gray-700">
                আমাদের সম্পর্কে আরও জানতে বা কোনো প্রশ্ন থাকলে আমাদের সাথে
                যোগাযোগ করুন:
              </p>
              <p className="mt-2 text-gray-700 text-sm">
                📧 support@yourwebsite.com <br />
                📍 আপনার ব্যবসার ঠিকানা
              </p>
            </div>
          </div>

          {/* Right: Sticky Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/about-us.jpeg"
                alt="About our ecommerce platform"
                width={500}
                height={700}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
