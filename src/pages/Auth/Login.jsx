import axios from "axios";
import { useLoading } from "../../hooks/useLoading";
import AuthTemplate from "./components/AuthTemplate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

export default function Login() {
  const LoadingContext = useLoading();
  const { isLoading, setLoading } = LoadingContext;
  const { reset } = useForm();

  const handleLoginToApp = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://bodybuddy.onrender.com/api/v1/auth/login",
        values
      );

      console.log(response.data);

      const isSuccessful = response.data;

      console.log(isSuccessful);

      if (response.status === 200) {
        console.log("Signup successful:", response.data);
        toast.success("Logged in successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        reset();
      }
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Something went wrong. Please try again", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthTemplate
        title="Welcome back"
        buttonText={isLoading ? "Logging in..." : "Login"}
        question="Don't have an account?"
        link="/create-account"
        className="text-azul"
        action="Sign up"
        LoginToApp={handleLoginToApp}
      />
      <ToastContainer />
    </>
  );
}
