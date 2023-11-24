import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import bodyBuddy from "../assets/bodybuddy.png";

export default function AuthLayout() {
  return (
    <main className="w-screen h-screen grid grid-cols-2">
      <section className="bg-alice-blue flex justify-center items-center">
        <div className="max-w-xs flex flex-col items-center gap-8">
          <Logo src={bodyBuddy} className="block w-48 h-auto" />
          <p className="text-xl">
            Hi there 👋, i am going to be your personal medical AI assistant....
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <Outlet />
      </section>
    </main>
  );
}
