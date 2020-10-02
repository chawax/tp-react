import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <h1>
      Page <em>{location.pathname}</em> introuvable !
    </h1>
  );
};

export default NotFoundPage;
