import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage5() {
  return (
    <>
      <OnboardingTemplate
        title="I have enough information about you for now"
        question="Let’s start talking about what is troubling you......"
        buttonText="Ask questions"
        isLastOnboardingPage={true}
        isTwoInputs={false}
      />
    </>
  );
}
