import Image from "next/image";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogDetailsPage = ({ params }: BlogPageProps) => {
  return (
    <article className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-600 text-white">
        <div className="container mx-auto px-6 py-14">
          <p className="text-sm uppercase tracking-wider text-green-100 mb-2">
            Health & Nutrition
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
            প্রতিদিনের রুটিতে লাল আটা কেন রাখবেন – জানুন ৮টি বৈজ্ঞানিক কারণ
          </h1>

          <div className="flex items-center gap-4 mt-4 text-sm text-green-100">
            <span>By Admin</span>
            <span>•</span>
            <span>October 23, 2025</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 -mt-10">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src="/fruit.png"
            alt="Blog cover"
            width={1200}
            height={600}
            className="w-full h-[320px] object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed mb-6">
            লাল আটা আমাদের দৈনন্দিন খাদ্যতালিকায় একটি গুরুত্বপূর্ণ উপাদান। এতে
            রয়েছে প্রচুর পরিমাণে ফাইবার, ভিটামিন এবং মিনারেল যা শরীরকে সুস্থ
            রাখতে সহায়তা করে।
          </p>

          <h2 className="text-xl font-semibold text-green-600 mb-3">
            লাল আটার উপকারিতা
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>হজম শক্তি বৃদ্ধি করে</li>
            <li>রক্তে শর্করার মাত্রা নিয়ন্ত্রণে রাখে</li>
            <li>ওজন নিয়ন্ত্রণে সহায়তা করে</li>
            <li>হৃদরোগের ঝুঁকি কমায়</li>
          </ul>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-6">
            “স্বাস্থ্যকর জীবনযাপনের জন্য সঠিক খাদ্যাভ্যাস অত্যন্ত জরুরি।”
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            প্রতিদিনের রুটিনে লাল আটা অন্তর্ভুক্ত করলে আপনি সহজেই স্বাস্থ্যকর
            জীবনধারার দিকে এগিয়ে যেতে পারেন।
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              Related Articles
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="hover:text-green-600 cursor-pointer">
                • স্বাস্থ্যকর খাদ্যাভ্যাসের ৫টি উপায়
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                • সকালের নাস্তায় কী খাবেন?
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                • ফাইবার কেন জরুরি?
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Need Nutrition Tips?
            </h3>
            <p className="text-sm text-green-700">
              Subscribe to get weekly health & nutrition updates.
            </p>

            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
              Subscribe
            </button>
          </div>
        </aside>
      </div>

      {/* Footer spacing */}
      <div className="h-20" />
    </article>
  );
};

export default BlogDetailsPage;
