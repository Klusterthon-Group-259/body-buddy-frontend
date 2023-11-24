import PropTypes from "prop-types";
import Input from "../../../components/Input";
import AuthOption from "./AuthOption";
import Button from "../../../components/Button";

export default function AuthForm({ buttonText, isCreateAccount }) {
  return (
    <form className="flex flex-col">
      <Input
        id="useremail"
        label="Email"
        type="email"
        placeholder="Enter your email"
        className="mb-2.5"
      />
      <Input
        id="userpassword"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <AuthOption
        question="Forgot Password?"
        link="/forgot-password"
        className="text-vermilion"
        action="Reset"
      />
      <Button type="submit" className="w-full mt-2.5 text-sm">
        {buttonText}
      </Button>
      {isCreateAccount && (
        <AuthOption
          question="Don't have an account?"
          link="/create-account"
          className="text-azul"
          action="Sign up"
        />
      )}
    </form>
  );
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  isCreateAccount: PropTypes.boolean,
};
