import InventoryTable from "../components/InventoryTable";
import Layout from "../components/Layout";

export default function Inventory() {
 return (
  <Layout>
   <div className="flex justify-between items-center">
    <h3 className="font-bold !text-[23px]">Inventory</h3>
   </div>
   <hr className="border-t-2 mt-4" />
   <InventoryTable />
  </Layout>
 );
}
