export default function Select(props) {
 return (
  <select
   {...props}
   className={`text-[14px] border-2 rounded-md px-3 py-2 focus:border-primary focus:outline-none ${
    props.className ? props.className : ""
   }`}
  >
   {props.children}
  </select>
 );
}
