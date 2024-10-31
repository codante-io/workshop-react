import { createContext, useEffect, useState, useContext } from "react";

export const PropertiesContext = createContext();

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  return (
    <PropertiesContext.Provider value={{ properties }}>
      {children}
    </PropertiesContext.Provider>
  );
}

export function useProperties() {
  const { properties } = useContext(PropertiesContext);

  return properties;
}
