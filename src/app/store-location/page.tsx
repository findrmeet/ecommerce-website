const StoreLocationPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 text-black">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            আমাদের স্টোরের অবস্থান
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            আপনি আমাদের স্টোরে এসে সরাসরি পণ্য ক্রয় করতে পারেন। নিচে আমাদের
            স্টোরের অবস্থান এবং যোগাযোগের তথ্য দেওয়া হলো।
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              স্টোরের ঠিকানা
            </h2>
            <p>📍 ঠিকানা: ১২৩, নিউ মার্কেট রোড, ঢাকা, বাংলাদেশ</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              খোলার সময়
            </h2>
            <p>
              🕒 সোম–শুক্র: সকাল ৯টা থেকে সন্ধ্যা ৮টা <br />
              🕒 শনিবার: সকাল ১০টা থেকে বিকেল ৬টা <br />
              🕒 রবিবার: বন্ধ
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              যোগাযোগ
            </h2>
            <p className="text-sm">
              📧 ইমেইল: support@yourwebsite.com <br />
              📞 ফোন: +880 1234 567890
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              মানচিত্র
            </h2>
            <div className="mt-2">
              <iframe
                title="Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902234053464!2d90.41251881498107!3d23.810332484575455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b859b0f69a5d%3A0xf6b5f8f7779df2b2!2sNew%20Market%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1697645123456!5m2!1sen!2sbd"
                width="100%"
                height="400"
                className="rounded-lg shadow"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              গাড়ি পার্কিং
            </h2>
            <p>
              স্টোরের পাশে সীমিত গাড়ি পার্কিং সুবিধা রয়েছে। পাবলিক ট্রান্সপোর্ট
              ব্যবহার করলে আরও সুবিধাজনক।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocationPage;
