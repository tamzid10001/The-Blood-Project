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
    localStorage.setItem("LlkhJHKGheft", data.accessToken);
    if (localStorage.getItem("LlkhJHKGheft"))
     setTimeout(() => (window.location.href = "/"), 100);
   }
  );
 }
 return (
  <>
   <div className="flex flex-col items-center justify-center px-4 py-6 min-h-screen">
    <form
     onSubmit={(e) => {
      e.preventDefault();
      submit();
     }}
     className="w-full max-w-[400px]"
    >
     <h1 className="text-2xl lg:text-3xl font-medium">Login</h1>
     <div className="mt-6">
      <Label for="login-email" className="mb-5">
       Email
      </Label>
      <Input type="email" id="login-email" className="w-full mt-1" required />
     </div>

     <div className="mt-3">
      <Label for="login-password">Password</Label>
      <Input
       type="password"
       id="login-password"
       className="w-full mt-1"
       required
      />
     </div>

     <Link
      to="/forgot-password"
      className="text-[14px] text-primary block mt-3"
     >
      Forgot Password?
     </Link>

     <div className="mt-7">
      <Button type="submit" className="w-full">
       Sign In
      </Button>
     </div>

     <p className="text-[14px] text-center mt-4 text-gray-500">
      Don’t have an account already?{" "}
      <Link to="/signup" className="text-primary">
       Sign up now
      </Link>
     </p>
    </form>

    <div className="w-full text-center mt-14 pb-5">
     <p className="text-[14px] text-gray-500">
      &copy; The Blood Project | {new Date().getFullYear()}
     </p>
    </div>
   </div>
  </>
 );
}
