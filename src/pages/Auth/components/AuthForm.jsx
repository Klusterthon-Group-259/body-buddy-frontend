import PropTypes from "prop-types";
import FormContainer from "../../../components/FormContainer";
import Input from "../../../components/Input";
import AuthOption from "./AuthOption";
import Button from "../../../components/Button";

export default function AuthForm({
  buttonText,
  question,
  link,
  className,
  action,
}) {
  return (
    <FormContainer>
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
    </FormContainer>
  );
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  question: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string,
};
