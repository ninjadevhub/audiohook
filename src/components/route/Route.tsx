import React from 'react';
import { Route as RRDRoute, RouteProps } from 'react-router-dom';

const Route: React.FC<RouteProps> = ({ ...props }) => {
  return <RRDRoute {...props} />;
};

export default Route;
