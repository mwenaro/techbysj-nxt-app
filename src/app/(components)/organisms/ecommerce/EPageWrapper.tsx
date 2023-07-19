import React, { PropsWithChildren, ReactNode } from 'react';

export default function EPageWrapper({ children,className }: { children: ReactNode[] ,className?:string}) {
  const [TopBar, MainContent] = children;
  return (
    <div className={`w-full ${className}`}>
      {TopBar}
      {MainContent}
    </div>
  );
}
