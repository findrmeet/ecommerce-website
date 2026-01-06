"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Phone, Lock, Eye } from "lucide-react";
import Link from "next/link";

// type declarations
type SignInValues = {
  mobile: string;
  password: string;
};

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<SignInValues>();
  const onSubmit: SubmitHandler<SignInValues> = (data) => {
    console.log(data);
  };

  return (
    <section className=" flex items-center justify-center ">
      <div className=" bg-white rounded-3xl p-6 shadow-xl w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl ">Sign In</h1>
          <p className="text-sm text-[#8A99AF] mt-1">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <div
              className="relative  border
                    border-neutral-300
                rounded-xl focus-within:border-green-500 transition
                   "
            >
              {/* Icon box */}
              <div className="absolute left-0 top-0 bottom-0 w-11 flex items-center justify-center   rounded-l-xl bg-gray-50">
                <Phone className="w-4 h-4 text-neutral-400" />
              </div>

              <input
                {...register("mobile")}
                placeholder="Enter your mobile number"
                className="
                    w-full
                    py-3
                    pl-12
                    pr-4
              focus:outline-none
                
                    "
              />
            </div>
          </div>

          <div>
            {/* password */}
            <label className="block text-sm font-medium mb-1">Password</label>

            <div className="relative border border-neutral-300 rounded-xl focus-within:border-green-500 transition">
              {/* Lock icon */}
              <div className="absolute left-0 top-0 bottom-0 w-11 flex items-center justify-center rounded-l-xl bg-gray-50">
                <Lock className="w-4 h-4 text-neutral-400" />
              </div>

              {/* Input */}
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="
        w-full
        py-3
        pl-12
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

          {/* Forgot */}
          <div className="text-sm font-medium text-neutral-700 cursor-pointer">
            Forgot password?
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition cursor-pointer"
          >
            Sign In
          </button>

          {/* Google */}
          <button
            type="button"
            className="w-full py-3 border border-neutral-300 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-50 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-neutral-400 mt-6">
          Don’t have an account?{" "}
          <Link
            href={"/signup"}
            className="font-medium text-neutral-900 cursor-pointer"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </section>
  );
}
