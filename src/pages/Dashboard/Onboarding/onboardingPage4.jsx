import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage4() {
  return (
    <>
      <OnboardingTemplate
        title="Let me know your more about you"
        id="age"
        question="How old are you?"
        firstPlaceholder="Enter your age"
        isTwoInputs={false}
      />
    </>
  );
}
