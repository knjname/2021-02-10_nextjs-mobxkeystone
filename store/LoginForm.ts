import { computed } from "mobx";
import {
  model,
  Model,
  modelAction,
  modelFlow,
  prop,
  _await,
} from "mobx-keystone";
import { sleep } from "./sleep";

@model("LoginForm")
export class LoginForm extends Model({
  loadingState: prop<"initial" | "loading" | "loaded">("initial"),
  loginId: prop(""),
  password: prop(""),
}) {
  @modelAction
  init() {
    this.loginId = "hello";
    this.password = "friends";
  }

  @computed
  get formDisabled() {
    return this.loadingState === "loading";
  }

  @modelAction
  setLoginId(value: string) {
    this.loginId = value;
  }

  @modelAction
  setPassword(value: string) {
    this.password = value;
  }

  @modelFlow
  *submit() {
    this.loadingState = "loading";
    yield* _await(sleep(1000));
    console.log("Submitted");
    this.loadingState = "loaded";
  }
}
