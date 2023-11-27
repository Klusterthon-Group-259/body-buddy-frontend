import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage2() {
  return (
    <>
      <OnboardingTemplate
        title="Let me know your more about you"
        id="gender"
        question="What is your gender?"
        firstPlaceholder="Male/Female/Others"
        isTwoInputs={false}
      />
    </>
  );
}
