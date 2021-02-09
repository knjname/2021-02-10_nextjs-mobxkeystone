import { Model, model, modelAction, prop } from "mobx-keystone";
import { Counter } from "./Counter";
import { LoginForm } from "./LoginForm";

@model("Root")
export class Root extends Model({
  counter: prop<Counter>(),
  loginForm: prop<LoginForm>(),
}) {
  @modelAction
  init() {
    this.loginForm.init();
  }
}
