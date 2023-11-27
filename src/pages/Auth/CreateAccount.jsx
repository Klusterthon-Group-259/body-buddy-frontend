import axios from "axios";
import AuthTemplate from "./components/AuthTemplate";
import { useLoading } from "../../hooks/useLoading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function CreateAccount() {
  const LoadingContext = useLoading();
  const { isLoading, handleIsLoading } = LoadingContext;
  const { reset } = useForm();
  const navigate = useNavigate();

  const handleCreateAccount = async (values) => {
    handleIsLoading();

    const { email } = values;

    try {
      const response = await axios.post(
        "https://bodybuddy.onrender.com/api/v1/user/signup",
        values
      );
      const isSuccessful = response.data;

      if (isSuccessful) {
        toast.success(
          "Account created successfully! We have sent you an email",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        reset();
        navigate(`/verify-email?email=${encodeURIComponent(email)}`);
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
        title="Create an account"
        buttonText={isLoading ? "Creating Account..." : "Create Account"}
        question="Already have an account?"
        link="/login"
        className="text-azul"
        action="Log in"
        createAccount={handleCreateAccount}
      />
      <ToastContainer />
    </>
  );
}

CreateAccount.propTypes = {
  isLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  handleIsLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
