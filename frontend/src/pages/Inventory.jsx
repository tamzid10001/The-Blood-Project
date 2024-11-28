import Button from "../components/Button";
import { Dropdown } from "../components/Icons";
import Input from "../components/Input";
import InventoryTable from "../components/InventoryTable";
import Layout from "../components/Layout";

export default function Inventory() {
 return (
  <Layout>
   <div className="flex justify-between items-center">
    <h3 className="font-bold !text-[23px]">Inventory</h3>
    <Button className="!text-[16px] !text-black !bg-gray-100 flex justify-center items-center gap-2 !py-1.5">
     Jan 02, 2023 - Jan 31, 2023 <Dropdown />
    </Button>
   </div>
   <hr className="border-t-2 mt-4" />
   <InventoryTable />
   <div className="mt-6 flex justify-between gap-4 flex-col md:flex-row">
    <div>
     <p className="text-[16px] text-gray-400">Showing Results 10 of 180</p>
    </div>
    <div className="flex gap-2 items-center">
        <Button className="!text-[16px] font-semibold !text-primary !bg-transparent border-2 !rounded-full !py-1 !px-2.5">&lt;</Button>
        <div><Input type="text" value="10" disabled className="!border-2 !rounded-lg !py-1.5 !px-4 !w-[60px] px-0 !font-medium !text-primary !bg-transparent" /> <span className="text-gray-400">of</span> 180</div>
        <Button className="!text-[16px] font-semibold !text-primary !bg-transparent border-2 !rounded-full !py-1 !px-2.5">&gt;</Button>
    </div>
   </div>
  </Layout>
 );
}
