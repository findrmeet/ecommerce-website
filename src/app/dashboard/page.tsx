"use client";

import { useState } from "react";
import {
  Box,
  CircleCheck,
  CircleUser,
  CircleX,
  LogOut,
  Settings,
  ShoppingBag,
  Eye,
  Package,
  ShoppingCart,
  User,
  MapPin,
  Phone,
  Mail,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import CustomStyledDropdown from "./CustomStyledDropdown";
import PaymentStatusDropdown from "./PaymentStatusDropodown";
import Image from "next/image";

// Types
interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
  image: string;
  sku: string;
}

interface Order {
  id: number;
  invoiceNo: string;
  date: string;
  total: string;
  orderStatus: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  paymentStatus: "Pending" | "Completed" | "Failed" | "Refunded";
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  billingAddress: string;
  items: OrderItem[];
  shippingMethod: string;
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  tax: number;
  discount: number;
  grandTotal: number;
  notes?: string;
}

const Page = () => {
  const [active, setActive] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(50);
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Sample order data with more details
  const orders: Order[] = [
    {
      id: 1,
      invoiceNo: "INV-20260201-0001",
      date: "January 23, 2026, 05:04 PM",
      total: "$1,200.54 for 3 items",
      orderStatus: "Pending",
      paymentStatus: "Completed",
      customerName: "John Doe",
      customerEmail: "john.doe@example.com",
      customerPhone: "+1 (555) 123-4567",
      shippingAddress: "123 Main St, Apt 4B, New York, NY 10001",
      billingAddress: "123 Main St, Apt 4B, New York, NY 10001",
      shippingMethod: "Express Delivery",
      paymentMethod: "Credit Card (**** 4242)",
      subtotal: 1120.54,
      shippingCost: 25.0,
      tax: 55.0,
      discount: 0,
      grandTotal: 1200.54,
      notes: "Please deliver before 5 PM",
      items: [
        {
          id: 101,
          name: "Premium Wireless Headphones",
          quantity: 1,
          price: 299.99,
          total: 299.99,
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
          sku: "HP-2024-WL",
        },
        {
          id: 102,
          name: "Smart Watch Pro",
          quantity: 2,
          price: 399.99,
          total: 799.98,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
          sku: "SW-2024-PRO",
        },
        {
          id: 103,
          name: "USB-C Charging Cable",
          quantity: 1,
          price: 19.99,
          total: 19.99,
          image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
          sku: "CB-2024-USB",
        },
      ],
    },
    {
      id: 2,
      invoiceNo: "INV-20260201-0002",
      date: "January 22, 2026, 02:30 PM",
      total: "$850.00 for 2 items",
      orderStatus: "Processing",
      paymentStatus: "Pending",
      customerName: "Jane Smith",
      customerEmail: "jane.smith@example.com",
      customerPhone: "+1 (555) 987-6543",
      shippingAddress: "456 Oak Ave, Suite 12, Los Angeles, CA 90001",
      billingAddress: "456 Oak Ave, Suite 12, Los Angeles, CA 90001",
      shippingMethod: "Standard Shipping",
      paymentMethod: "PayPal",
      subtotal: 800.0,
      shippingCost: 30.0,
      tax: 20.0,
      discount: 0,
      grandTotal: 850.0,
      items: [
        {
          id: 201,
          name: "Laptop Backpack",
          quantity: 1,
          price: 89.99,
          total: 89.99,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
          sku: "BP-2024-LT",
        },
        {
          id: 202,
          name: "Coffee Maker",
          quantity: 1,
          price: 710.01,
          total: 710.01,
          image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
          sku: "CM-2024-PRE",
        },
      ],
    },
    {
      id: 3,
      invoiceNo: "INV-20260201-0003",
      date: "January 21, 2026, 10:15 AM",
      total: "$350.25 for 1 item",
      orderStatus: "Shipped",
      paymentStatus: "Completed",
      customerName: "Robert Johnson",
      customerEmail: "robert.j@example.com",
      customerPhone: "+1 (555) 456-7890",
      shippingAddress: "789 Pine Rd, Chicago, IL 60601",
      billingAddress: "789 Pine Rd, Chicago, IL 60601",
      shippingMethod: "Express Delivery",
      paymentMethod: "Credit Card (**** 1881)",
      subtotal: 320.25,
      shippingCost: 20.0,
      tax: 10.0,
      discount: 0,
      grandTotal: 350.25,
      items: [
        {
          id: 301,
          name: "Bluetooth Speaker",
          quantity: 1,
          price: 320.25,
          total: 320.25,
          image:
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
          sku: "BS-2024-BT",
        },
      ],
    },
    {
      id: 4,
      invoiceNo: "INV-20260201-0004",
      date: "January 20, 2026, 11:45 AM",
      total: "$1,850.75 for 4 items",
      orderStatus: "Delivered",
      paymentStatus: "Completed",
      customerName: "Sarah Wilson",
      customerEmail: "sarah.w@example.com",
      customerPhone: "+1 (555) 789-0123",
      shippingAddress: "321 Elm St, Miami, FL 33101",
      billingAddress: "321 Elm St, Miami, FL 33101",
      shippingMethod: "Next Day Delivery",
      paymentMethod: "Apple Pay",
      subtotal: 1750.75,
      shippingCost: 50.0,
      tax: 50.0,
      discount: 100.0,
      grandTotal: 1850.75,
      items: [
        {
          id: 401,
          name: "Gaming Monitor",
          quantity: 1,
          price: 499.99,
          total: 499.99,
          image:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
          sku: "MN-2024-GM",
        },
        {
          id: 402,
          name: "Mechanical Keyboard",
          quantity: 1,
          price: 129.99,
          total: 129.99,
          image:
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
          sku: "KB-2024-ME",
        },
        {
          id: 403,
          name: "Gaming Mouse",
          quantity: 1,
          price: 79.99,
          total: 79.99,
          image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
          sku: "MS-2024-GM",
        },
        {
          id: 404,
          name: "Mouse Pad",
          quantity: 2,
          price: 40.89,
          total: 81.78,
          image:
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400",
          sku: "MP-2024-XL",
        },
      ],
    },
    {
      id: 5,
      invoiceNo: "INV-20260201-0005",
      date: "January 19, 2026, 03:20 PM",
      total: "$120.00 for 1 item",
      orderStatus: "Cancelled",
      paymentStatus: "Refunded",
      customerName: "Michael Brown",
      customerEmail: "michael.b@example.com",
      customerPhone: "+1 (555) 234-5678",
      shippingAddress: "654 Maple Dr, Seattle, WA 98101",
      billingAddress: "654 Maple Dr, Seattle, WA 98101",
      shippingMethod: "Standard Shipping",
      paymentMethod: "Credit Card (**** 5678)",
      subtotal: 120.0,
      shippingCost: 0,
      tax: 0,
      discount: 0,
      grandTotal: 120.0,
      items: [
        {
          id: 501,
          name: "Phone Case",
          quantity: 1,
          price: 120.0,
          total: 120.0,
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
          sku: "PC-2024-PRO",
        },
      ],
    },
  ];

  const totalEntries = 85;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="w-4 h-4" />;
      case "Processing":
        return <Package className="w-4 h-4" />;
      case "Shipped":
        return <Truck className="w-4 h-4" />;
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />;
      case "Cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Processing":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Shipped":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Delivered":
        return "bg-green-50 text-green-700 border-green-200";
      case "Cancelled":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "Failed":
        return "bg-red-50 text-red-700 border-red-200";
      case "Refunded":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="container-custom space-y-2.5 md:grid grid-cols-1 md:grid-cols-12 gap-2.5 text-black">
      {/* sidebar */}
      <ul className="space-y-3 md:col-span-2 border p-4 rounded-2xl border-gray-200 bg-white h-fit">
        <li
          onClick={() => setActive("dashboard")}
          className={`flex gap-3 cursor-pointer hover:text-[#03C855] items-center font-normal px-2.5 py-1.5 rounded-lg ${
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
          className={`flex gap-2 cursor-pointer hover:text-[#03C855] items-center px-2.5 py-1.5 rounded-lg ${
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
      <div className="sm:col-span-10 col-span-12 text-nowrap">
        {active === "dashboard" && (
          <div className="grid sm:grid-cols-3 gap-2.5 self-start">
            <div className="bg-white rounded-2xl flex p-4">
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
              <div className="relative flex-1 max-w-xs bg-white rounded-lg">
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
                  <PaymentStatusDropdown />
                </div>
                <div className="relative">
                  <CustomStyledDropdown />
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
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {order.id}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">
                        {order.invoiceNo}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {order.date}
                      </td>
                      <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                        {order.total}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.orderStatus)}
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.orderStatus)}`}
                          >
                            {order.orderStatus}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getPaymentStatusColor(order.paymentStatus)}`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleViewOrder(order)}
                          className="text-gray-400 hover:text-green-600 transition-colors duration-150 cursor-pointer"
                          title="View Order Details"
                        >
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
                  className="appearance-none px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring focus:ring-green-500 bg-white"
                >
                  <option value={10}>10</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>

                <span className="text-sm text-gray-600">
                  Showing 1 to 5 of {totalEntries} entries
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

      {/* Order Details Modal */}
      {open && selectedOrder && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div
                className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Order Details
                      </h2>
                      <p className="text-sm text-gray-500">
                        {selectedOrder.invoiceNo}
                      </p>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150 cursor-pointer"
                    >
                      <CircleX className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="p-6 space-y-6">
                    {/* Order Status & Payment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-500">
                            Order Status
                          </h3>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(selectedOrder.orderStatus)}
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedOrder.orderStatus)}`}
                            >
                              {selectedOrder.orderStatus}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-500">
                            Payment Status
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getPaymentStatusColor(selectedOrder.paymentStatus)}`}
                          >
                            {selectedOrder.paymentStatus}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-500">
                            Order Date
                          </h3>
                          <span className="text-sm text-gray-900">
                            {selectedOrder.date}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-500">
                            Shipping Method
                          </h3>
                          <span className="text-sm text-gray-900">
                            {selectedOrder.shippingMethod}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-500">
                            Payment Method
                          </h3>
                          <span className="text-sm text-gray-900">
                            {selectedOrder.paymentMethod}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Customer Information */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <User className="w-5 h-5" /> Customer Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-900">
                              {selectedOrder.customerName}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-900">
                              {selectedOrder.customerEmail}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-900">
                              {selectedOrder.customerPhone}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium text-gray-700">
                                Shipping Address
                              </h4>
                              <p className="text-sm text-gray-600">
                                {selectedOrder.shippingAddress}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium text-gray-700">
                                Billing Address
                              </h4>
                              <p className="text-sm text-gray-600">
                                {selectedOrder.billingAddress}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" /> Order Items (
                        {selectedOrder.items.length})
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Product
                              </th>
                              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                SKU
                              </th>
                              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Price
                              </th>
                              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Qty
                              </th>
                              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {selectedOrder.items.map((item) => (
                              <tr key={item.id} className="hover:bg-gray-50">
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-3">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <span className="text-sm font-medium text-gray-900">
                                      {item.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-600">
                                  {item.sku}
                                </td>
                                <td className="py-4 px-4 text-sm font-medium text-gray-900">
                                  ${item.price.toFixed(2)}
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-600">
                                  {item.quantity}
                                </td>
                                <td className="py-4 px-4 text-sm font-semibold text-gray-900">
                                  ${item.total.toFixed(2)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Order Summary
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Subtotal
                            </span>
                            <span className="text-sm font-medium">
                              ${selectedOrder.subtotal.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Shipping Cost
                            </span>
                            <span className="text-sm font-medium">
                              ${selectedOrder.shippingCost.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Tax</span>
                            <span className="text-sm font-medium">
                              ${selectedOrder.tax.toFixed(2)}
                            </span>
                          </div>
                          {selectedOrder.discount > 0 && (
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">
                                Discount
                              </span>
                              <span className="text-sm font-medium text-green-600">
                                -${selectedOrder.discount.toFixed(2)}
                              </span>
                            </div>
                          )}
                          <div className="border-t border-gray-300 pt-3">
                            <div className="flex justify-between">
                              <span className="text-base font-semibold text-gray-900">
                                Grand Total
                              </span>
                              <span className="text-lg font-bold text-gray-900">
                                ${selectedOrder.grandTotal.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    {selectedOrder.notes && (
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Customer Notes
                        </h3>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-gray-700">
                            {selectedOrder.notes}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => setOpen(false)}
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            // Handle order actions
                            console.log("Processing order:", selectedOrder.id);
                            alert(
                              `Processing order ${selectedOrder.invoiceNo}`,
                            );
                          }}
                          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-150"
                        >
                          Process Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
