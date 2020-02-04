import React from 'react';

interface LayoutProps {
  isError?: boolean;
  children: React.ReactNode;
}

export const Layout = React.memo(({ children }: LayoutProps) => {
  return <div>{children}</div>;
});
