import { Outlet } from "react-router-dom";
import bodyBuddy from "../assets/bodybuddy.png";
import johnDoe from "../assets/john-doe.png";
import Logo from "../components/Logo";
import ImageHolder from "../components/ImageHolder";

export default function DashboardLayout() {
  return (
    <div className="h-screen grid grid-cols-[250px_minmax(900px,_1fr)]">
      <div className="bg-alice-blue p-10 flex flex-col items-center justify-between">
        <Logo src={bodyBuddy} className="w-28 h-auto" />
        <div className="flex items-center gap-3">
          <ImageHolder src={johnDoe} className="" />
          <p className="text-sm font-semibold">John Doe</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
