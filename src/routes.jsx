import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// layouts
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import CreateAccount from "./pages/Auth/CreateAccount";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import EmailVerified from "./pages/Auth/EmailVerified";
import ForgotPassword from "./pages/Auth/ForgotPassword";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="email-verified" element={<EmailVerified />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}></Route>
    </Route>
  )
);
