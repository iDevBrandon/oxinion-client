import { useCallback, useState } from "react";

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<any>(initialValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value as T);
  }, []);
  return [value, handler] as const;
};

export default useInput;
