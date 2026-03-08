import "./projects.css";
import Header from "../../components/header/header";
import { useProjectData } from "../../hooks/useProjectData";
import { ProjCard } from "../../components/projCard/projCard";

function Projects() {
  const { data } = useProjectData();
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="task-grid">
          {data?.map((projectData) => (
            <ProjCard
              nome={projectData.nome}
              descricao={projectData.descricao}
              created_at={projectData.created_at}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
