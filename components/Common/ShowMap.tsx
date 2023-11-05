import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("./MyMap"), { ssr: false });

const ShowMap = ({ formData, setFormData }: any) => {
  return (
    <>
      <MyMap formData={formData} setFormData={setFormData} />
    </>
  );
};

export default ShowMap;
