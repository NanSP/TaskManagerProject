import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="conteiner">
        <h1 className="home-title">Welcome to the Home Page</h1>
        <p className="home-description">
          This is the home page of our application. Here you can find various
          features and information about our services. Feel free to explore and
          enjoy your stay!
        </p>
        <button className="task-button" onClick={() => navigate("/tasks")}>
          Tasks
        </button>
      </div>
    </>
  );
}

export default Home;
