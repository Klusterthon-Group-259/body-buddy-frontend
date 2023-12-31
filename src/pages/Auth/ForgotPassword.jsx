import { Link } from "react-router-dom";
import bodyBuddy from "../../assets/bodybuddy.png";
import AuthContainer from "./components/AuthContainer";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <AuthContainer
      mainClassName="w-screen h-screen bg-alice-blue flex items-center justify-center"
      divClassName="max-w-[500px] h-fit bg-white p-10"
    >
      <Logo src={bodyBuddy} className="w-28 h-auto mb-6" />
      <Title className="mb-2 font-bold">Forgot Password</Title>
      <p className="text-slate-gray text-sm w-[350px] mb-5">
        An email with your password reset link will be emailed to you
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input
          id="useremail"
          label="Email"
          type="email"
          placeholder="Enter your email"
          className="mb-3"
          register={register}
          required
        />
        <Button className="text-sm">Submit</Button>
        <Link
          to="/login"
          className="mt-6 flex justify-center text-xs text-vermilion hover:underline"
        >
          Back to Login
        </Link>
      </form>
    </AuthContainer>
  );
}
