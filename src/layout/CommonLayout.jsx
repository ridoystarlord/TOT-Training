import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function CommonLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="bg-green-300 py-5">footer</div>
    </>
  );
}
