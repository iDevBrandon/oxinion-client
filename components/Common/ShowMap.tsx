import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("./MyMap"), { ssr: false });

const ShowMap = () => {
  return (
    <>
      <MyMap />
    </>
  );
};

export default ShowMap;
