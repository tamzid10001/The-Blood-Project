export default function Button(props) {
 return (
  <button
   {...props}
   className={`text-[16px] bg-primary rounded-md text-white px-4 py-2 active:scale-95 ${props.className ? props.className : ""}`}
  >
   {props.children}
  </button>
 );
}
