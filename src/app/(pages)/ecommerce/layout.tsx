
import { EPageTopBar, EPageWrapper } from '@/app/(components)/organisms/ecommerce';
import React, { PropsWithChildren } from 'react';

export default function PageLayout({ children:MainContent}: PropsWithChildren) {
  const productCategories = ['all', 'thobes', 'shirts'];
  return (
    <EPageWrapper className="pt-20">
      <EPageTopBar productCategories={productCategories} />
      {MainContent}
    </EPageWrapper>
  );
}
