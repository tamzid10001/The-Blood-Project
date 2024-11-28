import { Link, useNavigate } from "react-router";
import Button from "../components/Button";
import { Info } from "../components/Icons";
import Input from "../components/Input";
import Label from "../components/Label";
import Layout from "../components/Layout";
import Select from "../components/Select";
import { addInventory } from "../utils/API";

export default function AddInventory() {
 const navigate = useNavigate();
 function submit() {
  addInventory(
   {
    donor_name: document.getElementById("ani-name").value,
    id: document.getElementById("ani-id").value,
    date: document.getElementById("ani-date").value,
    address: {
     division: document.getElementById("ani-division").value,
     district: document.getElementById("ani-district").value,
    },
    blood_group: document.querySelector('input[name="blood-group"]:checked')
     .value,
   },
   (e) => {
    document.getElementById("error-message").classList.remove("hidden");
    document.getElementById("add-inventory-form").classList.add("hidden");
    document.getElementById("error-message-text").textContent = e.error
     .split(":")
     .pop()
     .trim();
   },
   () => {
    navigate("/");
   }
  );
 }
 return (
  <Layout>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     submit();
    }}
    id="add-inventory-form"
    className="w-full block lg:max-w-[800px]"
   >
    <h3 className="font-semibold text-[18px] gap-2 flex items-center mb-2">
     Add New Inventory{" "}
     <div className="stroke-gray-400">
      <Info />
     </div>
    </h3>

    <div className="mt-4">
     <Label htmlFor="ani-name" className="text-gray-400">
      Donor Name
     </Label>
     <Input
      type="text"
      id="ani-name"
      className="w-full mt-1 !py-3 !rounded-xl"
      required
     />
    </div>

    <div className="mt-4">
     <Label htmlFor="ani-id" className="text-gray-400">
      ID
     </Label>
     <Input
      type="number"
      id="ani-id"
      className="w-full mt-1 !py-3 !rounded-xl"
      placeholder="#"
      required
     />
    </div>

    <div className="mt-4">
     <Label htmlFor="ani-date" className="text-gray-400">
      Date
     </Label>
     <Input
      type="date"
      id="ani-date"
      className="w-full mt-1 !py-3 !rounded-xl"
      required
     />
    </div>

    <div className="mt-4 grid grid-cols-2 gap-5 w-full lg:max-w-[500px]">
     <div>
      <Label htmlFor="ani-division" className="text-gray-400">
       Division
      </Label>
      <Select
       id="ani-division"
       className="w-full mt-1 !py-3 !rounded-xl"
       required
      >
       <option value="dhaka">Dhaka</option>
       <option value="chittagong">Chittagong</option>
       <option value="khulna">Khulna</option>
       <option value="rajshahi">Rajshahi</option>
       <option value="barisal">Barisal</option>
       <option value="sylhet">Sylhet</option>
       <option value="rangpur">Rangpur</option>
       <option value="mymensingh">Mymensingh</option>
      </Select>
     </div>

     <div>
      <Label htmlFor="ani-district" className="text-gray-400">
       District
      </Label>
      <Select
       type="text"
       id="ani-district"
       className="w-full mt-1 !py-3 !rounded-xl"
       required
      >
       <option value="dhaka">Dhaka</option>
       <option value="chittagong">Chittagong</option>
       <option value="khulna">Khulna</option>
       <option value="rajshahi">Rajshahi</option>
       <option value="barisal">Barisal</option>
       <option value="sylhet">Sylhet</option>
       <option value="rangpur">Rangpur</option>
       <option value="mymensingh">Mymensingh</option>
      </Select>
     </div>
    </div>

    <div>
     <p className="text-gray-400 text-[14px] mt-6">Blood Group</p>
     <ul className="grid w-full gap-4 md:grid-cols-8 mt-2.5 sm:grid-cols-4 grid-cols-3">
      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((v, i) => (
       <li key={i}>
        <input
         type="radio"
         id={"bloodgroup-" + v}
         name="blood-group"
         value={v}
         className="hidden peer"
        />
        <label
         htmlFor={"bloodgroup-" + v}
         className="inline-flex items-center justify-center rounded-full w-full px-4 py-2 bg-gray-50 border border-gray-200 cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 peer-checked:bg-primary/10 text-[19px] font-medium"
        >
         {v}
        </label>
       </li>
      ))}
     </ul>
    </div>

    <hr className="mt-8 mb-6" />

    <div className="flex gap-4">
     <Link to="/">
      <Button className="!bg-transparent !text-black border-2 !px-6 rounded-xl !py-1.5">
       Cancel
      </Button>
     </Link>
     <Button type="submit" className="rounded-xl !px-6 !py-1.5">
      Add Blood
     </Button>
    </div>
   </form>
   <div id="error-message" className="hidden text-center">
    <h4 className="text-red-500 text-center mt-4 text-[30px] font-semibold">
     Error!
    </h4>
    <p className="text-gray-600 text-center mt-2" id="error-message-text"></p>
    <Button
     className="!bg-transparent !text-black border-2 !px-6 rounded-xl !py-1.5 mt-8"
     onClick={() => window.location.reload()}
    >
     Try Again
    </Button>
   </div>
  </Layout>
 );
}
