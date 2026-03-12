import "./projects.css";
import Header from "../../components/header/header";
import { useProjectData } from "../../hooks/useProjectData";
import { ProjCard } from "../../components/projCard/projCard";
import { CreateModal } from "../../components/card/create-modal/create-modalProj";
import { useState } from "react";

function Projects() {
  const { data } = useProjectData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal}>Criar novo projeto</button>
      </div>
    </>
  );
}

export default Projects;
