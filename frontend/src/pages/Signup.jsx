import { Link } from "react-router";
import Label from "../components/Label";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { signUp } from "../utils/API";

export default function Signup() {
 function submit() {
  signUp(
   {
    name: document.getElementById("signup-name").value,
    email: document.getElementById("signup-email").value,
    password: document.getElementById("signup-password").value,
   },
   (err) => {
    alert(err.error);
   },
   (data) => {
    localStorage.setItem("lxoxg", data.accessToken);
    window.location.href = "/";
   }
  );
 }
 return (
  <div className="flex justify-center items-center h-screen">
   <div className="w-full max-w-[400px]">
    <h1 className="text-2xl lg:text-3xl font-medium">Sign-up</h1>

    <div className="mt-6">
     <Label for="signup-name" className="mb-5">
      Name
     </Label>
     <Input type="text" id="signup-name" className="w-full mt-1" />
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
     <Button className="w-full" onClick={submit}>
      Create account
     </Button>
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
