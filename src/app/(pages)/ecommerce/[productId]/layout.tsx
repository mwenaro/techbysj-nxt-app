import { PropsWithChildren } from 'react';

export default function ProductLayout({ children }: PropsWithChildren) {
  return <div className="w-full">{children}</div>;
}
