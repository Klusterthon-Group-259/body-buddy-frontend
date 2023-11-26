import PropTypes from "prop-types";
import Input from "../../../components/Input";
import AuthOption from "./AuthOption";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AuthForm({
  buttonText,
  question,
  link,
  className,
  action,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const values = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "https://bodybuddy.onrender.com/api/v1/user/signup",
        values
      );

      console.log(response.data);

      const isSuccessful = response.data;

      console.log(isSuccessful);

      if (response.status === 200) {
        console.log(values);
        console.log("Signup successful:", response.data);
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        required
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        className="mb-2.5"
      />
      <Input
        register={register}
        required
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <AuthOption />
      <Button type="submit" className="w-full mt-2.5 text-sm">
        {buttonText}
      </Button>
      <AuthOption
        question={question}
        link={link}
        className={className}
        action={action}
      />
    </form>
  );
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  question: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string,
};
