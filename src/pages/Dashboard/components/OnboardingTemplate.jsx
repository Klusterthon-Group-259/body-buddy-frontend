import PropTypes from "prop-types";
import bodyBuddy from "../../../assets/bodybuddy.png";
import arrowRight from "../../../assets/arrow-right.png";
import OnboardingContainer from "./OnboardingContainer";
import Logo from "../../../components/Logo";
import Title from "../../../components/Title";
// import FormContainer from "../../../components/FormContainer";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ImageHolder from "../../../components/ImageHolder";
import { twMerge } from "tailwind-merge";
import ButtonLink from "../../../components/ButtonLink";
import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
export default function OnboardingTemplate({
  title,
  id,
  question,
  firstPlaceholder,
  secondPlaceholder,
  isTwoInputs,
  isLastOnboardingPage,
}) {
  const { register } = useForm();
  return (
    <OnboardingContainer classname="max-w-[420px] h-fit p-10 ">
      <Logo src={bodyBuddy} className="w-28 h-auto mb-16" />
      <div className="flex justify-center items-center">
        <Title className="mb-8 text-center w-[350px] ">
          Hi there 👋, {title}
        </Title>
      </div>
      <p className="mb-2.5">{question}</p>
      {isLastOnboardingPage ? (
        <ButtonLink link="/dashboard/chat">Ask questions</ButtonLink>
      ) : (
        <form>
          <div
            className={twMerge(
              "mb-2.5",
              isTwoInputs ? "flex items-center gap-4" : ""
            )}
          >
            <Input
              type="text"
              id={id}
              placeholder={firstPlaceholder}
              className="mb-2.5"
              register={register}
              required
            />
            <Input
              type="text"
              id="lastName"
              placeholder={secondPlaceholder}
              className={twMerge("mb-2.5", isTwoInputs ? "block" : "hidden")}
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
      )}
    </OnboardingContainer>
  );
}

OnboardingTemplate.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  question: PropTypes.string,
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
  isTwoInputs: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  isLastOnboardingPage: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
