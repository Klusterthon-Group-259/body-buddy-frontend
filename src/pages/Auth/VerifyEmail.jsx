import AuthContainer from "./components/AuthContainer";
import bodyBuddy from "../../assets/bodybuddy.png";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Button from "../../components/Button";

export default function VerifyEmail() {
  return (
    <AuthContainer
      mainClassName="w-screen h-screen bg-alice-blue flex items-center justify-center"
      divClassName="max-w-[500px] h-fit bg-white p-10 flex flex-col items-center"
    >
      <Logo src={bodyBuddy} className="w-28 h-auto mb-6" />
      <Title className="mb-2 font-bold text-center">
        Please verify your email
      </Title>
      <p className="text-center text-sm text-slate-gray mb-2">
        You’re almost done here. We sent an email to
      </p>
      <p className="font-bold text-center text-sm text-slate-gray mb-6">
        Johndoe@gmail.com
      </p>
      <p className="text-center text-sm text-slate-gray mb-3">
        Just click on the link in that email to complete your signup. If you
        don’t see it, you may need to check your spam folder.
      </p>
      <p className="text-center text-sm text-slate-gray">
        Still can’t find the email? No problem.
      </p>
      <Button className="mt-6 text-sm">Resend Verification Email</Button>
    </AuthContainer>
  );
}
