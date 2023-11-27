import { useNavigate } from "react-router-dom";
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

export default function OnboardingPage2() {
  const formContext = useOnboardingForm();
  const { form, updateForm } = formContext;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.gender) {
      updateForm({
        gender: data.gender,
      });
      navigate("/dashboard/onboarding-page-4");
    }
    console.log(form);
  };
  return (
    <>
      {/* <OnboardingTemplate
        title="Let me know your more about you"
        id="gender"
        question="What is your gender?"
        firstPlaceholder="Male/Female/Others"
        isTwoInputs={false}
        updateUserGender={updateUserGender}
      /> */}
      <OnboardingContainer classname="max-w-[420px] h-fit p-10 ">
        <Logo src={bodyBuddy} className="w-28 h-auto mb-16" />
        <div className="flex justify-center items-center">
          <Title className="mb-8 text-center w-[350px] ">
            Hi there 👋, Let me know your more about you
          </Title>
        </div>
        <p className="mb-2.5">What is your gender?</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={twMerge("mb-2.5")}>
            <Input
              type="text"
              id="gender"
              placeholder="Male/Female/Others"
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
