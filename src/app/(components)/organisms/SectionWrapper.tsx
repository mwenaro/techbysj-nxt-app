import { PropsWithChildren } from 'react';

interface IProps {
  sectionId: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  sectionId,
  className,
}: PropsWithChildren<IProps>) {
  return (
    <section
      id={sectionId}
      className={`w-full min-h-screen relative ${className}`}
    >
      {children}
    </section>
  );
}
