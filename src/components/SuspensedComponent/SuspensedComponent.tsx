import React, { FC, PropsWithChildren, Suspense } from 'react';

const SuspensedComponent: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback='Loading...'>{children}</Suspense>;
};

export default SuspensedComponent;
