import { createContext, useState } from "react";

export const ReligionContext = createContext();

export const ReligionContextProvider = ({ children }) => {
  const [religion, setReligion] = useState("all");
  return (
    <ReligionContext.Provider value={{ religion, setReligion }}>
      {children}
    </ReligionContext.Provider>
  );
};
