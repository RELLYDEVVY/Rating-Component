import { useState } from "react";
import star from "./assets/icon-star.svg";
import mobile from "./assets/illustration-thank-you.svg";

const Rating = () => {
  const [ratevalue, setRatevalue] = useState(0);

  const [isSubmit, setIsSubmit] = useState(false);

  const handlesubmit = () => {
    if (ratevalue) {
      setIsSubmit(true);
    }
  };

  return (
    <div className="w-96 h-96 inline-block whitespace-nowrap overflow-hidden ">
      <div
        className="inline-block whitespace-normal align-top transition-all duration-200"
        style={{
          transform: isSubmit ? "translateX(-100%)" : "translateX(0%)",
        }}
      >
        <div className="  text-white flex flex-col w-96 h-96 p-4 gap-8 bg-[#222731] rounded-xl ">
          <div className=" h-7 w-7 mt-1 ">
            <img
              className=" object-contain w-full h-full "
              src={star}
              alt="nothing"
            />
          </div>
          <h1 className="text-2xl font-extrabold ">How did we do?</h1>
          <p className=" text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dolorem numquam, consequuntur esse inventore veniam sint sit amet
            consectetur adipisicing elit.
          </p>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((values) => {
              return (
                <div
                  onClick={() => {
                    setRatevalue(values);
                    console.log(values);
                  }}
                  className={`h-12 w-12 rounded-full transition-all grid place-items-center  cursor-pointer text-gray-400  ${
                    values === ratevalue
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-900 hover:bg-white hover:text-orange-500 text-gray-400"
                  }  `}
                  key={values}
                >
                  {values}
                </div>
              );
            })}
          </div>
          <button
            onClick={handlesubmit}
            className="w-full rounded-full py-3 bg-orange-500 transition-all hover:bg-white hover:text-orange-500"
          >
            Submit
          </button>
        </div>
      </div>
      <div
        className="inline-block whitespace-normal transition-all duration-200"
        style={{
          transform: isSubmit ? "translateX(-100%)" : "translateX(0%)",
        }}
      >
        <div className=" text-white p-4 h-96 w-96 bg-[#222731] rounded-xl text-center ">
          <div className=" h-32 w-32 mx-auto inline-block">
            <img
              className=" object-contain w-full h-full "
              src={mobile}
              alt="nothing"
            />
          </div>
          <span className="block px-4 py-1 bg-zinc-900 w-fit mx-auto font-extrabold text-orange-500 rounded-full mt-4">
            You selected {ratevalue} out of 5
          </span>

          <h1 className="text-2xl font-extrabold mt-4 ">Thank you!</h1>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            soluta ad, officia enim porro quaerat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
