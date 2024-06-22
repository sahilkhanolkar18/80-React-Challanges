import { useReducer } from "react";
import { Line } from "rc-progress";

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  },
};

const reducer = (state, action) => {
  if (action.type === "next_step") {
    return { ...state, currentStep: state.currentStep + 1 };
  } else if (action.type === "prev_step") {
    return { ...state, currentStep: state.currentStep - 1 };
  } else if (action.type === "change") {
    return {
      ...state,
      formData: { ...state.formData, [action.name]: action.value },
    };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    throw new Error("This action type isn't supported.");
  }
};

const Challange32 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = () => dispatch({ type: "next_step" });
  const handlePrevStep = () => dispatch({ type: "prev_step" });

  const handleChange = (e: any) => {
    dispatch({
      type: "change",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Thank you for your submission");
    dispatch({ type: "reset" });
  };

  const { currentStep, formData } = state;

  if (currentStep === 1) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h2 className="w-full text-[white] text-[20px] mb-2 font-semibold">
            Personal Information
          </h2>
          <div>
            <label className="w-full text-[white] text-sm">
              Step {currentStep} of 3
            </label>
            <Line
              percent={33}
              strokeWidth={4}
              strokeColor="#f3a007"
              //@ts-ignore
              strokeWidth={1.5}
              trailWidth={1.5}
            />
          </div>
          <div>
            <label htmlFor="name" className="w-full text-[white] text-sm">
              Name
            </label>
            <input
              required
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="w-full text-[white] text-sm">
              Email
            </label>
            <input
              required
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-1.5"
          >
            Next
          </button>
        </form>
      </div>
    );
  } else if (currentStep === 2) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h2 className="w-full text-[white] text-[20px]  font-semibold">
            Personal Information
          </h2>
          <div>
            <label className="w-full text-[white] text-sm">
              Step {currentStep} of 3
            </label>
            <Line
              percent={66}
              strokeWidth={4}
              strokeColor="#f3a007"
              //@ts-ignore
              strokeWidth={1.5}
              trailWidth={1.5}
            />
          </div>
          <div>
            <label htmlFor="address" className="w-full text-[white] text-sm">
              Address
            </label>
            <input
              required
              name="address"
              id="address"
              type="address"
              placeholder="What is your address?"
              value={formData.address}
              onChange={handleChange}
              className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            />
          </div>
          <div>
            <label htmlFor="city" className="w-full text-[white] text-sm">
              City
            </label>
            <input
              required
              name="city"
              id="city"
              placeholder="What city do you live in?"
              value={formData.city}
              onChange={handleChange}
              className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            />
          </div>
          <div>
            <label htmlFor="zipcode" className="w-full text-[white] text-sm">
              Zipcode
            </label>
            <input
              required
              name="zipcode"
              id="zipcode"
              type="number"
              placeholder="What is your zipcode?"
              value={formData.zipcode}
              onChange={handleChange}
              className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            />
          </div>
          <div>
            <button
              className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-1.5"
              type="button"
              onClick={handleNextStep}
            >
              Next
            </button>
            <button
              type="button"
              className="text-[#f3a007]  w-full py-1 mt-1.5"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          </div>
        </form>
      </div>
    );
  } else if (currentStep === 3) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <form onSubmit={handleSubmit}>
          <h2 className="w-full text-[white] text-[20px] mb-2 font-semibold">
            Confirm your information{" "}
          </h2>
          <div>
            <label className="w-full text-[white] text-md">
              Step {currentStep} of 3
            </label>
            <Line
              percent={100}
              strokeWidth={4}
              strokeColor="#f3a007"
              //@ts-ignore
              strokeWidth={1.5}
              trailWidth={1.5}
            />
            <div className="mb-1"></div>
          </div>
          <table className="w-full border-collapse border border-[lightgrey] text-[white] mt-4">
            <thead>
              <tr>
                <th className="border bg-[#f3a007e1]  px-6 py-0 ">Key</th>
                <th className="border bg-[#f3a007e1] px-6 py-0">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(formData).map((key) => {
                return (
                  <tr key={key} className="hover:border-[white]">
                    <td className="border border-[lightgrey] px-6 py-1 ">
                      {key}
                    </td>
                    <td className="border border-[lightgrey] px-6 py-1">
                      {formData[key]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button
              type="submit"
              className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-[#f3a007]  w-full py-1 mt-1.5"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default Challange32;
