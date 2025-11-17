import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { SlEnvolope } from "react-icons/sl";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center  py-8 bg-[#18181B] text-white ">
      <div className="flex flex-col justify-between  w-[1120px] gap-10">
        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-3 w-full flex-2">
            <div className="flex items-center gap-3.5 text-lg self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="uppercase font-medium">
                get special discounts in your inbox
              </span>
            </div>
            <div className="border py-2 px-1 flex items-center">
              <input
                type="text"
                name="text"
                placeholder="Enter email to get offers, discounts and more."
                className="text-sm text-[#EFF4FB] py-1 px-2 w-full focus:outline-0"
              />
              <button className="text-black bg-white text-sm py-1 px-2 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex-[1.5]">
            <div className="flex items-center gap-3.5 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_2022_285)">
                  <path
                    d="M10.8333 1.66699C12.8224 1.66699 14.7301 2.45717 16.1366 3.86369C17.5431 5.27021 18.3333 7.17787 18.3333 9.16699M10.8333 5.00033C11.9384 5.00033 12.9982 5.43931 13.7796 6.22071C14.561 7.00212 15 8.06192 15 9.16699M11.5266 13.807C11.6987 13.886 11.8926 13.9041 12.0764 13.8582C12.2601 13.8123 12.4227 13.7052 12.5375 13.5545L12.8333 13.167C12.9885 12.96 13.1898 12.792 13.4213 12.6763C13.6527 12.5606 13.9079 12.5003 14.1666 12.5003H16.6666C17.1087 12.5003 17.5326 12.6759 17.8451 12.9885C18.1577 13.301 18.3333 13.725 18.3333 14.167V16.667C18.3333 17.109 18.1577 17.5329 17.8451 17.8455C17.5326 18.1581 17.1087 18.3337 16.6666 18.3337C12.6884 18.3337 8.87307 16.7533 6.06002 13.9403C3.24698 11.1272 1.66663 7.31191 1.66663 3.33366C1.66663 2.89163 1.84222 2.46771 2.15478 2.15515C2.46734 1.84259 2.89127 1.66699 3.33329 1.66699H5.83329C6.27532 1.66699 6.69924 1.84259 7.0118 2.15515C7.32436 2.46771 7.49996 2.89163 7.49996 3.33366V5.83366C7.49996 6.0924 7.43972 6.34759 7.324 6.57901C7.20829 6.81044 7.04029 7.01175 6.83329 7.16699L6.44329 7.45949C6.29031 7.57631 6.18248 7.74248 6.13812 7.92978C6.09376 8.11709 6.11561 8.31397 6.19996 8.48699C7.33886 10.8002 9.21198 12.671 11.5266 13.807Z"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2022_285">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="uppercase font-medium">
                get special discounts in your inbox
              </span>
            </div>
            <div className="text-sm mt-3">
              <div>+8801700000000</div>
              <div>Open 24 Hours a Day, 7 Days a week</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M26.9167 9.91667V5.66667C26.9167 5.29094 26.7674 4.93061 26.5017 4.66493C26.2361 4.39926 25.8757 4.25 25.5 4.25H7.08333C6.33189 4.25 5.61122 4.54851 5.07986 5.07986C4.54851 5.61122 4.25 6.33189 4.25 7.08333M4.25 7.08333C4.25 7.83478 4.54851 8.55545 5.07986 9.0868C5.61122 9.61816 6.33189 9.91667 7.08333 9.91667H28.3333C28.7091 9.91667 29.0694 10.0659 29.3351 10.3316C29.6007 10.5973 29.75 10.9576 29.75 11.3333V17M4.25 7.08333V26.9167C4.25 27.6681 4.54851 28.3888 5.07986 28.9201C5.61122 29.4515 6.33189 29.75 7.08333 29.75H28.3333C28.7091 29.75 29.0694 29.6007 29.3351 29.3351C29.6007 29.0694 29.75 28.7091 29.75 28.3333V22.6667M29.75 17H25.5C24.7486 17 24.0279 17.2985 23.4965 17.8299C22.9652 18.3612 22.6667 19.0819 22.6667 19.8333C22.6667 20.5848 22.9652 21.3054 23.4965 21.8368C24.0279 22.3682 24.7486 22.6667 25.5 22.6667H29.75M29.75 17C30.1257 17 30.4861 17.1493 30.7517 17.4149C31.0174 17.6806 31.1667 18.0409 31.1667 18.4167V21.25C31.1667 21.6257 31.0174 21.9861 30.7517 22.2517C30.4861 22.5174 30.1257 22.6667 29.75 22.6667"
                stroke="white"
                stroke-width="2.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col">
              <span className="uppercase text-lg font-medium">
                cash on delivery
              </span>
              <span className="text-sm"> Pay cash at your doorstep</span>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M19.8333 25.5003V8.50033C19.8333 7.74888 19.5348 7.02821 19.0034 6.49686C18.4721 5.9655 17.7514 5.66699 17 5.66699H5.66665C4.9152 5.66699 4.19453 5.9655 3.66318 6.49686C3.13182 7.02821 2.83331 7.74888 2.83331 8.50033V24.0837C2.83331 24.4594 2.98257 24.8197 3.24824 25.0854C3.51392 25.3511 3.87426 25.5003 4.24998 25.5003H7.08331M7.08331 25.5003C7.08331 27.0651 8.35184 28.3337 9.91665 28.3337C11.4815 28.3337 12.75 27.0651 12.75 25.5003M7.08331 25.5003C7.08331 23.9355 8.35184 22.667 9.91665 22.667C11.4815 22.667 12.75 23.9355 12.75 25.5003M21.25 25.5003H12.75M21.25 25.5003C21.25 27.0651 22.5185 28.3337 24.0833 28.3337C25.6481 28.3337 26.9166 27.0651 26.9166 25.5003M21.25 25.5003C21.25 23.9355 22.5185 22.667 24.0833 22.667C25.6481 22.667 26.9166 23.9355 26.9166 25.5003M26.9166 25.5003H29.75C30.1257 25.5003 30.486 25.3511 30.7517 25.0854C31.0174 24.8197 31.1666 24.4594 31.1666 24.0837V18.9128C31.1661 18.5913 31.0562 18.2796 30.855 18.0288L25.925 11.8663C25.7925 11.7004 25.6244 11.5664 25.4331 11.4742C25.2419 11.382 25.0323 11.334 24.82 11.3337H19.8333"
                stroke="white"
                stroke-width="2.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col">
              <span className="uppercase text-lg font-medium">delivery</span>
              <span className="text-sm">All over Bangladesh</span>
            </div>
          </div>

          <div className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M4.25 17C4.25 19.5217 4.99777 21.9868 6.39876 24.0835C7.79975 26.1802 9.79103 27.8144 12.1208 28.7795C14.4505 29.7445 17.0141 29.997 19.4874 29.505C21.9607 29.0131 24.2325 27.7987 26.0156 26.0156C27.7987 24.2325 29.0131 21.9607 29.505 19.4874C29.997 17.0141 29.7445 14.4505 28.7795 12.1208C27.8144 9.79103 26.1802 7.79975 24.0835 6.39876C21.9868 4.99777 19.5217 4.25 17 4.25C13.4356 4.26341 10.0144 5.65423 7.45167 8.13167L4.25 11.3333M4.25 11.3333V4.25M4.25 11.3333H11.3333"
                stroke="white"
                stroke-width="2.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col">
              <span className="uppercase text-lg font-medium">
                happy return
              </span>
              <span className="text-sm">7 days return facility</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
