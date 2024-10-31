import React, { useContext } from "react";

const PropertiesContext = React.createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => {
  const { properties, setProperties } = useContext(PropertiesContext);
  return { properties, setProperties };
};
