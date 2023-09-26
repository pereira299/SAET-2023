interface StepperProps {
    activeStep: number;
    steps: string[];
    children?: React.ReactNode;
  }
  
  const Stepper = ({ activeStep, steps }: StepperProps) => {
    return (
      <div className="w-full px-5 mx-auto flex flex-row justify-between shadow-lg pb-5">
        {steps.map((step, index) => {
          return (
            <>
            {index !== 0 && (
                <div
                  style={{
                    width: 50 / (steps.length - 1) + "%",
                  }}
                  className={` h-1 rounded-full my-auto ${
                    index <= activeStep ? "bg-orange-700" : "bg-slate-900"
                  }`}
                ></div>
              )}
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col items-center w-fit">
                  <div
                    className={`w-5 h-5 rounded-full mt-5 ${
                      index <= activeStep ? "bg-orange-700" : "bg-slate-900"
                    }`}
                  ></div>
                  <p
                    className={`ml-2 font-bold ${
                      index <= activeStep ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  
  export default Stepper;
  