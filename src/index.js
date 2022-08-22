import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { PostsProvider } from './context/PostsContext';

const rootNode =  document.getElementById("root");
const root = createRoot(rootNode);

root.render(
  <UserProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </UserProvider>
);
