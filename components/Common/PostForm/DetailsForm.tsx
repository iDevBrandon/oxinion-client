import React from "react";

const DetailsForm = ({ formData, setFormData }: any) => {
  return (
    <div>
      <input
        placeholder="Lat"
        value={formData.desc}
        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
      />
    </div>
  );
};

export default DetailsForm;
