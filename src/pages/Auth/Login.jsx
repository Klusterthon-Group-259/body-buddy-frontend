import AuthTemplate from "./components/AuthTemplate";

export default function Login() {
  return (
    <>
      <AuthTemplate
        title="Welcome back"
        buttonText="Login"
        isCreateAccount={true}
      />
    </>
  );
}
