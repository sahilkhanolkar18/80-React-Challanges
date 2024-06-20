import { Line } from "rc-progress";
import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: "",
};

const Challange16 = () => {
  const [currentStep, setCurrentStep] = useState<any>(1);
  const [formData, setFormData] = useState<any>(initialFormData);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Thank you for your submission");
    setCurrentStep(1);
    setFormData(initialFormData);
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  if (currentStep === 1) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <form
          className="w-[400px] flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          <h1 className="w-full text-[white] text-[20px] mb-2 font-semibold">
            Personal Information
          </h1>

          <p className="w-full text-[white] text-sm">Step 1 of 3</p>
          <Line
            percent={33}
            strokeWidth={4}
            strokeColor="#f3a007"
            //@ts-ignore
            strokeWidth={1.5}
            trailWidth={1.5}
          />
          <div className="mb-1"></div>

          <p className="w-full text-[white] text-md ">Name</p>
          <input
            onChange={handleChange}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            placeholder="Enter your name"
            value={formData.name}
            type="text"
            name="name"
          />
          <p className="w-full text-[white] text-md mt-1">Email</p>
          <input
            onChange={handleChange}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            placeholder="Enter your email"
            value={formData.email}
            type="email"
            name="email"
          />
          <button
            type="button"
            className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-1.5"
            onClick={handleNextStep}
          >
            Next
          </button>
        </form>
      </div>
    );
  } else if (currentStep === 2) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <form
          className="w-[400px] flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          <h1 className="w-full text-[white] text-[20px] mb-2 font-semibold">
            Personal Information
          </h1>

          <p className="w-full text-[white] text-sm">Step 2 of 3</p>
          <Line
            percent={66}
            strokeWidth={4}
            strokeColor="#f3a007"
            //@ts-ignore
            strokeWidth={1.5}
            trailWidth={1.5}
          />
          <div className="mb-1"></div>

          <p className="w-full text-[white] text-md ">Address</p>
          <input
            onChange={handleChange}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            placeholder="Enter your address"
            value={formData.address}
            type="text"
            name="address"
          />
          <p className="w-full text-[white] text-md mt-1">City</p>
          <input
            onChange={handleChange}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            placeholder="Enter your city"
            value={formData.city}
            type="text"
            name="city"
          />
          <p className="w-full text-[white] text-md ">Zipcode</p>

          <input
            onChange={handleChange}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
            placeholder="Enter your zipcode"
            value={formData.zipcode}
            type="text"
            name="zipcode"
          />
          <button
            type="button"
            className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-1.5"
            onClick={handleNextStep}
          >
            Next
          </button>
          <button
            type="button"
            className="text-[#f3a007]  w-full py-1 mt-1.5"
            onClick={handlePreviousStep}
          >
            previous
          </button>
        </form>
      </div>
    );
  } else if (currentStep === 3) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <form
          className="w-[400px] flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          <h1 className="w-full text-[white] text-[20px] mb-2 font-semibold">
            Personal Information
          </h1>

          <p className="w-full text-[white] text-sm">Step 3 of 3</p>
          <Line
            percent={100}
            strokeWidth={4}
            strokeColor="#f3a007"
            //@ts-ignore
            strokeWidth={1.5}
            trailWidth={1.5}
          />
          <div className="mb-1"></div>

          <p className="w-full text-[white] text-md ">Name</p>
          <table className="w-full border-collapse border border-[lightgrey] text-[white]">
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

          <button
            type="submit"
            className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-1.5"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button
            type="button"
            className="text-[#f3a007] w-full py-1 mt-1.5"
            onClick={handlePreviousStep}
          >
            previous
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default Challange16;
