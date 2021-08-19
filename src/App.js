import React from 'react';
import logo from './logo.svg';
import './App.css';
import Master from "./Layouts/Master";
import {AppRoot} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
  return (
      <AppRoot mode={`full`}>
        <Master />
      </AppRoot>
  );
}

export default App;
