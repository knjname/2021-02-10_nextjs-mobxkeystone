import { useObserver } from "mobx-react-lite";
import Link from "next/link";
import Layout from "../components/Layout";
import { useModel } from "../store/useRoot";

const IndexPage = () => {
  const model = useModel();
  const { loginForm } = model;
  return useObserver(() => {
    const disabled = loginForm.formDisabled;
    return (
      <div>
        <p>
          Login ID:{" "}
          <input
            type="text"
            disabled={disabled}
            value={loginForm.loginId}
            onChange={(ev) => loginForm.setLoginId(ev.currentTarget.value)}
          />
        </p>
        <p>
          Password:{" "}
          <input
            type="text"
            disabled={disabled}
            value={loginForm.password}
            onChange={(ev) => loginForm.setPassword(ev.currentTarget.value)}
          />
        </p>
        <button disabled={disabled} onClick={() => loginForm.submit()}>
          Login as {loginForm.loginId}
        </button>
      </div>
    );
  });
};

export default IndexPage;
