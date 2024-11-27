import { Link } from "react-router";
import { Add, AddInventory, Home, Inventory } from "./Icons";
import Button from "./Button";

export default function Layout(props) {
 return (
  <div className="p-9">
   <nav className="pb-9 flex justify-between items-center">
    <div>
     <h3 className="text-2xl font-semibold">Welcome, Tamim 👏🏻</h3>
     <p className="text-[16px] font-medium text-gray-400">
      Kushtia GH Blood Bank
     </p>
    </div>
    <div>
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
    <aside className="sticky top-0 left-0 w-full h-[72vh] max-w-[245px]">
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
         className={`flex gap-3 items-center p-2 text-[14px] rounded-lg cursor-pointer ${
          window.location.pathname === item.link
           ? "text-black font-semibold bg-gray-100"
           : "text-gray-400"
         }`}
        >
         <div
          className={`p-1 ${
           window.location.pathname === item.link
            ? "fill-white rounded-lg bg-primary"
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
        <h3 className="text-[14px] font-semibold">Tamim Iqbal</h3>
        <p className="text-[12px] text-gray-400">tamimiqbal@gmail.com</p>
       </div>
       <Link to="/login">
        <p className="w-fit cursor-pointer active:scale-95 select-none text-[12px] text-primary mt-2">
         Logout
        </p>
       </Link>
      </div>
     </div>
     <div className="fixed bottom-[40px]">
      <p className="text-gray-400 text-[16px]">
       &copy; The Blood Project | 2025
      </p>
     </div>
    </aside>
    <main className="px-4 w-full">{props.children}</main>
   </div>
  </div>
 );
}
