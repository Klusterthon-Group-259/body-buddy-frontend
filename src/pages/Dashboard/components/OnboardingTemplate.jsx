import PropTypes from "prop-types";
import bodyBuddy from "../../../assets/bodybuddy.png";
import arrowRight from "../../../assets/arrow-right.png";
import OnboardingContainer from "./OnboardingContainer";
import Logo from "../../../components/Logo";
import Title from "../../../components/Title";
import FormContainer from "../../../components/FormContainer";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ImageHolder from "../../../components/ImageHolder";
import { twMerge } from "tailwind-merge";
import ButtonLink from "../../../components/ButtonLink";

export default function OnboardingTemplate({
  title,
  question,
  firstPlaceholder,
  secondPlaceholder,
  isTwoInputs,
  isLastOnboardingPage,
}) {
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
        <FormContainer>
          <div
            className={twMerge(
              "mb-2.5",
              isTwoInputs ? "flex items-center gap-4" : ""
            )}
          >
            <Input
              type="text"
              placeholder={firstPlaceholder}
              className="mb-2.5"
            />
            <Input
              type="text"
              placeholder={secondPlaceholder}
              className={twMerge("mb-2.5", isTwoInputs ? "block" : "hidden")}
            />
          </div>
          <div className="flex justify-end">
            <Button className="">
              <ImageHolder src={arrowRight} className="px-0.5" />
            </Button>
          </div>
        </FormContainer>
      )}
    </OnboardingContainer>
  );
}

OnboardingTemplate.propTypes = {
  title: PropTypes.string,
  question: PropTypes.string,
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
  isTwoInputs: PropTypes.boolean,
  isLastOnboardingPage: PropTypes.boolean,
};
