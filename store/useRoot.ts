import { fromSnapshot, getSnapshot } from "mobx-keystone";
import { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { LoginForm } from "./LoginForm";
import { Root } from "./Root";

export const useModel = () => {
  const [counter, setCounter] = useState(
    () =>
      new Root({
        counter: new Counter({}),
        loginForm: new LoginForm({}),
      })
  );

  useEffect(() => {
    const newStore = fromSnapshot<Root>(getSnapshot(counter));
    setCounter(newStore);
  }, []);

  return counter;
};
