import { type ReactNode, type ElementType, ComponentPropsWithRef } from "react";

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithRef<T>;

// ElementType: means that the value must be some kind of identifier of the component. but not jsx element. If its jsx element, it would be of type ReactNode

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default Container;
