import { useObserver } from "mobx-react-lite";
import Link from "next/link";
import Layout from "../components/Layout";
import { useCounter } from "../store/useCounter";

const IndexPage = () => {
  const counter = useCounter();
  return useObserver(() => {
    return (
      <div>
        <button onClick={() => counter.incr()}>
          COUNTER: {counter.counter}
        </button>
      </div>
    );
  });
};

export default IndexPage;
