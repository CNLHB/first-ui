import React from "react";
import Button from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import "./styles/index.scss";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header style={{ padding: 100 }}>
        <div>
          <Menu
            defaultIndex={"0"}
            defaultOpenSubMenus={["1"]}
            mode="vertical"
            onSelect={(index: string) => {
              console.log(index);
            }}
          >
            <Menu.MenuItem>11122233</Menu.MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown1</MenuItem>
              <MenuItem>dropdown2</MenuItem>
            </SubMenu>
            <MenuItem disabled>11111</MenuItem>
            <MenuItem>xxx2</MenuItem>
            <MenuItem>xxx3</MenuItem>
          </Menu>
        </div>

        <div
          style={{
            width: 500,
          }}
        >
          <Alert title="我是标题" message="this is alert"></Alert>
          <Alert
            title="我是标题"
            message="This is a warning notice about copywriting.This is a warning notice about copywriting.This is a warning notice about copywriting.This is a warning notice about copywriting.this is alert"
            type="danger"
          ></Alert>
          <Alert title="我是标题" type="success"></Alert>
          <Alert message="我是标题" type="success"></Alert>
          <Alert title="我是标题" type="warning"></Alert>
        </div>
      </header>
    </div>
  );
}

export default App;
