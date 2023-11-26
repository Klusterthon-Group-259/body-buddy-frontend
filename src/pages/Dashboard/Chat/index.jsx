import { ArrowRight } from "../../../components/Icons";

export default function Chat() {
  const SYMPTOMS = [
    "I have a headache",
    "I have a headache",
    "I have a headache",
    "I have a headache",
  ];

  return (
    <div className="max-w-[500px] flex flex-col items-center">
      <div className="w-[250px] flex flex-col items-center gap-5 mb-20">
        <div className="w-[80px] h-[80px] border rounded-full flex justify-center items-center">
          <img src="" alt="" className="w-full h-full border rounded-full" />
        </div>
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
        <div className="border rounded-lg w-[500px] h-10 p-2.5 flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter your message here"
            className="placeholder:text-xs"
          />
          <button className="bg-azul rounded-md p-2.5">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
