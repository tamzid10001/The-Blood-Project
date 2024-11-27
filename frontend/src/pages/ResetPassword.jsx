import { Link } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";

export default function ResetPassword() {
 return (
  <div className="flex justify-center items-center h-screen">
   <div id="input-box" className="w-full max-w-[400px]">
    <h1 className="text-2xl lg:text-3xl font-medium">Lookup your profile</h1>
    <div className="mt-6">
     <Input
      type="email"
      id="passrst-email"
      placeholder="Enter Email"
      className="w-full mt-1 bg-gray-50"
     />
    </div>

    <div className="mt-4">
     <Button className="w-full">Reset Password</Button>
    </div>

    <p className="text-[14px] text-center mt-6 text-gray-500">
     Back to{" "}
     <Link to="/login" className="text-primary">
      Sign in
     </Link>
    </p>
   </div>
   <div id="success-box" className="w-full max-w-[400px] hidden">
    <h1 className="text-2xl lg:text-3xl font-medium">Check your email</h1>

    <p className="text-[14px] text-gray-500 mt-3">
     We emailed a link to reset your password to tamimiqbal@gmail.com
    </p>

    <div className="mt-7">
     <Button className="w-full">Open email</Button>
    </div>

    <p className="text-[14px] text-center mt-7 text-gray-500">
     Continue to{" "}
     <Link to="/login" className="text-primary">
      Sign in
     </Link>
    </p>
   </div>
  </div>
 );
}
