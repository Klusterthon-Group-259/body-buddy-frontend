import axios from "axios";
import { useLoading } from "../../hooks/useLoading";
import AuthTemplate from "./components/AuthTemplate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const LoadingContext = useLoading();
  const { isLoading, handleIsLoading } = LoadingContext;
  const { reset } = useForm();

  const navigate = useNavigate();

  const handleLoginToApp = async (values) => {
    handleIsLoading();
    try {
      const response = await axios.post(
        "https://bodybuddy.onrender.com/api/v1/auth/login",
        values
      );

      const isSuccessful = response.data;
      const id = response.data.user.id;
      const accessToken = response.data.accessToken;
      console.log(id, accessToken);
      const URL = `/dashboard?id=${encodeURIComponent(
        id
      )}&token=${encodeURIComponent(accessToken)}`;

      if (isSuccessful) {
        toast.success("Logged in successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate(URL);
        reset();
      }
    } catch (error) {
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
