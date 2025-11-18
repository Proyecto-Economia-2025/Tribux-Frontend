import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { Header } from '../components/organisms/Header';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Header,
  domElementGetter: () => {
    const element = document.getElementById('single-spa-application:header');
    if (!element) {
      throw new Error('single-spa-application:header element not found');
    }
    return element;
  },
  errorBoundary() {
    return <div>Error loading header</div>;
  },
});