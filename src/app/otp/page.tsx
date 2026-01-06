const page = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white rounded-2xl  w-lg flex flex-col gap-8 items-center p-6 text-center">
        <div className="flex flex-col w-fit  space-y-1">
          <h1 className="text-2xl font-semibold">Verify Your Phone</h1>
          <p className="text-[#8A99AF] text-sm ">
            We’ve sent a 5-digit code to
          </p>
          <h3 className="font-medium">013****59</h3>
        </div>
        <div className="flex flex-col w-full  space-y-6">
          <h1 className="text-lg  text-[#8A99AF]">Enter OTP Code</h1>
          {/* input for 5 numbers otp */}
          <button className="w-full bg-[#03C855] text-white py-2 px-4 rounded-lg font-medium cursor-pointer">
            {" "}
            Verify OTP
          </button>
          <h3 className="text-sm ">Didn’t receive the code?</h3>
          <h3 className="font-medium text-[#03C855] cursor-pointer">
            Resend OTP
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
