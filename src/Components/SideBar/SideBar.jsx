import PropTypes from "prop-types";
import {
  MdDashboard,
  MdNotificationsActive,
  MdAssignment,
  MdSettings,
  MdPeople,
  MdShoppingCart,
  MdList,
  MdPayment,
  MdGroup,
  MdLocalShipping,
  MdInfoOutline,
  MdRateReview,
} from "react-icons/md";

import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";

const SideBar = ({ children, isOpen, isClose }) => {
  const [isSettingOpen, setIsSettingOpen] = useState(null);

  const handleIsOpen = (idx) => {
    setIsSettingOpen(idx === isSettingOpen ? null : idx);
  };
  const menuItems = [
    { name: "Dashboard", id: 1, icon: <MdDashboard />, path: "/dashboard" },
    {
      name: "Notifications",
      id: 2,
      icon: <MdNotificationsActive />,
      path: "/notification",
    },
    { name: "Reports", id: 3, icon: <MdAssignment />, path: "/report" },
    {
      name: "Settings",
      id: 4,
      icon: <MdSettings />,
      path: "/settings",
      subItems: [
        {
          name: "Global Settings",
          id: 5,
          icon: <MdPeople />,
          path: "/settings/global",
        },
        {
          name: "App Settings",
          id: 6,
          icon: <MdShoppingCart />,
          path: "/settings/app",
        },
        {
          name: "Banner Settings",
          id: 7,
          icon: <MdInfoOutline />,
          path: "/settings/banner",
        },
        {
          name: "Staffs Settings",
          id: 8,
          icon: <MdList />,
          path: "/settings/staff",
        },
      ],
    },
    { name: "Customers", id: 9, icon: <MdPeople />, path: "/customers" },
    {
      name: "Inventory",
      id: 10,
      icon: <MdShoppingCart />,
      path: "/inventory",
      subItems: [
        {
          name: "Attributes",
          id: 11,
          icon: <MdPayment />,
          path: "/inventory/attributes",
        },
        {
          name: "Brands",
          id: 12,
          icon: <MdGroup />,
          path: "/inventory/brands",
        },
        {
          name: "Categories",
          id: 13,
          icon: <MdLocalShipping />,
          path: "/inventory/categories",
        },
        {
          name: "Products",
          id: 14,
          icon: <MdRateReview />,
          path: "/inventory/products",
        },
        {
          name: "Coupons",
          id: 15,
          icon: <MdDashboard />,
          path: "/inventory/coupons",
        },
        {
          name: "Deals",
          id: 16,
          icon: <MdNotificationsActive />,
          path: "/inventory/deals",
        },
        {
          name: "Reviews",
          id: 17,
          icon: <MdAssignment />,
          path: "/inventory/reviews",
        },
      ],
    },
    {
      name: "Orders",
      id: 18,
      icon: <MdList />,
      path: "/orders",
      subItems: [
        {
          name: "Order List",
          id: 19,
          icon: <MdDashboard />,
          path: "/orders/list",
        },
        {
          name: "Cancel Request",
          id: 20,
          icon: <MdNotificationsActive />,
          path: "/orders/cancel",
        },
        {
          name: "Return Request",
          id: 21,
          icon: <MdAssignment />,
          path: "/orders/return",
        },
        {
          name: "Reason List",
          id: 22,
          icon: <MdSettings />,
          path: "/orders/reasons",
        },
      ],
    },
    {
      name: "Payment",
      id: 23,
      icon: <MdPayment />,
      path: "/payment",
      subItems: [
        {
          name: "Transaction List",
          id: 24,
          icon: <MdSettings />,
          path: "/payment/transactions",
        },
        {
          name: "Bank Information",
          id: 25,
          icon: <MdGroup />,
          path: "/payment/bank-info",
        },
        {
          name: "Pay Out List",
          id: 26,
          icon: <MdLocalShipping />,
          path: "/payment/pay-out",
        },
        {
          name: "Wallet Recharge",
          id: 27,
          icon: <MdRateReview />,
          path: "/payment/wallet-recharge",
        },
      ],
    },
    {
      name: "Membership",
      id: 28,
      icon: <MdGroup />,
      path: "/membership",
      subItems: [
        {
          name: "Membership List",
          id: 29,
          icon: <MdDashboard />,
          path: "/membership/list",
        },
        {
          name: "Package List",
          id: 30,
          icon: <MdNotificationsActive />,
          path: "/membership/packages",
        },
      ],
    },
    {
      name: "Delivery",
      id: 31,
      icon: <MdLocalShipping />,
      path: "/delivery",
      subItems: [
        {
          name: "Delivery Riders",
          id: 32,
          icon: <MdAssignment />,
          path: "/delivery/riders",
        },
        {
          name: "Delivery Charge",
          id: 33,
          icon: <MdList />,
          path: "/delivery/charge",
        },
      ],
    },
    { name: "Reports", id: 34, icon: <MdAssignment />, path: "/reports" },
    { name: "Facts", id: 35, icon: <MdInfoOutline />, path: "/facts" },
    {
      name: "Term & Policies",
      id: 36,
      icon: <MdSettings />,
      path: "/term-policies",
      subItems: [
        {
          name: "Privacy Policy",
          id: 37,
          icon: <MdList />,
          path: "/term-policies/privacy",
        },
        {
          name: "Refund Policy",
          id: 38,
          icon: <MdNotificationsActive />,
          path: "/term-policies/refund",
        },
        {
          name: "Return Policy",
          id: 39,
          icon: <MdAssignment />,
          path: "/term-policies/return",
        },
        {
          name: "Order Cancel Policy",
          id: 40,
          icon: <MdSettings />,
          path: "/term-policies/cancel",
        },
        {
          name: "Terms",
          id: 41,
          icon: <MdGroup />,
          path: "/term-policies/terms",
        },
        {
          name: "About Us",
          id: 42,
          icon: <MdLocalShipping />,
          path: "/term-policies/about",
        },
      ],
    },
    {
      name: "Messages",
      id: 43,
      icon: <MdNotificationsActive />,
      path: "/messages",
    },
    { name: "Blogs", id: 44, icon: <MdLocalShipping />, path: "/blogs" },
  ];

  return (
    <div className="flex">
      <div
        style={{
          width: isOpen ? "250px" : isClose ? "0px" : "50px",
          transition: "all 0.5s ease",
        }}
        className="min-h-screen  bg-blue-950 text-white "
      >
        <div className=" p-[22px] sticky top-0 flex justify-center z-10 bg-blue-800 min-w-[50px]">
          <h2 className="text-white ">{isOpen ? "Logo" : "LG"}</h2>
        </div>
        <div className="flex flex-col mt-5 -z-10">
          {menuItems.map((item, idx) => (
            <div key={idx} className="mb-1">
              <NavLinks
                item={item}
                idx={idx}
                isOpen={isOpen}
                handleIsOpen={handleIsOpen}
                isClose={isClose}
              ></NavLinks>
              {idx === isSettingOpen &&
                item.subItems &&
                item.subItems.map((subItem, subIdx) => (
                  <div
                    key={subIdx}
                    className="px-2 bg-[#321ba695] text-sm pt-1"
                  >
                    <NavLinks
                      item={subItem}
                      subItems={item.subItems ? item.subItems : null}
                      idx={subIdx}
                      isOpen={isOpen}
                      handleIsOpen={handleIsOpen}
                    ></NavLinks>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <main className="w-full min-h-screen bg-violet-100">{children}</main>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.bool,
};

export default SideBar;
