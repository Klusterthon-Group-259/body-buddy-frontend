import Title from "../../components/Title";
import ButtonLink from "../../components/ButtonLink";

export default function Home() {
  return (
    <div>
      <Title className="text-3xl font-bold mb-6">Get Started</Title>
      <div className="flex items-center gap-4">
        <ButtonLink link="login">Log in</ButtonLink>
        <ButtonLink link="create-account">Sign up</ButtonLink>
      </div>
    </div>
  );
}
