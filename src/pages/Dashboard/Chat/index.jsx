import { ArrowRight } from "../../../components/Icons";
import Logo from "../../../components/Logo";
import bodyBuddy from "../../../assets/bodybuddy.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";

export default function Chat() {
  const { register, handleSubmit } = useForm();
  const AuthContext = useAuth();
  const { token } = AuthContext;
  const [showChatUi, setShowChatUi] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    const prompt = data.prompt;

    try {
      if (token) {
        const response = await axios.get(
          `https://bodybuddy.onrender.com/api/v1/bot/chat?prompt=${prompt}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data) {
          setShowChatUi(true);
        }
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SYMPTOMS = [
    "I have a headache",
    "I have a headache",
    "I have a headache",
    "I have a headache",
  ];

  return (
    <>
      {showChatUi ? (
        <div>chat</div>
      ) : (
        <div className="max-w-[500px] flex flex-col items-center">
          <div className="w-[250px] flex flex-col items-center gap-5 mb-10">
            {/* <div className="w-[80px] h-[80px] border rounded-full flex justify-center items-center">
          <img src="" alt="" className="w-full h-full border rounded-full" />
        </div> */}
            <Logo src={bodyBuddy} className="w-28 h-auto" />
            <p className="text-center font-medium">
              Hi John 👋, how can i help you today?
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {SYMPTOMS.map((symptom, index) => (
                <button key={index} className="p-2.5 border text-xs text-left">
                  {symptom}
                </button>
              ))}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border rounded-lg w-[500px] h-10 p-2.5 flex items-center justify-between"
            >
              <input
                type="text"
                placeholder="Enter your message here"
                className="placeholder:text-xs text-xs "
                {...register("prompt", { required: true })}
              />
              <button type="submit" className="bg-azul rounded-md p-2.5">
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
