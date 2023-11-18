import React from "react";

const DetailsForm = ({ formData, setFormData }: any) => {
  return (
    <div>
      <input
        placeholder="What's going on here"
        value={formData.desc  || ''}  
        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
      />
    </div>
  );
};

export default DetailsForm;
