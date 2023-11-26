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
import OnboardingPage1 from "./pages/Dashboard/Onboarding/OnboardingPage1";
import OnboardingPage2 from "./pages/Dashboard/Onboarding/OnboardingPage2";
import OnboardingPage3 from "./pages/Dashboard/Onboarding/OnboardingPage3";
import OnboardingPage4 from "./pages/Dashboard/Onboarding/onboardingPage4";
import OnboardingPage5 from "./pages/Dashboard/Onboarding/OnboardingPage5";
import Chat from "./pages/Dashboard/Chat";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
      </Route>
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="email/:token" element={<EmailVerified />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<OnboardingPage1 />} />
        <Route path="onboarding-page-2" element={<OnboardingPage2 />} />
        <Route path="onboarding-page-3" element={<OnboardingPage3 />} />
        <Route path="onboarding-page-4" element={<OnboardingPage4 />} />
        <Route path="onboarding-page-5" element={<OnboardingPage5 />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Route>
  )
);
