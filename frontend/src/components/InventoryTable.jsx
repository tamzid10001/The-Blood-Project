import {
 changeIsSold,
 deleteInventory,
 getInventory
} from "../utils/API";
import { useEffect, useState } from "react";

import Button from "./Button";
import { Delete } from "./Icons";
import Loading from "./Loading";

export default function InventoryTable() {
 const [data, setData] = useState(null);
 useEffect(() => {
  getInventory(
   () => {
   },
   (v) => {
    setData(v.data);
   }
  );
 }, []);
 function markSold(id, status) {
  const cnfrm = confirm(
   `Are you sure you want to mark this inventory as ${
    status ? "sold" : "unsold"
   }?`
  );
  if (cnfrm) {
   changeIsSold(
    id,
    status,
    () => {
    },
    () => {
     window.location.reload();
    }
   );
  }
 }
 function deleteOne(id) {
  const cnfrm = confirm("Are you sure you want to delete this inventory?");
  if (cnfrm) {
   deleteInventory(
    id,
    () => {
    },
    () => {
     window.location.reload();
    }
   );
  }
 }
 return (
  <div className="relative overflow-auto whitespace-nowrap mt-3 max-h-[90vh]">
   <table className="w-full text-sm text-left rtl:text-right text-gray-400 border-separate border-spacing-y-3">
    <thead className="!text-[14px]">
     <tr>
      <th scope="col" className="px-6 font-medium">
       Name
      </th>
      <th scope="col" className="px-6 font-medium">
       Location
      </th>
      <th scope="col" className="px-6 font-medium">
       ID
      </th>
      <th scope="col" className="px-6 font-medium">
       Date
      </th>
      <th scope="col" className="px-6 font-medium">
       Blood
      </th>
      <th scope="col" className="px-6 font-medium">
       Action
      </th>
     </tr>
    </thead>
    <tbody>
     {data ? (
      data.length > 0 ? (
       data.map((i, index) => (
        <tr key={index} className="bg-gray-100">
         <td className="px-6 py-2 text-black rounded-tl-lg rounded-bl-lg">
          {i.donor_name}
         </td>
         <td className="px-6 py-2 capitalize">{`${i.address.division}, ${i.address.district}`}</td>
         <td className="px-6 py-2">#{i.id}</td>
         <td className="px-6 py-2 text-black">
          {new Date(i.date).toLocaleDateString()}
         </td>
         <td className="px-6 py-2">
          <h3 className="text-lg font-semibold px-2 py-0.5 bg-primary/10 rounded-xl text-primary w-fit !text-[14px] font-bold">
           {i.blood_group}
          </h3>
         </td>
         <td className="px-6 py-2 rounded-tr-lg rounded-br-lg flex gap-2 items-center justify-between">
          <Button
           className={`!text-[14px] font-bold rounded-full flex justify-center items-center gap-2 !py-1.5 ${
            i.is_sold ? "!bg-black !text-white" : ""
           }`}
           onClick={
            !i.is_sold
             ? () => markSold(i.id, true)
             : () => markSold(i.id, false)
           }
          >
           {i.is_sold ? "Sold" : "Mark Sold"}
          </Button>
          <button
           className="text-primary cursor-pointer active:scale-95"
           onClick={() => deleteOne(i.id)}
          >
           <Delete />
          </button>
         </td>
        </tr>
       ))
      ) : (
       <tr>
        <td className="px-6 py-2 text-black text-center pt-8" colSpan="6">
         No data found!
        </td>
       </tr>
      )
     ) : (
      <tr>
       <td className="px-6 py-2 pt-8" colSpan="6">
        <div className="w-full flex justify-center items-center">
         <Loading />
        </div>
       </td>
      </tr>
     )}
    </tbody>
   </table>
  </div>
 );
}
