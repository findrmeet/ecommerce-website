"use client";

import { useForm } from "react-hook-form";
import { Eye, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type SignupValues = {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register } = useForm<SignupValues>();

  return (
    <section className=" flex items-center justify-center ">
      <div className=" bg-white rounded-3xl p-6 shadow-xl w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <p className="text-sm text-[#8A99AF] mt-1">Sign up to get started</p>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <div className="relative border border-neutral-300 rounded-xl focus-within:border-green-500 transition">
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName")}
                className="w-full py-3 pl-4 pr-4 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <div className="relative border border-neutral-300 rounded-xl focus-within:border-green-500 transition">
              <input
                type="tel"
                placeholder="Enter your mobile number"
                {...register("mobile")}
                className="w-full py-3 pl-4 pr-4 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative border border-neutral-300 rounded-xl focus-within:border-green-500 transition">
              {/* Input */}
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="
        w-full
        py-3
        pl-4
        pr-12
        focus:outline-none
        bg-transparent
      "
              />

              {/* Eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Eye
                  className={`w-4 h-4 cursor-pointer transition ${
                    showPassword ? "text-green-500" : "text-neutral-400"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative border border-neutral-300 rounded-xl focus-within:border-green-500 transition">
              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
                className="w-full py-3 pl-4 pr-12 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="text-sm text-neutral-600">
            By signing up, you agree to our{" "}
            <span className="font-medium text-neutral-900 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-medium text-neutral-900 cursor-pointer">
              Privacy Policy
            </span>
            .
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition disabled:opacity-70 cursor-pointer"
          >
            Create Account
          </button>

          {/* Google */}
          <button
            type="button"
            className="w-full py-3 border border-neutral-300 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-50 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-neutral-400 mt-6">
          Already have an account?{" "}
          <Link
            href={"/signin"}
            className="font-medium text-neutral-900 cursor-pointer"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
