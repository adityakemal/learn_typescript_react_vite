import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
