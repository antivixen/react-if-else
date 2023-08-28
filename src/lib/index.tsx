import { Children } from "react";

type ConditionalChildren = JSX.Element | JSX.Element[];

export type WithChildren = {
  children: ConditionalChildren;
};

export type IfProps = {
  when: boolean;
} & WithChildren;

export const ConditionalView = ({ children }: WithChildren) => {
  let childToRender: JSX.Element | null = null;
  let fallback: JSX.Element | null = null;

  Children.forEach(children, (child) => {
    if (child.props.when && childToRender === null) {
      childToRender = child;
    }
    if (child.type.name === "Conditional_Else") {
      fallback = child;
    }
  });

  if (childToRender) {
    return <>{childToRender}</>;
  }

  return fallback;
};

export const If = function If({ children, when }: IfProps) {
  return when ? <>{children}</> : null;
};

export const Else = function Conditional_Else({ children }: WithChildren) {
  return <>{children}</>;
};
