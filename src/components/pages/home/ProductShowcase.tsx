import Image from "next/image";

const ProductShowcase = () => {
  return (
    <div className="grid lg:grid-cols-2  lg:gap-4 px-2 container-custom">
      <div className="">
        <div className="grid sm:grid-cols-2 gap-2 lg:gap-4">
          <div className="lg:col-span-2 lg:row-span-2 lg:h-[400px] relative">
            <Image
              src="/one.png"
              alt="featured"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative h-40">
            <Image src="/three.png" alt="three" fill className="object-cover" />
          </div>

          <div className="relative h-40">
            <Image src="/four.png" alt="four" fill className="object-cover" />
          </div>

          <div className="lg:hidden relative h-32">
            <Image src="/two.png" alt="two" fill className="object-cover" />
          </div>
        </div>
      </div>
      <div>
        <div className="hidden lg:block relative h-96">
          <Image src="/two.png" alt="two-large" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
