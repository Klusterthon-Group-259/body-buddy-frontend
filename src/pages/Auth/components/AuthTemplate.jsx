import PropTypes from "prop-types";
import googleIcoon from "../../../assets/google.png";
import appleIcon from "../../../assets/apple.png";
import bodyBuddyIcon from "../../../assets/bodybuddy-logo.png";
import Title from "../../../components/Title";
import AuthForm from "./AuthForm";
import Divider from "./Divider";
import ButtonLink from "../../../components/ButtonLink";
import ImageHolder from "../../../components/ImageHolder";
import Logo from "../../../components/Logo";
import Legal from "./Legal";
import AuthContainer from "./AuthContainer";

export default function AuthTemplate({
  title,
  buttonText,
  question,
  link,
  className,
  action,
  createAccount,
  LoginToApp,
}) {
  return (
    <AuthContainer divClassName="w-80 h-fit flex flex-col">
      <Title className="mb-4">{title}</Title>
      <AuthForm
        buttonText={buttonText}
        question={question}
        link={link}
        className={className}
        action={action}
        createAccount={createAccount}
        LoginToApp={LoginToApp}
      />
      <Divider />
      <ButtonLink className="bg-white mb-3 border rounded text-black font-normal text-sm">
        <ImageHolder src={googleIcoon} /> Continue in with Google
      </ButtonLink>
      <ButtonLink className="bg-white mb-12 border rounded text-black font-normal text-sm">
        <ImageHolder src={appleIcon} /> Continue in with Apple
      </ButtonLink>
      <Logo src={bodyBuddyIcon} className="w-5 h-auto flex justify-center" />
      <Legal />
    </AuthContainer>
  );
}

AuthTemplate.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  question: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string,
  createAccount: PropTypes.func,
  LoginToApp: PropTypes.func,
};
