import "./header.css";

import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  let location = useLocation();

  function Button() {
    if (location.pathname === "/") {
      return (
        <>
          <button
            className="credits"
            onClick={() => {
              navigate("/about");
            }}
          >
            Sobre
          </button>
        </>
      );
    } else if (location.pathname === "/about") {
      return (
        <>
          <button
            className="credits"
            onClick={() => {
              navigate("/");
            }}
          >
            Voltar
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="credits"
            onClick={() => {
              navigate("/");
            }}
          >
            Voltar
          </button>
          <button
            className="credits"
            onClick={() => {
              navigate("/about");
            }}
          >
            Sobre
          </button>
        </>
      );
    }
  }

  return (
    <>
      <header className="header">
        <div className="author">{<Button />}</div>
      </header>
    </>
  );
}

export default Header;
