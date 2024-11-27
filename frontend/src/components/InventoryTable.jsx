import Button from "./Button";
import { Delete } from "./Icons";

export default function InventoryTable() {
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
     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
      <tr key={i} className="bg-gray-100">
       <td className="px-6 py-2 text-black rounded-tl-lg rounded-bl-lg">
        Ratul Ahmed
       </td>
       <td className="px-6 py-2">Bheramara, Kushtia</td>
       <td className="px-6 py-2">#0275</td>
       <td className="px-6 py-2 text-black">Jan 26, 2023</td>
       <td className="px-6 py-2">
        <h3 className="text-lg font-semibold px-2 py-0.5 bg-primary/10 rounded-xl text-primary w-fit !text-[14px] font-bold">
         AB+
        </h3>
       </td>
       <td className="px-6 py-2 rounded-tr-lg rounded-br-lg flex gap-2 items-center">
        <Button className="!text-[14px] font-bold rounded-full flex justify-center items-center gap-2 !py-1.5">
         Mark Sold
        </Button>
        <button className="text-primary cursor-pointer active:scale-95">
         <Delete />
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}
