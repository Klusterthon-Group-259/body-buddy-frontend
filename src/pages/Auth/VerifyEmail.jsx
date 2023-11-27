import AuthContainer from "./components/AuthContainer";
import bodyBuddy from "../../assets/bodybuddy.png";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyEmail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const handleResendEmailVerification = async () => {
    const values = {
      userEmail: email,
    };

    try {
      const response = await axios.post(
        "https://bodybuddy.onrender.com/api/v1/email",
        values
      );
      const isSuccessful = response.data;

      if (isSuccessful) {
        toast.success("Email sent successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <AuthContainer
        mainClassName="w-screen h-screen bg-alice-blue flex items-center justify-center"
        divClassName="max-w-[500px] h-fit bg-white p-10 flex flex-col items-center"
      >
        <Logo src={bodyBuddy} className="w-28 h-auto mb-6" />
        <Title className="mb-2 font-bold text-center">
          Please verify your email
        </Title>
        <p className="text-center text-sm text-slate-gray mb-2">
          You’re almost done here. We sent an email to
        </p>
        <p className="font-bold text-center text-sm text-slate-gray mb-6">
          {email}
        </p>
        <p className="text-center text-sm text-slate-gray mb-3">
          Just click on the link in that email to complete your signup. If you
          don’t see it, you may need to check your spam folder.
        </p>
        <p className="text-center text-sm text-slate-gray">
          Still can’t find the email? No problem.
        </p>
        <div onClick={handleResendEmailVerification}>
          <Button className="mt-6 text-sm">Resend Verification Email</Button>
        </div>
      </AuthContainer>
      <ToastContainer />
    </>
  );
}
