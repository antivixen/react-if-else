import { render, cleanup, screen } from "@testing-library/react";
import { describe, test, afterEach, expect, beforeEach } from "vitest";
import { ConditionalView, Else, If } from ".";

describe("Library standard behavior", () => {
  beforeEach(() => {
    render(
      <ConditionalView>
        <If when={true}>
          <div>1</div>
        </If>
        <If when={false}>
          <div>2</div>
        </If>
        <Else>
          <div>3</div>
        </Else>
      </ConditionalView>
    );
  });
  afterEach(() => {
    cleanup();
  });
  test("it should show the first true If statement", () => {
    expect(screen.getByText("1")).not.toBeNull();
  });
  test("it should not show the second true If statement", () => {
    expect(screen.queryByText("2")).toBeNull();
  });
  test("it should not show the third Else statement", () => {
    expect(screen.queryByText("3")).toBeNull();
  });
});
describe("Library custom behavior", () => {
  afterEach(() => {
    cleanup();
  });
  test("it should show the second true If statement if the first one is false", () => {
    render(
      <ConditionalView>
        <If when={false}>
          <div>1</div>
        </If>
        <If when={true}>
          <div>2</div>
        </If>
        <Else>
          <div>3</div>
        </Else>
      </ConditionalView>
    );
    expect(screen.queryByText("1")).toBeNull();
    expect(screen.queryByText("2")).not.toBeNull();
  });
  test("it should show Else statement if everything else is false", () => {
    render(
      <ConditionalView>
        <If when={false}>
          <div>1</div>
        </If>
        <If when={false}>
          <div>2</div>
        </If>
        <Else>
          <div>3</div>
        </Else>
      </ConditionalView>
    );
    expect(screen.queryByText("1")).toBeNull();
    expect(screen.queryByText("2")).toBeNull();
    expect(screen.queryByText("3")).not.toBeNull();
  });
});
