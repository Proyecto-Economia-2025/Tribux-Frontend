import React from 'react';
import './globals.css';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  domElementGetter: () => {
    const element = document.getElementById('single-spa-application:content');
    if (!element) {
      throw new Error('single-spa-application:content element not found');
    }
    return element;
  },
  errorBoundary() {
    return <div>Error loading content application</div>;
  },
});