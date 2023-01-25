import React from 'react';
import ReactDOM from 'react-dom/client';
import EventComponent from './events/EventComponent';
import Parent from './props/Parent';
import UserSearchRef from './refs/UserSearchRef';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserSearchRef />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
