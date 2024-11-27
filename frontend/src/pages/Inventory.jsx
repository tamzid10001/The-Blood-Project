import Button from "../components/Button";
import { Dropdown } from "../components/Icons";
import InventoryTable from "../components/InventoryTable";
import Layout from "../components/Layout";

export default function Inventory() {
 return (
  <Layout>
   <div className="flex justify-between items-center">
    <h3 className="font-bold !text-[23px]">Inventory</h3>
    <Button className="!text-[16px] text-black bg-gray-100 flex justify-center items-center gap-2 !py-1.5">
     Jan 02, 2023 - Jan 31, 2023 <Dropdown />
    </Button>
   </div>
   <hr className="border-t-2 mt-4" />
   <InventoryTable />
   <div className="mt-6 flex justify-between">
    <div>
     <p className="text-[16px] text-gray-400">Showing Results 10 of 1280</p>
    </div>
    <div>

    </div>
   </div>
  </Layout>
 );
}
