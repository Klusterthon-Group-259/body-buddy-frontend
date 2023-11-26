import verified from "../../assets/verified.png";
import AuthContainer from "./components/AuthContainer";
import ImageHolder from "../../components/ImageHolder";
import Title from "../../components/Title";
import ButtonLink from "../../components/ButtonLink";

export default function EmailVerified() {
  return (
    <AuthContainer
      mainClassName="w-screen h-screen bg-alice-blue flex items-center justify-center"
      divClassName="max-w-[420px] h-fit bg-white p-10 flex flex-col items-center"
    >
      <ImageHolder
        src={verified}
        alt="verified logo"
        className="w-[68px] h-[68px] "
      />
      <Title className="font-bold text-center my-8">
        Your email has been verified
      </Title>
      <ButtonLink link="/login" className="w-2/3 text-sm">
        Login
      </ButtonLink>
    </AuthContainer>
  );
}
