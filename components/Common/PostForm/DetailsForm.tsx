import React from "react";

const DetailsForm = ({ formData, setFormData }: any) => {
  return (
    <form>
      <input
        placeholder="What's going on here"
        value={formData.description || ""}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
    </form>
  );
};

export default DetailsForm;
