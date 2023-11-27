import { useLocation, useNavigate } from "react-router-dom";
// import OnboardingTemplate from "../components/OnboardingTemplate";
import OnboardingContainer from "../components/OnboardingContainer";
import { useOnboardingForm } from "../../../hooks/useOnboardingForm";
import Logo from "../../../components/Logo";
import bodyBuddy from "../../../assets/bodybuddy.png";
import Title from "../../../components/Title";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ImageHolder from "../../../components/ImageHolder";
import arrowRight from "../../../assets/arrow-right.png";
// import { useCallback, useEffect } from "react";
// import axios from "axios";

export default function OnboardingPage1() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const formContext = useOnboardingForm();
  const { form, setForm } = formContext;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.firstName && data.lastName) {
      setForm({
        id: id,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: form.gender,
        age: form.age,
      });
      navigate("/dashboard/onboarding-page-2");
    }
    console.log(form);
  };
  return (
    <>
      {/* <OnboardingTemplate
        title="Let me know your more about you"
        id="firstName"
        question="What is your name?"
        firstPlaceholder="Enter your first name here"
        secondPlaceholder="Enter your last name here"
        isTwoInputs={true}
        updateUserName={updateUserName}
      /> */}
      <OnboardingContainer classname="max-w-[420px] h-fit p-10 ">
        <Logo src={bodyBuddy} className="w-28 h-auto mb-16" />
        <div className="flex justify-center items-center">
          <Title className="mb-8 text-center w-[350px] ">
            Hi there 👋, Let me know your more about you
          </Title>
        </div>
        <p className="mb-2.5">What is your name?</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={twMerge("mb-2.5 flex items-center gap-4")}>
            <Input
              type="text"
              id="firstName"
              placeholder="Enter your first name here"
              className="mb-2.5"
              register={register}
              required
            />
            <Input
              type="text"
              id="lastName"
              placeholder="Enter your last name here"
              className="mb-2.5"
              register={register}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button className="">
              <ImageHolder src={arrowRight} className="px-0.5" />
            </Button>
          </div>
        </form>
      </OnboardingContainer>
    </>
  );
}
