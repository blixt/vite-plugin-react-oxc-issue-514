type KeyType = "a" | "b" | "c" | "d" | "e";

export const TYPE_TO_DOMAIN = {
  a: "One",
  b: "Two",
  c: "Three",
  d: "Four",
  e: "Five",
} as const satisfies { [T in KeyType]: string };

export const DOMAIN_TO_TYPE = swapKeysAndValues(TYPE_TO_DOMAIN);

type SwapKeysAndValues<T extends Record<string, string>> = {
  [K in T[keyof T]]: {
    [P in keyof T]: T[P] extends K ? P : never;
  }[keyof T];
};

// Utility type to force TypeScript to expand/compute the type
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

function swapKeysAndValues<T extends Record<string, string>>(
  obj: T
): Expand<SwapKeysAndValues<T>> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  ) as Expand<SwapKeysAndValues<T>>;
}
