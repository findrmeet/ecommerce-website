import Image from "next/image";
import Link from "next/link";

const SingleBlog = () => {
  return (
    <div className="bg-gray-200">
      <Image width={430} height={220} src="/fruit.png" alt="blog" />

      <div className="flex px-2 pt-2 justify-between gap-2">
        <h3 className="font-semibold">
          প্রতিদিনের রুটিতে লাল আটা কেন রাখবেন – জানুন ৮টি বৈজ্ঞানিক কারণ
        </h3>
        <p className="text-xs whitespace-nowrap">OCT 23, 2025</p>
      </div>

      <Link href="/blog/healthy-red-flour">
        <div className="text-white bg-black py-2 text-center m-2 hover:bg-primary-500 cursor-pointer font-semibold">
          Read More
        </div>
      </Link>
    </div>
  );
};

export default SingleBlog;
