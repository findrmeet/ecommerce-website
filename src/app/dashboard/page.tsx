"use client";

import { useState } from "react";
import {
  Box,
  BoxIcon,
  CircleCheck,
  CircleUser,
  CircleX,
  LayoutDashboardIcon,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingCart,
  User,
  UserRound,
  Eye,
} from "lucide-react";

const Page = () => {
  const [active, setActive] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(50);

  const orders = [
    {
      id: 1,
      invoiceNo: "INV-20260201-0002",
      date: "January 23, 2026, 05:04 PM",
      total: "$1200.54 for 3 items",
      orderStatus: "Pending",
      paymentStatus: "Completed",
    },
    {
      id: 2,
      invoiceNo: "INV-20260201-0002",
      date: "January 23, 2026, 05:04 PM",
      total: "$1200.54 for 3 items",
      orderStatus: "Pending",
      paymentStatus: "Completed",
    },
    {
      id: 3,
      invoiceNo: "INV-20260201-0002",
      date: "January 23, 2026, 05:04 PM",
      total: "$1200.54 for 3 items",
      orderStatus: "Pending",
      paymentStatus: "Completed",
    },
    {
      id: 4,
      invoiceNo: "INV-20260201-0002",
      date: "January 23, 2026, 05:04 PM",
      total: "$1200.54 for 3 items",
      orderStatus: "Pending",
      paymentStatus: "Completed",
    },
    {
      id: 5,
      invoiceNo: "INV-20260201-0002",
      date: "January 23, 2026, 05:04 PM",
      total: "$1200.54 for 3 items",
      orderStatus: "Pending",
      paymentStatus: "Completed",
    },
  ];

  const totalEntries = 85;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  return (
    <div className="container-custom grid grid-cols-12 gap-2.5 text-black">
      {/* sidebar */}
      <ul className="space-y-3 col-span-2 hidden sm:block border p-4 rounded-2xl border-gray-200 bg-white">
        <li
          onClick={() => setActive("dashboard")}
          className={`flex gap-3 cursor-pointer hover:text-[#03C855] items-center font-normal  px-2.5 py-1.5 rounded-lg ${
            active === "dashboard" && "text-[#03C855] bg-[#EFF4FB]"
          }`}
        >
          <CircleUser size={20} />
          Profile
        </li>

        <li
          onClick={() => setActive("orders")}
          className={`flex gap-2 items-center cursor-pointer hover:text-[#03C855] px-2.5 py-1.5 rounded-lg ${
            active === "orders" && "text-[#03C855] bg-[#EFF4FB]"
          }`}
        >
          <ShoppingBag size={20} /> Orders
        </li>

        <li
          onClick={() => setActive("settings")}
          className={`flex gap-2 cursor-pointer hover:text-[#03C855] items-center  px-2.5 py-1.5 rounded-lg ${
            active === "settings" && "text-[#03C855] bg-[#EFF4FB]"
          }`}
        >
          <Settings size={20} /> Settings
        </li>

        <li className="flex gap-2 items-center cursor-pointer text-[#EF4444] border-gray-200 border-t pt-4 px-2.5 pb-1.5">
          <LogOut size={20} /> Logout
        </li>
      </ul>

      {/* content */}
      <div className="sm:col-span-10 col-span-12">
        {active === "dashboard" && (
          <div className="grid sm:grid-cols-3 gap-2.5 self-start">
            <div className="bg-white rounded-2xl flex p-4 ">
              <div className="flex gap-3 items-center">
                <span className="p-3 bg-[#935AF552] block rounded-full">
                  <Box />
                </span>
                <div>
                  <p>Total Orders</p>
                  <div className="text-4xl">0</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl flex p-4">
              <div className="flex gap-3 items-center">
                <span className="p-3 bg-[#32D58352] block rounded-full text-[#12B76A]">
                  <CircleCheck />
                </span>
                <div>
                  <p>Completed</p>
                  <div className="text-4xl">0</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl flex p-4">
              <div className="flex gap-3 items-center">
                <span className="p-3 bg-[#FB545452] block rounded-full text-[#D34A3E]">
                  <CircleX />
                </span>
                <div>
                  <p>Cancelled</p>
                  <div className="text-4xl">0</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {active === "orders" && (
          <div className="flex flex-col">
            {/* Search and Filters Bar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              <div className="relative flex-1 max-w-xs">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <select className="appearance-none px-4 py-2.5 pr-10 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer">
                    <option>Payment Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <select className="appearance-none px-4 py-2.5 pr-10 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-1  focus:ring-green-500 cursor-pointer">
                    <option>Order Status</option>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      INVOICE NO
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ORDER DATE
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      GRAND TOTAL
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ORDER STATUS
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      PAYMENT STATUS
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                    >
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {order.id}
                      </td>
                      <td className="py-4 px-6 text-sm  ">{order.invoiceNo}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {order.date}
                      </td>
                      <td className="py-4 px-6 text-sm  text-gray-900">
                        {order.total}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors duration-150 cursor-pointer">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
                >
                  <option value={10}>10</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-600">
                  Showing 1 to 10 of {totalEntries} entries
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 text-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                      currentPage === page
                        ? "bg-green-500 text-white"
                        : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <span className="px-2 text-gray-400">...</span>

                {[7, 8, 9].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                      currentPage === page
                        ? "bg-green-500 text-white"
                        : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 text-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
