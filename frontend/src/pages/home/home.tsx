import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="conteiner">
        <h1 className="home-title">Bem-vindo ao TaskManager</h1>
        <p className="home-description">
          This is the home page of our application. Here you can find various
          features and information about our services. Feel free to explore and
          enjoy your stay!
        </p>
        <div className="route-conteiner">
          <button className="task-button" onClick={() => navigate("/tasks")}>
            Tasks
          </button>
          <button className="task-button" onClick={() => navigate("/projects")}>
            Projects
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
