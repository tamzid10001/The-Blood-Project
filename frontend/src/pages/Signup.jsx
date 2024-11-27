import { Link } from "react-router";
import Label from "../components/Label";
import Input from "./../components/Input";
import Button from "./../components/Button";

export default function Signup() {
 return (
  <div className="flex justify-center items-center h-screen">
   <div className="w-full max-w-[400px]">
    <h1 className="text-2xl lg:text-3xl font-medium">Sign-up</h1>

    <div className="mt-6">
     <Label for="signup-email" className="mb-5">
      Name
     </Label>
     <Input type="text" id="signup-email" className="w-full mt-1" />
    </div>

    <div className="mt-3">
     <Label for="signup-email" className="mb-5">
      Email
     </Label>
     <Input type="email" id="signup-email" className="w-full mt-1" />
    </div>

    <div className="mt-3">
     <Label for="signup-password">Password</Label>
     <Input type="password" id="signup-password" className="w-full mt-1" />
    </div>

    <div className="mt-7">
     <Button className="w-full">Create account</Button>
    </div>
    <p className="text-[14px] text-center mt-4 text-gray-500">
     Have an account already?{" "}
     <Link to="/login" className="text-primary">
      Sign in
     </Link>
    </p>
   </div>
  </div>
 );
}
