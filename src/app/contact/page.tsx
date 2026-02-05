const ContactPage = () => {
  return (
    <section className={`bg-gray-50 min-h-screen py-16 px-4 font-google-sans`}>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-14">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            আপনার প্রশ্ন, পরামর্শ বা যেকোনো সমস্যার জন্য আমরা এখানে আছি। আমরা যত
            দ্রুত সম্ভব উত্তর দেব।
          </p>
        </header>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              আপনার নাম
            </label>
            <input
              type="text"
              id="name"
              placeholder="আপনার নাম লিখুন"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              আপনার ইমেইল
            </label>
            <input
              type="email"
              id="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              আপনার প্রশ্ন
            </label>
            <textarea
              id="message"
              placeholder="আপনার প্রশ্নটি এখানে লিখুন..."
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
          >
            পাঠান
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
