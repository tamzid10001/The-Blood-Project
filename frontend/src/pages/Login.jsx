import { Link } from "react-router";
import Label from "../components/Label";
import Input from "./../components/Input";
import Button from "./../components/Button";

export default function Login() {
 return (
  <div className="flex justify-center items-center h-screen">
   <div className="w-full max-w-[400px]">
    <h1 className="text-2xl lg:text-3xl font-medium">Login</h1>
    <div className="mt-6">
     <Label for="login-email" className="mb-5">
      Email
     </Label>
     <Input type="email" id="login-email" className="w-full mt-1" />
    </div>

    <div className="mt-3">
     <Label for="login-password">Password</Label>
     <Input type="password" id="login-password" className="w-full mt-1" />
    </div>

    <Link to="/reset-password" className="text-[14px] text-primary block mt-3">
     Forgot Password?
    </Link>

    <div className="mt-7">
     <Button className="w-full">Sign In</Button>
    </div>

    <p className="text-[14px] text-center mt-4 text-gray-500">
     Don’t have an account already?{" "}
     <Link to="/signup" className="text-primary">
      Sign up now
     </Link>
    </p>
   </div>
  </div>
 );
}
