import { Trash2 } from "lucide-react";
import rawItems from "../../../public/wishlist.data.json";
export type WishlistItem = {
  id: number;
  title: string;
  image: string;
  color: string;
  size: string;
  qty: number;
  price: number;
};

export const items: WishlistItem[] = rawItems.map((item, index) => ({
  id: index + 1,
  ...item,
}));

const page = () => {
  return (
    <div className="rounded-2xl border border-[#F3F4F6] bg-white p-4 container-custom">
      {/* Header */}
      <div className="mb-2 flex items-center gap-3">
        <h2 className="text-lg  text-neutral-900">Wishlist Summary</h2>
        <span className="rounded-md bg-[#E2E8F0] px-2 py-0.5 text-sm text-[#1D2535]">
          {items.length} items
        </span>
      </div>

      {/* List */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 rounded-xl bg-neutral-50 p-3"
          >
            {/* Left */}
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 rounded-lg object-contain"
              />
            </div>

            {/* Right */}
            <div className="flex flex-col  w-full gap-2">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-sm  text-neutral-900">{item.title}</p>
                  <p className="text-xs text-[#64748B]">
                    Color :{" "}
                    <span className="text-[#1D2535] font-medium">
                      {item.color}
                    </span>{" "}
                    | Size :{" "}
                    <span className="text-[#1D2535] font-medium">
                      {item.size}
                    </span>{" "}
                    | Qty :{" "}
                    <span className="text-[#1D2535] font-medium">
                      {item.qty}
                    </span>
                  </p>
                </div>
                <button className="text-red-500 transition hover:text-red-600 cursor-pointer">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="  text-neutral-900">৳ {item.price}</p>

                <button className="rounded-full bg-[#1D2535] px-4 py-2 text-xs  text-white transition hover:bg-neutral-800 cursor-pointer text-nowrap">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
