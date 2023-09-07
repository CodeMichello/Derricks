import { useLocation } from "react-router-dom";

function Horizontal() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return <></>;
  return (
    <div className=" flex items-center justify-center pt-14 pb-10">
      <hr className="text-gray w-[290px] md:w-[700px] lg:w-[1150px] hover:text-yellowish " />
    </div>
  );
}

export default Horizontal;
