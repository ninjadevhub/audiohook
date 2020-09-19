import React from 'react';
import './style.scss';

const Page: React.FC = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

export default Page;
