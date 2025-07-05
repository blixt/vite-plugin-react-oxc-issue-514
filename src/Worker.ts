import { DOMAIN_TO_TYPE, TYPE_TO_DOMAIN } from "./SomeMap";

const types: (keyof typeof TYPE_TO_DOMAIN)[] = ["a", "b", "c", "d", "e"];
const domains: (keyof typeof DOMAIN_TO_TYPE)[] = [];

for (const type of types) {
  domains.push(TYPE_TO_DOMAIN[type]);
}

for (const domain of domains) {
  console.log("type for " + domain + " is " + DOMAIN_TO_TYPE[domain]);
}
