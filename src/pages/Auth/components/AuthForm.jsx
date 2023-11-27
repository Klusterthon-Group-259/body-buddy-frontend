import PropTypes from "prop-types";
import Input from "../../../components/Input";
import AuthOption from "./AuthOption";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";

export default function AuthForm({
  buttonText,
  question,
  link,
  className,
  action,
  createAccount,
  LoginToApp,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const values = {
      email: data.email,
      password: data.password,
    };
    if (buttonText === "Create Account") {
      createAccount(values);
    }

    if (buttonText === "Login") {
      LoginToApp(values);
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
        className="mb-4"
      />
      <Input
        register={register}
        required
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      {/* <AuthOption
        question="Forgot Password?"
        link="/forgot-password"
        className="text-vermilion"
        action="Reset"
      /> */}
      <Button type="submit" className="w-full mt-4 mb-2 text-sm">
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
  createAccount: PropTypes.func,
  LoginToApp: PropTypes.func,
};
