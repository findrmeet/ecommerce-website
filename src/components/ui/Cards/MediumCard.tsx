import Image from "next/image";

const MediumCard = () => {
  return (
    <div>
      {/* the background image */}
      <div className="bg-[url(/md-card-bg.png)] h-52 bg-cover bg-center relative text-sm">
        <span className="bg-primary-500 px-2 py-1 absolute top-1 left-1 text-xs text-white">
          TK 300 OFF
        </span>


        {/* the forground image */}
        <div className="absolute h-32 left-16 top-12">
          <Image
            src="/md-card.png"
            alt="Medium card"
            width={150}
            height={150}
            className="h-32 w-auto"
          />
        </div>
      </div>

      <div className="bg-[#F3F4F6] text-center pt-4.5 pb-3">
        <h4>Tecno Camon 40 Pro - Official</h4>
        <div className="bg-white px-3 py-1 rounded-full w-fit mx-auto">
          <span className="line-through">TK 28,560.00</span>{" "}
          <span className="text-primary-500 font-semibolds">TK 27,999.00</span>
        </div>
      </div>

      <div className="bg-black hover:bg-primary-500 py-2 text-center text-white uppercase font-medium cursor-pointer">
        Buy Now
      </div>
    </div>
  );
};

export default MediumCard;
