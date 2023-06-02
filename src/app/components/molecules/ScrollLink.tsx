import React from "react";
import { JsxElement } from "typescript";

export default function ScrollLink({
  path,
  className,
  pathTitle,
  children,
}: {
  path: string;
  className?: string;
  pathTitle?: string;
  children?: JsxElement | any;
}) {
  return <p>{children}</p>;
}
