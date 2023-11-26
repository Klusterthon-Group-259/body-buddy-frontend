import AuthTemplate from "./components/AuthTemplate";

export default function Login() {
  return (
    <>
      <AuthTemplate
        title="Welcome back"
        buttonText="Login"
        question="Don't have an account?"
        link="/create-account"
        className="text-azul"
        action="Sign up"
      />
    </>
  );
}
