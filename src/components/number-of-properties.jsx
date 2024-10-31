import { useProperties } from "../providers/property-provider";

function NumberOfProperties() {
  const properties = useProperties();

  return <span>({properties.length})</span>;
}

export default NumberOfProperties;
