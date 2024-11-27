import Button from "../components/Button";
import Layout from "../components/Layout";
import InventoryTable from './../components/InventoryTable';

export default function Dashboard() {
 return (
  <Layout>
   <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-4">
    {[
     {
      category: "A+",
      value: 10,
     },
     {
      category: "A-",
      value: 10,
     },
     {
      category: "B+",
      value: 10,
     },
     {
      category: "B-",
      value: 10,
     },
     {
      category: "AB+",
      value: 10,
     },
     {
      category: "AB-",
      value: 10,
     },
     {
      category: "O+",
      value: 10,
     },
     {
      category: "O-",
      value: 10,
     }
    ].map((item, index) => (
     <div
      key={index}
      className="bg-gray-100 rounded-md border-2 border-primary px-6 py-5"
     >
      <div>
       <h3 className="text-lg font-semibold px-2 py-0.5 bg-primary rounded-xl text-white w-fit !text-[14px] font-bold">
        {item.category}
       </h3>
       <p className="font-semibold !text-[26px] mt-3">{item.value}</p>
       <p className="text-gray-400 mt-0.5 !text-[14px]">Bags Available</p>
      </div>
     </div>
    ))}
   </div>

   <div className="mt-9">
    <div className="flex justify-between items-center">
     <h3 className="font-bold !text-[23px]">Inventory</h3>
     <Button className="!text-[16px] font-bold rounded-full flex justify-center items-center gap-2 !py-1.5">
      View Full Inventory
     </Button>
    </div>
    <hr className="border-t-2 mt-4" />

    <InventoryTable />
   </div>
  </Layout>
 );
}
