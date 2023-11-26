import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage3() {
  return (
    <>
      <OnboardingTemplate
        title="Let me know your more about you"
        question="What is your blood genotype? (It is okay if you don’t know)?"
        firstPlaceholder="Male/Female/Others"
        isTwoInputs={false}
      />
    </>
  );
}
