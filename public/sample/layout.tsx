// import { Footer, Header } from '../(components)';

export const metadata = {
  title: 'Techbysj - Sample Page',
  description: 'Sample Page',
};

export default function SampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children}</>;
}
