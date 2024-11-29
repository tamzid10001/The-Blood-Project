import { Link } from "react-router";
import Button from "../components/Button";
import { ArrowRight } from "../components/Icons";
import Layout from "../components/Layout";
import InventoryTable from "./../components/InventoryTable";
import { useEffect, useState } from "react";
import { getQuantityByBloodGroup } from "../utils/API";

export default function Dashboard() {
 const [groupData, setGroupData] = useState([
  {
   _id: "A+",
   total: 0,
  },
  {
   _id: "A-",
   total: 0,
  },
  {
   _id: "B+",
   total: 0,
  },
  {
   _id: "B-",
   total: 0,
  },
  {
   _id: "AB+",
   total: 0,
  },
  {
   _id: "AB-",
   total: 0,
  },
  {
   _id: "O+",
   total: 0,
  },
  {
   _id: "O-",
   total: 0,
  },
 ]);
 useEffect(() => {
  getQuantityByBloodGroup(
   () => {
   },
   (v) => {
    const newGroupData = [...groupData];
    for (let i = 0; i < groupData.length; i++) {
     for (let j = 0; j < v.data.length; j++) {
      if (groupData[i]._id === v.data[j]._id) {
       newGroupData[i].total = v.data[j].total;
      }
     }
    }
    setGroupData(newGroupData);
   }
  );
 }, []);
 return (
  <Layout>
   <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-4">
    {groupData.map((item, index) => (
     <div
      key={index}
      className="bg-gray-50 rounded-md border-2 border-primary px-6 py-5 hover:shadow-lg hover:border-gray-600 transition-all"
     >
      <div>
       <h3 className="text-lg font-semibold px-2 py-0.5 bg-primary rounded-xl text-white w-fit !text-[14px] font-bold">
        {item._id}
       </h3>
       <p className="font-semibold !text-[26px] mt-3">{item.total}</p>
       <p className="text-gray-400 mt-0.5 !text-[14px]">Bags Available</p>
      </div>
     </div>
    ))}
   </div>

   <div className="mt-9">
    <div className="flex justify-between items-center">
     <h3 className="font-bold !text-[23px]">Inventory</h3>
     <Link to="/inventory">
      <Button className="!text-[16px] font-bold flex justify-center items-center gap-2 !py-1.5">
       View Full Inventory{" "}
       <div className="fill-white">
        <ArrowRight />
       </div>
      </Button>
     </Link>
    </div>
    <hr className="border-t-2 mt-4" />

    <InventoryTable />
   </div>
  </Layout>
 );
}
