// import OnboardingTemplate from "../components/OnboardingTemplate";
import Logo from "../../../components/Logo";
import OnboardingContainer from "../components/OnboardingContainer";
import bodyBuddy from "../../../assets/bodybuddy.png";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
// import { useEffect } from "react";
import { useOnboardingForm } from "../../../hooks/useOnboardingForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OnboardingPage5() {
  const formContext = useOnboardingForm();
  const { form, setForm } = formContext;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(form);
    try {
      const response = axios.put(
        "https://bodybuddy.onrender.com/api/v1/user/update",
        form
      );

      const isSuccessful = response.data;

      if (isSuccessful) {
        navigate("/dashboard/chat");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setForm({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
      });
    }
  };

  return (
    <>
      {/* <OnboardingTemplate
        title="I have enough information about you for now"
        id="askQuestion"
        question="Let’s start talking about what is troubling you......"
        buttonText="Ask questions"
        isLastOnboardingPage={true}
        isTwoInputs={false}
      /> */}
      <OnboardingContainer classname="max-w-[420px] h-fit p-10 ">
        <Logo src={bodyBuddy} className="w-28 h-auto mb-16" />
        <div className="flex justify-center items-center">
          <Title className="mb-8 text-center w-[350px] ">
            Hi there 👋, I have enough information about you for now
          </Title>
        </div>
        <p className="mb-2.5">Ask questions</p>
        <div onClick={handleSubmit} className="w-[350px]">
          <Button type="button" link="/dashboard/chat" className="w-full">
            Ask questions
          </Button>
        </div>
      </OnboardingContainer>
    </>
  );
}
