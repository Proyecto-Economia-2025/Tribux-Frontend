import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import HomePage from './pages/home';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: HomePage,
  errorBoundary() {
    return <div>Error loading landing page</div>;
  },
});