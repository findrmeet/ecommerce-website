"use client";
import React, { useState } from "react";
import { Package, User, Phone, MapPin, Truck } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("inside");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const nameRegex = /^[A-Za-z\s]*$/;
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleNameChange = (e: any) => {
    const value = e.target.value;

    if (!nameRegex.test(value)) {
      setNameError("Name can contain letters only");
      return;
    }

    setName(value);
    setNameError("");
  };

  const handleMobileChange = (e: any) => {
    const value = e.target.value;

    // Allow digits only (no max length)
    if (!/^\d*$/.test(value)) return;

    setMobile(value);

    // Validate only when length >= 11
    if (value.length <= 11 && !/^01[0-9]{9,}$/.test(value)) {
      setError("Mobile number must start with 01 and have at least 11 digits");
    } else {
      setError("");
    }
  };

  const orderItems = [
    {
      id: 1,
      name: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
      color: "Green",
      size: "XL",
      quantity: 1,
      price: 1780.0,
    },
    {
      id: 2,
      name: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
      color: "Green",
      size: "XL",
      quantity: 1,
      price: 880.0,
    },
    {
      id: 3,
      name: "Premium Designer Edition Double PK Cotton Polo - Tycoon",
      color: "Green",
      size: "XL",
      quantity: 1,
      price: 1200.0,
    },
  ];

  const itemsTotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharge = shippingMethod === "inside" ? 70.0 : 120.0;
  const discount = 400.0;
  const subtotal = itemsTotal + deliveryCharge;
  const totalAmount = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-50  px-4">
      <div className="max-w-7xl mx-auto">
        {/* Returning Customer Banner */}
        <div className=" border border-green-500 bg-green-50 rounded-lg px-4 py-2 mb-6">
          <span className="text-gray-700">Returning Customer ? </span>
          <a href="#" className="text-green-500 font-medium hover:underline">
            Click here to login
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Delivery Information */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg  p-6">
              {/* Delivery Information Header */}
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-5 h-5" />
                <h2 className="text-xl font-medium">Delivery Information</h2>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name and Mobile Number Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your name"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg outline-none
        ${nameError ? "border-red-500" : "border-gray-300"}
        focus:ring-1 focus:ring-green-500 focus:border-transparent`}
                      />
                    </div>

                    {nameError && (
                      <p className="text-sm text-red-500 mt-1">{nameError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                      <input
                        type="tel"
                        value={mobile}
                        onChange={handleMobileChange}
                        placeholder="01XXXXXXXXX"
                        inputMode="numeric"
                        maxLength={11}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                 focus:ring-1 focus:ring-green-500 focus:border-transparent outline-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 mt-1">{error}</p>
                    )}
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      placeholder="Home , road , aria or full address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Shipping Method */}
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Choose Shipping Method
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setShippingMethod("inside")}
                      className={`w-full p-4 rounded-lg border flex justify-between items-center transition-all cursor-pointer ${
                        shippingMethod === "inside"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="">Delivery Inside Dhaka</span>
                      <span className="">৳ 70.00</span>
                    </button>
                    <button
                      onClick={() => setShippingMethod("outside")}
                      className={`w-full p-4 rounded-lg border flex justify-between items-center transition-all cursor-pointer ${
                        shippingMethod === "outside"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="font-medium">
                        Delivery Outside Dhaka
                      </span>
                      <span className="font-medium">৳ 120.00</span>
                    </button>
                  </div>
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Notes{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    placeholder="Special instructions for delivery"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg  p-6 sticky top-4">
              {/* Order Summary Header */}
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-medium">Order Summary</h2>
                <span className="bg-gray-100 px-2 py-1 rounded-lg text-xs font-medium">
                  3 items
                </span>
              </div>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3  p-3 bg-gray-50 rounded-lg"
                  >
                    <Image
                      src={"/polo.png"}
                      width={72}
                      height={72}
                      alt="polo"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-light">
                        Colors :{" "}
                        <span className="font-medium text-black ">
                          {item.color}
                        </span>{" "}
                        | Size :
                        <span className="font-medium text-black ml-1">
                          {item.size}
                        </span>
                      </p>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500 font-light">
                          Quantity: {item.quantity}
                        </p>
                        <div className="text-sm font-medium text-gray-900 flex-shrink-0 ">
                          ৳ {item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                {!showCoupon && (
                  <p
                    onClick={() => setShowCoupon(true)}
                    className="text-green-500 text-sm hover:underline cursor-pointer font-medium mb-2"
                  >
                    Have a coupon code?
                  </p>
                )}

                {showCoupon && (
                  <>
                    <p
                      onClick={() => setShowCoupon(true)}
                      className="text-green-500 text-sm hover:underline cursor-pointer font-medium mb-2"
                    >
                      Have a coupon code?
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                   focus:ring-1 focus:ring-green-500 focus:border-transparent outline-none"
                      />
                      <button
                        className="px-12 py-2 cursor-pointer bg-green-500 text-white rounded-lg
                      font-medium hover:bg-green-600 transition-colors"
                      >
                        APPLY
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">
                  Choose Payemnt Method
                </h3>
                <div className=" flex gap-4 ">
                  <label className="flex items-center gap-2 cursor-pointer ">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="text-sm">Cash on Delivery</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer ">
                    <input
                      type="radio"
                      name="payment"
                      value="bkash"
                      checked={paymentMethod === "bkash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="text-sm">bKash</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer ">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="text-sm">Pay with Card/Mobile Wallet</span>
                  </label>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-4 pt-4 border-t border-gray-300">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total (3 items)</span>
                  <span className="font-medium">৳ {itemsTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery charge</span>
                  <span className="font-medium">
                    ৳ {deliveryCharge.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm border-t pt-4 border-gray-300">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">৳ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount (-)</span>
                  <span className="font-medium text-green-500">
                    ৳ {discount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Total Amount */}
              <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-300">
                <span className="text-lg font-medium">Total Amount</span>
                <span className="text-xl font-medium">
                  ৳ {totalAmount.toFixed(2)}
                </span>
              </div>

              {/* Place Order Button */}
              <button className="w-full cursor-pointer py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
