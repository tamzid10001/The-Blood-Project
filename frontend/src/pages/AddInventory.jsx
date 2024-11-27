import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Layout from "../components/Layout";

export default function AddInventory() {
 return (
  <Layout>
   <h3>Add New Inventory</h3>

   <div className="mt-3">
    <Label for="ani-name" className="text-gray-400">
     Donor Name
    </Label>
    <Input type="text" id="ani-name" className="w-full max-w-xl mt-1" />
   </div>

   <div className="mt-3">
    <Label for="ani-name" className="text-gray-400">
     ID
    </Label>
    <Input
     type="number"
     id="ani-name"
     className="w-full max-w-xl mt-1"
     placeholder="#"
    />
   </div>

   <div className="mt-3">
    <Label for="ani-name" className="text-gray-400">
     Date
    </Label>
    <Input type="date" id="ani-name" className="w-full max-w-xl mt-1" />
   </div>

   <div className="grid grid-cols-2 gap-5 w-full max-w-xl">
    <div className="mt-3">
     <Label for="ani-name" className="text-gray-400">
      Division
     </Label>
     <Input type="text" id="ani-name" className="w-full mt-1" />
    </div>

    <div className="mt-3">
     <Label for="ani-name" className="text-gray-400">
      District
     </Label>
     <Input type="text" id="ani-name" className="w-full mt-1" />
    </div>
   </div>

   <hr className="mt-8 mb-6 max-w-xl" />

   <div className="flex gap-4">
    <Button className="bg-transparent text-black border-2 rounded-lg py-1.5">
     Cancel
    </Button>
    <Button className="rounded-lg py-1.5">Add Blood</Button>
   </div>
  </Layout>
 );
}