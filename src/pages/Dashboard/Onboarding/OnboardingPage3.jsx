import { useNavigate } from "react-router-dom";
import OnboardingTemplate from "../components/OnboardingTemplate";

export default function OnboardingPage3() {
  const navigate = useNavigate;

  const updateUserGenotype = (data) => {
    console.log(data);
    if (data.genotype) {
      navigate("/dashboard/onboarding-page-4");
    }
  };

  return (
    <>
      <OnboardingTemplate
        title="Let me know your more about you"
        id="genotype"
        question="What is your blood genotype? (It is okay if you don’t know)?"
        firstPlaceholder="Male/Female/Others"
        isTwoInputs={false}
        updateUserGenotype={updateUserGenotype}
      />
    </>
  );
}
