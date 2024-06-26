import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../middleware";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";

import { ethers } from "ethers";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Please provide a valid image URL.");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div className="bg-gray-900  text-white p-10   rounded-md flex flex-col items-center">
      {isLoading && <Loader />}
      <div className="bg-[#3a3a43] rounded-md  md:min-w-[380px] text-center">
        <h1 className="font-epilogue font-bold text-3xl sm:text-4xl text-white py-2">
          Start a Campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-8 md:w-[400px] flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row md:gap-4">
          <FormField
            labelName="Your Name *"
            placeholder="Enter your name"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Enter campaign title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="flex flex-col md:flex-row md:gap-4">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="Select end date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <FormField
          labelName="Campaign Image *"
          placeholder="Paste image URL"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />

        <div className="flex justify-center mt-6">
          <CustomButton
            btnType="submit"
            title="Submit New Campaign"
            styles="bg-[blue]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
