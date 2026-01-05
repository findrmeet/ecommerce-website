type WishlistItem = {
  id: number;
  title: string;
  image: string;
  color: string;
  size: string;
  qty: number;
  price: number;
};

const items: WishlistItem[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
  image: "/polo.png", // put image in /public
  color: "Green",
  size: "XL",
  qty: 1,
  price: 1780,
}));

const page = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 container-custom">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-lg font-semibold text-neutral-900">
          Wishlist Summary
        </h2>
        <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-sm text-neutral-600">
          {items.length} items
        </span>
      </div>

      {/* List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-neutral-50 px-5 py-4"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 rounded-lg object-contain bg-white p-2"
              />

              <div className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900">
                  {item.title}
                </p>

                <p className="text-xs text-neutral-500">
                  Color : <span className="text-neutral-700">{item.color}</span>{" "}
                  | Size : <span className="text-neutral-700">{item.size}</span>{" "}
                  | Qty : <span className="text-neutral-700">{item.qty}</span>
                </p>

                <p className="text-sm font-semibold text-neutral-900">
                  ৳ {item.price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <button className="text-red-500 transition hover:text-red-600">
                🗑️
              </button>

              <button className="rounded-full bg-neutral-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
