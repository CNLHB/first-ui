import React from "react";
import Button from "./components/Button/button";
import "./styles/index.scss";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header style={{ padding: 100 }}>
        <Button btnType="warning" autoFocus>
          Hello
        </Button>
        <Button disabled>Hello1</Button>
        <Button btnType="link" href="http://www.baidu.com">
          Hello2
        </Button>
        <Button
          btnType="primary"
          size="lg"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            alert(999);
          }}
        >
          word
        </Button>
      </header>
    </div>
  );
}

export default App;
