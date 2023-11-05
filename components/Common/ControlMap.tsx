import dynamic from "next/dynamic";

const Map = dynamic(() => import("./PostForm/LocationMap"), { ssr: false });

const ControlMap = () => {
  return <Map />;
};

export default ControlMap;
