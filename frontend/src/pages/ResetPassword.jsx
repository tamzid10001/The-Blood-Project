import { Link } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { resetPassword } from "../utils/API";
import Loading from "./../components/Loading";

export default function ResetPassword() {
 const submit = () => {
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("input-box").classList.add("hidden");
  resetPassword(
   {
    password: document.getElementById("password").value,
    token: window.location.pathname.split("/")[2],
   },
   (e) => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("input-box").classList.add("hidden");
    document.getElementById("error-box").classList.remove("hidden");
    document.getElementById("error-message").innerText = e.error;
   },
   () => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("input-box").classList.add("hidden");
    document.getElementById("success-box").classList.remove("hidden");
   }
  );
 };
 return (
  <div className="flex justify-center items-center h-screen">
   <form
    onSubmit={(e) => {
     e.preventDefault();
     submit();
    }}
    id="input-box"
    className="w-full max-w-[400px]"
   >
    <h1 className="text-2xl lg:text-3xl font-medium">New Password</h1>
    <div className="mt-6">
     <Input
      type="password"
      id="password"
      className="w-full mt-1 bg-gray-50"
      required
     />
    </div>

    <div className="mt-4">
     <Button className="w-full" type="submit">
      Set Password
     </Button>
    </div>
   </form>

   <div id="loading" className="hidden">
    <Loading />
   </div>

   <div id="error-box" className="w-full max-w-[400px] hidden text-center">
    <h1 className="text-2xl lg:text-3xl font-medium">Error!</h1>
    <p className="text-[14px] text-gray-500 mt-3" id="error-message"></p>
    <button
     className="mt-4 text-primary text-[14px]"
     onClick={() => window.location.reload()}
    >
     Try Again
    </button>
   </div>

   <div id="success-box" className="w-full max-w-[460px] text-center hidden">
    <h1 className="text-2xl lg:text-3xl font-medium">
     Password Reset Successful!
    </h1>

    <p className="text-[14px] text-gray-500 mt-3">
     Your password has been successfully reset.
    </p>

    <p className="text-[14px] mt-7 text-gray-500">
     Continue to{" "}
     <Link to="/login" className="text-primary">
      Sign in
     </Link>
    </p>
   </div>
  </div>
 );
}
