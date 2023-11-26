import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage4() {
  return (
    <>
      <OnboardingTemplate
        title="Let me know your more about you"
        question="How old are you?"
        firstPlaceholder="Enter your age"
        isTwoInputs={false}
      />
    </>
  );
}
