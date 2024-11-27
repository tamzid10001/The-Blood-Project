export default function Label(props) {
 return (
  <div>
   <label
    {...props}
    className={`text-[14px] font-medium ${props.className ? props.className : ""}`}
   >
    {props.children}
   </label>
  </div>
 );
}
