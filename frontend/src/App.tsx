import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import Task from "./pages/tasks/tasks.tsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
