"use client";
import { User, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  mobile: string;
  address: string;
  notes?: string;
  coupon?: string;
  shipping: "inside" | "outside";
  payment: "cod" | "bkash" | "card";
};

export default function CheckoutForm() {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      shipping: "inside",
      payment: "cod",
    },
  });

  const shipping = watch("shipping");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-7xl mx-auto px-4 py-10 bg-gray-50"
    >
      {/* LOGIN BANNER */}
      <div className="border border-[#0ACB52] bg-[#E8F9F0] px-4 py-3 text-sm mb-8 rounded">
        Returning Customer?{" "}
        <span className="text-[#0ACB52] font-medium cursor-pointer">
          Click here to login
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT - Delivery Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* HEADER */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl  text-gray-900">Delivery Information</h2>
          </div>

          {/* NAME + MOBILE */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 bg-white">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full outline-none bg-transparent text-gray-500 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 bg-white">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  {...register("mobile")}
                  placeholder="01XXXXXXXXX"
                  className="w-full outline-none bg-transparent text-gray-500 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* FULL ADDRESS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Address <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 bg-white">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <input
                {...register("address")}
                placeholder="Home , road , aria or full address"
                className="w-full outline-none bg-transparent text-gray-500 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* SHIPPING METHOD */}
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <p className="text-base font-medium text-gray-900 mb-4">
              Choose Shipping Method
            </p>

            <div className="space-y-3">
              {/* INSIDE DHAKA */}
              <label
                className={`flex justify-between items-center px-4 py-3.5 rounded-md border cursor-pointer transition-all ${
                  watch("shipping") === "inside"
                    ? "border-[#0ACB52] bg-[#E8F9F0]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    {...register("shipping")}
                    type="radio"
                    value="inside"
                    className="w-4 h-4"
                  />
                  <span className="text-gray-900 text-sm font-medium">
                    Delivery Inside Dhaka
                  </span>
                </span>
                <span className="font-semibold text-gray-900">৳ 70.00</span>
              </label>

              {/* OUTSIDE DHAKA */}
              <label
                className={`flex justify-between items-center px-4 py-3.5 rounded-md border cursor-pointer transition-all ${
                  watch("shipping") === "outside"
                    ? "border-[#0ACB52] bg-[#E8F9F0]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    {...register("shipping")}
                    type="radio"
                    value="outside"
                    className="w-4 h-4"
                  />
                  <span className="text-gray-900 text-sm font-medium">
                    Delivery Outside Dhaka
                  </span>
                </span>
                <span className="font-semibold text-gray-900">৳ 120.00</span>
              </label>
            </div>
          </div>

          {/* ORDER NOTES */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order Notes <span className="text-gray-500">(Optional)</span>
            </label>
            <textarea
              {...register("notes")}
              placeholder="Special instructions for delivery"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 h-28 resize-none outline-none bg-white text-gray-500 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 h-fit">
          {/* ORDER SUMMARY HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl  text-gray-900">Order Summary</h2>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              3 items
            </span>
          </div>

          {/* ORDER ITEMS */}
          <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
            {[
              {
                name: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
                color: "Green",
                size: "XL",
                qty: 1,
                price: "৳ 1,780.00",
              },
              {
                name: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
                color: "Green",
                size: "XL",
                qty: 1,
                price: "৳ 880.00",
              },
              {
                name: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
                color: "Green",
                size: "XL",
                qty: 1,
                price: "৳ 1,200.00",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#7BA894] rounded-sm"></div>
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm leading-tight mb-1">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-xs mb-2">
                    Color : <span className="font-medium">{item.color}</span> |{" "}
                    Size : <span className="font-medium">{item.size}</span>
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs">
                      Quantity : {item.qty}
                    </span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* COUPON */}
          <div className="mb-6">
            <p className="text-[#0ACB52] text-sm font-medium mb-3">
              Have a coupon code?
            </p>
            <div className="flex gap-2">
              <input
                {...register("coupon")}
                placeholder="Coupon code"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none text-sm placeholder:text-gray-400"
              />
              <button
                type="button"
                className="bg-[#0ACB52] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#09b548] transition-colors"
              >
                APPLY
              </button>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-base font-medium text-gray-900 mb-4">
              Choose Payemnt Method
            </h3>

            <div className="space-y-3 text-sm">
              {[
                { value: "cod", label: "Cash on Delivery" },
                { value: "bkash", label: "bKash" },
                { value: "card", label: "Pay with Card/Mobile Wallet" },
              ].map((p) => (
                <label
                  key={p.value}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    {...register("payment")}
                    type="radio"
                    value={p.value}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-900 text-sm">{p.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ORDER TOTAL */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total (3 items)</span>
              <span className="font-medium text-gray-900">৳ 3,860.00</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery charge</span>
              <span className="font-medium text-gray-900">৳ 70.00</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">৳ 3,930.00</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Discount (-)</span>
              <span className="font-medium text-[#0ACB52]">৳ 400.00</span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-lg font-semibold text-gray-900">
                Total Amount
              </span>
              <span className=" font-bold text-gray-900">৳ 3,530.00</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F2937] text-white py-3.5 rounded-md text-sm font-semibold hover:bg-[#374151] transition-colors"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
}
