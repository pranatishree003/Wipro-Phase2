import logo from "./logo.svg";
import "./App.css";
import First from "./components/first/first";
import Second from "./components/second/second";
import Third from "./components/third/third";
import Four from "./components/four/four";
import Five from "./components/five/five";
import Counter from "./components/counter/counter";
// import ButtonEx from "./components/ButtonEx/ButtonEx";
import Menu from "./components/menu/menu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      {/* sWelcome to Functional Components...Trainer Prasanna  */}
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route
            path="/third"
            element={
              <Third firstName="Ajay" lastName="Kandagatla" company="Wipro" />
            }
          />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Five />} />
          {/* <Route path="/buttonex" element={<ButtonEx />} /> */}
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
      {/* <First /> <br/>
     <Second /> <br/>
     <Third firstName="Ajay" lastName="Kandagatla" company="Wipro" /> <br/> 
     <Four />
     <ButtonEx /> <hr/>
     <Five /> <br/>
     <Counter /> */}
    </div>
  );
}

export default App;
