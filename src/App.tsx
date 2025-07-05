import { useMemo, useState } from "react";
import { DOMAIN_TO_TYPE } from "./SomeMap";

export function App() {
  const [domain, setDomain] = useState("");
  const type = useMemo(() => {
    if (
      domain === "One" ||
      domain === "Two" ||
      domain === "Three" ||
      domain === "Four" ||
      domain === "Five"
    ) {
      return DOMAIN_TO_TYPE[domain];
    }
    return "";
  }, [domain]);

  return (
    <div>
      <h1>Hello</h1>
      <p>Hello World!</p>
      <select value={domain} onChange={(e) => setDomain(e.target.value)}>
        <option value="">Select a domain</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Four">Four</option>
        <option value="Five">Five</option>
      </select>
      <p>
        {domain} / {type}
      </p>
    </div>
  );
}

export default App;
