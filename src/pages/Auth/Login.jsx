import axios from "axios";
import { useLoading } from "../../hooks/useLoading";
import AuthTemplate from "./components/AuthTemplate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function Login() {
  const LoadingContext = useLoading();
  const { isLoading, handleIsLoading } = LoadingContext;
  const { reset } = useForm();

  const handleLoginToApp = async (values) => {
    handleIsLoading();
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
      handleIsLoading();
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

Login.propTypes = {
  isLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  handleIsLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
