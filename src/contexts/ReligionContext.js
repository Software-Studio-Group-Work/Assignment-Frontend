import { createContext, useContext, useState } from "react";

export const ReligionContext = createContext();

export const ReligionContextProvider = ({ children }) => {
  const [religion, setReligion] = useState("ทั้งหมด");
  return (
    <ReligionContext.Provider value={{ religion, setReligion }}>
      {children}
    </ReligionContext.Provider>
  );
};
