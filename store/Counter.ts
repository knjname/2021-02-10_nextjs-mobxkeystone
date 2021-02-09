import { model, Model, modelAction, prop } from "mobx-keystone";

@model("Counter")
export class Counter extends Model({
  counter: prop(0),
}) {
  @modelAction
  incr() {
    this.counter++;
  }
}
