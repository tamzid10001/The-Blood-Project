export default function Input(props) {
 return (
  <input
   {...props}
   className={`text-[14px] border-2 rounded-md px-3 py-2 focus:border-primary focus:outline-none ${
    props.className ? props.className : ""
   }`}
  />
 );
}
