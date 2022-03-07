import { PropsWithoutRef } from "react";

interface ClassOverrides {
  fontSize: "md" | "lg" | "xl";
}

function overrideClasses(classes: string, overrides: ClassOverrides): string {
  return classes;
}

interface GrayTranspButtonProps
  extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {
  overrides?: ClassOverrides;
}

export function GrayTranspButton(props: GrayTranspButtonProps) {
  const additionalClasses = props.className && " " + props.className.trim();

  let classes =
    "inline-flex justify-center px-4 py-2 text-md text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" +
    additionalClasses;

  if (props.overrides) {
    classes = overrideClasses(classes, props.overrides);
  }
  return <button className={classes}>{props.children}</button>;
}
