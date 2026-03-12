import { useEffect, useState } from "react";
import { useProjectDataMutate } from "../../../hooks/useProjectDataMutate";
import type { ProjectData } from "../../../interface/ProjectData";
import "./modal.css";

interface InputProps {
  label: string;
  value: string;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const { mutate, isSuccess, isPending } = useProjectDataMutate();

  const submit = () => {
    const projectData: ProjectData = {
      nome,
      descricao,
      created_at: new Date().toISOString(),
    };
    mutate(projectData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Criar novo projeto</h2>
        <form>
          <Input label="nome" value={nome} updateValue={setNome}></Input>
          <Input
            label="descricao"
            value={descricao}
            updateValue={setDescricao}
          ></Input>
          <button onClick={submit} className="btn-secondary">
            {isPending ? "Criando..." : "Criar"}
          </button>
        </form>
      </div>
    </div>
  );
}
