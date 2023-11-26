import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage1() {
  return (
    <>
      <OnboardingTemplate
        title="Let me know your more about you"
        question="What is your name?"
        firstPlaceholder="Enter your first name here"
        secondPlaceholder="Enter your last name here"
        isTwoInputs={true}
      />
    </>
  );
}
