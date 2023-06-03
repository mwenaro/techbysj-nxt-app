import { PropsWithChildren } from "react";

interface IProps {
  sectionId: string;
  className?:string
}

export default function SectionWrapper({
  children,
  sectionId,
  className
}: PropsWithChildren<IProps>) {
  return (
    <section id={sectionId} className={`min-h-screen bg-slate-100 relative ${className}`}>
      {children}
    </section>
  );
}
