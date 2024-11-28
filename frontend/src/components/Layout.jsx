import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { verifyToken } from "../utils/API";

import { Add, AddInventory, Home, Inventory, Menu } from "./Icons";
import Button from "./Button";

export default function Layout(props) {
 const [open, setOpen] = useState(false);
 const [name, setName] = useState(null);
 const [bank_name, setbank_name] = useState(null);
 const [email, setEmail] = useState(null);
 let navigate = useNavigate();

 useEffect(() => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });

  if (window.localStorage.getItem("LlkhJHKGheft")) {
   verifyToken(
    () => {
     return navigate("/login");
    },
    (o) => {
     window.localStorage.setItem("user-name", o.data.name);
     window.localStorage.setItem("user-bank_name", o.data.bank_name);
     window.localStorage.setItem("user-email", o.data.email);
     setName(o.data.name);
     setbank_name(o.data.bank_name);
     setEmail(o.data.email);
    }
   );
  } else {
   return navigate("/login");
  }
 }, []);
 return (
  <div className="p-9">
   <nav className="pb-9 flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
    <div>
     <h3 className="text-2xl font-semibold">
      Welcome, {name?.split(" ").slice(-1)[0] || "User"} 👏🏻
     </h3>
     <p className="text-[16px] font-medium text-gray-400">
      {bank_name || "Unknown Blood Bank"}
     </p>
    </div>
    <div className="flex gap-2 justify-between">
     <Button
      className={`lg:hidden !text-[16px] font-bold rounded-full !py-1 !px-2.5 !bg-transparent border-2 ${
       open ? "!text-black" : "!text-primary"
      }`}
      onClick={() => setOpen(!open)}
     >
      <div className="stroke-white fill-white">
       <Menu />
      </div>
     </Button>
     <Link to="/inventory/add">
      <Button className="!text-[16px] font-bold rounded-full flex justify-center items-center gap-2 !py-1.5">
       Add New Inventory{" "}
       <div className="stroke-white fill-white">
        <Add />
       </div>
      </Button>
     </Link>
    </div>
   </nav>

   <div className="flex relative gap-8">
    <aside
     className={`fixed z-40 ${
      !open && "left-[-1000px]"
     } px-10 lg:ps-0 bg-white lg:sticky lg:top-0 left-0 w-full h-[72vh] lg:max-w-[245px] overflow-y-auto`}
    >
     <div>
      <hr className="mb-4 border-t-2" />
      <p className="text-gray-400 text-[13px] uppercase px-2.5">Manage</p>
      <div className="mt-4 flex flex-col gap-2 select-none">
       {[
        {
         page: "Dashboard",
         link: "/",
         icon: <Home />,
        },
        {
         page: "Inventory",
         link: "/inventory",
         icon: <Inventory />,
        },
        {
         page: "Add Inventory",
         link: "/inventory/add",
         icon: <AddInventory />,
        },
       ].map((item, index) => (
        <Link
         key={index}
         to={item.link}
         className={`flex gap-3 items-center p-2 text-[14px] rounded-xl cursor-pointer ${
          window.location.pathname === item.link
           ? "text-black font-semibold bg-gray-100"
           : "text-gray-400"
         }`}
        >
         <div
          className={`p-1 ${
           window.location.pathname === item.link
            ? "fill-white rounded-xl bg-primary"
            : "fill-gray-400"
          }`}
         >
          {item.icon}
         </div>
         {item.page}
        </Link>
       ))}
      </div>
      <hr className="my-4 border-t-2" />
      <div className="w-full flex justify-between py-3">
       <div className="hover:opacity-70 cursor-pointer active:scale-95">
        <h3 className="text-[14px] font-semibold">{name || "Unknown"}</h3>
        <p className="text-[12px] text-gray-400">{email || "error occurred"}</p>
       </div>
       <button
        onClick={() => {
         localStorage.removeItem("LlkhJHKGheft");
         localStorage.removeItem("user.name");
         localStorage.removeItem("user.email");
         window.location.href = "/";
        }}
       >
        <p className="w-fit cursor-pointer active:scale-95 select-none text-[12px] text-primary mt-2">
         Logout
        </p>
       </button>
      </div>
     </div>
     <div className="md:fixed bottom-[40px]">
      <p className="text-gray-400 text-[16px] mt-8">
       &copy; The Blood Project | 2025
      </p>
     </div>
    </aside>
    <main className="lg:px-4 w-full">{props.children}</main>
   </div>
  </div>
 );
}
