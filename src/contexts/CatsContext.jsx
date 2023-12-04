import { createContext, useEffect, useState } from "react";
import { getCatBreeds } from "../services/cats.service";

export const CatsContext = createContext();

const CatsProvider = ({ children }) => {
  const [catBreeds, setCatBreeds] = useState();

  useEffect(() => {
    (async () => {
      const data = await getCatBreeds();
      setCatBreeds(data);
    })();
  }, []);

  return (
    <CatsContext.Provider value={{ catBreeds }}>
      {children}
    </CatsContext.Provider>
  );
};

export default CatsProvider;
