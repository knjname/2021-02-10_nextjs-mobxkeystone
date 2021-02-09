import { useState } from "react";
import { Counter } from "./Counter";

export const useCounter = () => {
  const [counter] = useState(() => new Counter({}));

  return counter;
};
