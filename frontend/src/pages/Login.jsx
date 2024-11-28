import { Link } from "react-router";
import Label from "../components/Label";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { logIn } from "../utils/API";

export default function Login() {
 function submit() {
  logIn(
   {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value,
   },
   (err) => {
    alert(err.error);
   },
   (data) => {
    localStorage.setItem("lxoxg", data.accessToken);
    if (localStorage.getItem("lxoxg"))
     setTimeout(() => (window.location.href = "/"), 100);
   }
  );
 }
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

    <Link to="/forgot-password" className="text-[14px] text-primary block mt-3">
     Forgot Password?
    </Link>

    <div className="mt-7">
     <Button className="w-full" onClick={submit}>
      Sign In
     </Button>
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
