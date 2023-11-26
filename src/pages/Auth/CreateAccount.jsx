import AuthTemplate from "./components/AuthTemplate";

export default function CreateAccount() {
  return (
    <>
      <AuthTemplate
        title="Create an account"
        buttonText="Create Account"
        question="Already have an account?"
        link="/login"
        className="text-azul"
        action="Log in"
      />
    </>
  );
}
