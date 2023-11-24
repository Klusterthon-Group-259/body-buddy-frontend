import PropTypes from "prop-types";
import googleIcoon from "../../../assets/google.png";
import appleIcon from "../../../assets/apple.png";
import bodyBuddyIcon from "../../../assets/bodybuddy-logo.png";
import AuthForm from "./AuthForm";
import ImageHolder from "../../../components/ImageHolder";
import ButtonLink from "../../../components/ButtonLink";
import Legal from "./Legal";
import Logo from "../../../components/Logo";
import Title from "../../../components/Title";
import Divider from "./Divider";

export default function AuthTemplate({ title, buttonText, isCreateAccount }) {
  return (
    <div className="w-80 h-fit flex flex-col">
      <Title>{title}</Title>
      <AuthForm buttonText={buttonText} isCreateAccount={isCreateAccount} />
      <Divider />
      <ButtonLink className="bg-white mb-3 border rounded text-black font-normal text-sm">
        <ImageHolder src={googleIcoon} /> Continue in with Google
      </ButtonLink>
      <ButtonLink className="bg-white mb-12 border rounded text-black font-normal text-sm">
        <ImageHolder src={appleIcon} /> Continue in with Apple
      </ButtonLink>
      <Logo src={bodyBuddyIcon} className="w-5 h-auto flex justify-center" />
      <Legal />
    </div>
  );
}

AuthTemplate.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  isCreateAccount: PropTypes.boolean,
};
