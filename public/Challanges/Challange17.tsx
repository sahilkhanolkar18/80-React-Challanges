import { useState } from "react";

const Challange17 = () => {
  const [formFields, setFormFields] = useState<any>([]);

  const handleAddFormField = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newField = {
      id: new Date().getTime(),
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: "",
    };

    setFormFields([...formFields, newField]);
    e.target.reset();
  };

  const handleUpdateFormField = (id: any, updatedField: any) => {
    const updatedFormFields = formFields.map((field: any) =>
      field.id === id ? { ...field, ...updatedField } : field
    );
    setFormFields(updatedFormFields);
  };

  const handleDeleteFormField = (id: any) => {
    const updatedFormFields = formFields.filter(
      (field: any) => field.id !== id
    );
    setFormFields(updatedFormFields);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div className="flex flex-col w-[70%] m-auto  items-center h-full mt-4">
      <h1 className="text-[white] font-semibold text-[20px]">Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}>
        <fieldset className="border text-[white] p-4 rounded-md">
          <legend className="text-[white] mb-2 px-1">Add a field</legend>
          <label htmlFor="type" className="text-[white]">
            Field Type
          </label>
          <select
            name="type"
            id="type"
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div className="flex flex-col  justify-start items-start">
            <label htmlFor="required" className="text-[white] ">
              Required
            </label>
            <input
              type="checkbox"
              name="required"
              id="required"
              className="mt-2 mb-1 accent-[orange]"
            />
          </div>
          <label htmlFor="label" className="text-[white]">
            Label
          </label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
          />
          <label htmlFor="placeholder" className="text-[white]">
            Placeholder
          </label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1"
          />
          <button
            type="submit"
            className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-3 text-[black]"
          >
            Add Form Field
          </button>
        </fieldset>
      </form>
      <div className="w-full mx-auto mt-4">
        <form id="form-fields" onSubmit={handleSubmit}>
          <fieldset className="border text-[white] p-4 rounded-md flex flex-col  mb-12">
            <legend className="px-1">Form Fields</legend>
            <ul className="">
              {formFields.map((field: any) => (
                <li key={field.id}>
                  <label htmlFor={`input-${field.id}`}>{field.label}</label>
                  <div className="flex gap-2 items-center justify-center relative">
                    <input
                      id={`input-${field.id}`}
                      required={field.required}
                      placeholder={field.placeholder}
                      type={field.type}
                      value={field.value}
                      className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
                      onChange={(e) =>
                        handleUpdateFormField(field.id, {
                          value: e.target.value,
                        })
                      }
                    />
                    <button
                      type="button"
                      className="absolute text-[#ff0000fd] right-2 top-3 bg-[#3b3c3d] rounded-sm px-1 text-sm"
                      onClick={() => handleDeleteFormField(field.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {formFields.length === 0 && (
              <span>Your form fields will show here</span>
            )}

            {formFields.length > 0 && (
              <button className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-3 text-[black]">
                Submit
              </button>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Challange17;
