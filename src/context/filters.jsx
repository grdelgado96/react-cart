import { createContext,useState } from "react";
// Create context
//This is that we need to consume
export const FiltersContext = createContext();
// Create provider
//This is that provide us the context
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
